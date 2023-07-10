import { default as DataLoader } from 'dataloader';
import { PrismaClient, Project } from '@prisma/client';

//many to one

const projectsLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(Project[] | undefined)[]> => {
    const projects = await db.project.findMany({
      where: {
        diseaseTargetMarket: {
          is: {
            id: { in: [...ids] },
          },
        },
      },
    });
    return ids.map((id) => {
      return projects.filter((i) => i.diseaseTargetMarketId == id);
    });
  };

const diseaseTargetMarketDataLoader = (db: PrismaClient) => ({
  projectsLoader: new DataLoader<string, Project[] | undefined>(
    projectsLoader(db)
  ),
});
export { diseaseTargetMarketDataLoader };
