import { default as DataLoader } from 'dataloader';
import { PrismaClient, RRActivity } from '@prisma/client';

//many to one

const rrActivitiesLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(RRActivity[] | undefined)[]> => {
    const rrActivities = await db.rRActivity.findMany({
      where: {
        department: {
          is: {
            id: { in: [...ids] },
          },
        },
      },
    });
    return ids.map((id) => {
      return rrActivities.filter((i) => i.departmentId == id);
    });
  };

const departmentDataLoader = (db: PrismaClient) => ({
  rrActivitiesLoader: new DataLoader<string, RRActivity[] | undefined>(
    rrActivitiesLoader(db)
  ),
});
export { departmentDataLoader };
