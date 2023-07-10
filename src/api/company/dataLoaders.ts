import { default as DataLoader } from 'dataloader';
import { PrismaClient, Project, City, User } from '@prisma/client';

//many to one

const projectsLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(Project[] | undefined)[]> => {
    const projects = await db.project.findMany({
      where: {
        company: {
          is: {
            id: { in: [...ids] },
          },
        },
      },
    });
    return ids.map((id) => {
      return projects.filter((i) => i.companyId == id);
    });
  };
//one to many
const cityLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(City | undefined)[]> => {
    const city = await db.city.findMany({
      where: {
        id: { in: [...ids] },
      },
    });
    return ids.map((id) => {
      return city.find((city) => city.id == id);
    });
  };

//many to one

const UserLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(User[] | undefined)[]> => {
    const User = await db.user.findMany({
      where: {
        company: {
          is: {
            id: { in: [...ids] },
          },
        },
      },
    });
    return ids.map((id) => {
      return User.filter((i) => i.companyId == id);
    });
  };

const companyDataLoader = (db: PrismaClient) => ({
  projectsLoader: new DataLoader<string, Project[] | undefined>(
    projectsLoader(db)
  ),
  cityLoader: new DataLoader<string, City | undefined>(cityLoader(db)),
  UserLoader: new DataLoader<string, User[] | undefined>(UserLoader(db)),
});
export { companyDataLoader };
