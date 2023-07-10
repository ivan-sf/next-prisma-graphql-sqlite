import { default as DataLoader } from 'dataloader';
import { PrismaClient, Page, User } from '@prisma/client';

//many to many
const pagesLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(Page | undefined)[]> => {
    const pages = await db.page.findMany({
      where: {
        roles: {
          some: {
            id: { in: [...ids] },
          },
        },
      },
      include: {
        roles: {
          select: {
            id: true,
          },
        },
      },
    });
    return ids.map((id) => {
      const list: any = [];
      pages.find((pages) => {
        return pages.roles.some((i) => {
          if (i.id === id) {
            list.push(pages);
          }
        });
      });
      return list;
    });
  };

//many to many
const usersLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(User | undefined)[]> => {
    const users = await db.user.findMany({
      where: {
        roles: {
          some: {
            id: { in: [...ids] },
          },
        },
      },
      include: {
        roles: {
          select: {
            id: true,
          },
        },
      },
    });
    return ids.map((id) => {
      const list: any = [];
      users.find((users) => {
        return users.roles.some((i) => {
          if (i.id === id) {
            list.push(users);
          }
        });
      });
      return list;
    });
  };

const roleDataLoader = (db: PrismaClient) => ({
  pagesLoader: new DataLoader<string, Page | undefined>(pagesLoader(db)),
  usersLoader: new DataLoader<string, User | undefined>(usersLoader(db)),
});
export { roleDataLoader };
