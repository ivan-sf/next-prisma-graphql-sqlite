import { default as DataLoader } from 'dataloader';
import { PrismaClient, TeamMembers } from '@prisma/client';

//many to one

const studyRoleUsersLoader =
  (db: PrismaClient) =>
  async (ids: readonly string[]): Promise<(TeamMembers[] | undefined)[]> => {
    const studyRoleUsers = await db.teamMembers.findMany({
      where: {
        position: {
          is: {
            id: { in: [...ids] },
          },
        },
      },
    });
    return ids.map((id) => {
      return studyRoleUsers.filter((i) => i.positionId == id);
    });
  };

const studyRoleDataLoader = (db: PrismaClient) => ({
  studyRoleUsersLoader: new DataLoader<string, TeamMembers[] | undefined>(
    studyRoleUsersLoader(db)
  ),
});
export { studyRoleDataLoader };
