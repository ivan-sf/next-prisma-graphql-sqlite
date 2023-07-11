import { default as DataLoader } from 'dataloader';
import { PrismaClient, Project } from '@prisma/client';

//many to many
const projectsLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(Project | undefined)[]> => {
    const projects = await db.project.findMany({
      where: {
        services: {
          some: {
            id: { in: [...ids] },
          },
        },
      },
      include: {
        services: {
          select: {
            id: true,
          },
        },
      },
    });
    return ids.map((id) => {
      const list: any = [];
      projects.find((projects) => {
        return projects.services.some((i) => {
          if (i.id === id) {
            list.push(projects);
          }
        });
      });
      return list;
    });
  };

const serviceDataLoader = (db: PrismaClient) => ({
  projectsLoader: new DataLoader<string, Project | undefined>(
    projectsLoader(db)
  ),
});
export { serviceDataLoader };
