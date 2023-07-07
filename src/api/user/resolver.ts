import { PrismaClient, User, Post, Comment } from "@prisma/client";

const prisma = new PrismaClient();

const userResolver = {
  Query: {
    users: (): Promise<User[]> => prisma.user.findMany(),
    user: (_: any, { id }: { id: string }): Promise<User | null> =>
      prisma.user.findUnique({ where: { id } }),
  },
  Mutation: {
    createUser: (
      _: any,
      { name, email, password }: { name: string; email: string; password: string }
    ): Promise<User> =>
      prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      }),
    updateUser: (
      _: any,
      { id, name, email, password }: { id: string; name?: string; email?: string; password?: string }
    ): Promise<User | null> =>
      prisma.user.update({
        where: { id },
        data: {
          name,
          email,
          password,
        },
      }),
    deleteUser: (_: any, { id }: { id: string }): Promise<User | null> =>
      prisma.user.delete({
        where: { id },
      }),
  },
  User: {
    posts: (parent: User): Promise<Post[]> =>
      prisma.post.findMany({ where: { authorId: parent.id } }),
    comments: (parent: User): Promise<Comment[]> =>
      prisma.comment.findMany({ where: { authorId: parent.id } }),
  },
};

export { userResolver };
