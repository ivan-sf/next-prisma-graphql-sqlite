import { PrismaClient, User, Company, Area } from '@prisma/client';
import { UserInput } from '../../interfaces/UserInput';

const prisma = new PrismaClient();

const usersResolver = {
  mutations: {
    createUser: (_: any, { data }: { data: UserInput }): Promise<User> =>
      prisma.user.create({ data }),
    updateUser: (_: any, { id, data }: { id: number; data: UserInput }): Promise<User> =>
      prisma.user.update({ where: { id }, data }),
  },
  company: (parent: User): Promise<Company | null> =>
    prisma.user.findUnique({ where: { id: parent.id } }).company(),
  area: (parent: User): Promise<Area | null> =>
    prisma.user.findUnique({ where: { id: parent.id } }).area(),
    queries: {
        users: (): Promise<User[]> => prisma.user.findMany(),
      }
};

export { usersResolver };
