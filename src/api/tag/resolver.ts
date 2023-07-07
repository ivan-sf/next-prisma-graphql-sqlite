import { PrismaClient, Tag, Post } from "@prisma/client";

const prisma = new PrismaClient();

const tagResolver = {
  Query: {
    tags: (): Promise<Tag[]> => prisma.tag.findMany(),
    tag: (_: any, { id }: { id: string }): Promise<Tag | null> =>
      prisma.tag.findUnique({ where: { id } }),
  },
  Mutation: {
    createTag: (
      _: any,
      { name }: { name: string }
    ): Promise<Tag> =>
      prisma.tag.create({
        data: {
          name,
        },
      }),
    updateTag: (
      _: any,
      { id, name }: { id: string; name: string }
    ): Promise<Tag | null> =>
      prisma.tag.update({
        where: { id },
        data: {
          name,
        },
      }),
    deleteTag: (_: any, { id }: { id: string }): Promise<Tag | null> =>
      prisma.tag.delete({
        where: { id },
      }),
  },
  Tag: {
    posts: (parent: Tag): Promise<Post[]> =>
      prisma.tag
        .findUnique({ where: { id: parent.id } })
        .posts() as Promise<Post[]>,
  },
};

export { tagResolver };
