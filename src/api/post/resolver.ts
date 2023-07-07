import { PrismaClient, Post, Tag } from "@prisma/client";

const prisma = new PrismaClient();

const postResolver = {
  Query: {
    posts: (): Promise<Post[]> => prisma.post.findMany(),
    post: (_: any, { id }: { id: string }): Promise<Post | null> =>
      prisma.post.findUnique({ where: { id } }),
  },
  Mutation: {
    createPost: async (
      _: any,
      { title, content, authorId, tagIds }: { title: string; content: string; authorId: string; tagIds: string[] }
    ): Promise<Post> => {
      const createdPost = await prisma.post.create({
        data: {
          title,
          content,
          authorId,
          tags: {
            connect: tagIds.map((tagId) => ({ id: tagId })),
          },
        },
        include: {
          author: true,
          tags: true,
        },
      });

      return createdPost;
    },
    updatePost: (
      _: any,
      { id, title, content }: { id: string; title?: string; content?: string }
    ): Promise<Post | null> =>
      prisma.post.update({
        where: { id },
        data: {
          title,
          content,
        },
      }),
    deletePost: (_: any, { id }: { id: string }): Promise<Post | null> =>
      prisma.post.delete({
        where: { id },
      }),
  },
  Post: {
    author: (parent: Post): Promise<any> =>
      prisma.post
        .findUnique({
          where: { id: parent.id },
        })
        .author(),
    tags: (parent: Post): Promise<Tag[]> =>
      prisma.post
        .findUnique({
          where: { id: parent.id },
        })
        .tags() as Promise<Tag[]>,
    comments: (parent: Post): Promise<Comment[]> =>
      prisma.post
        .findUnique({
          where: { id: parent.id },
        })
        .comments() as unknown as Promise<Comment[]>,
  },
};

export { postResolver };
