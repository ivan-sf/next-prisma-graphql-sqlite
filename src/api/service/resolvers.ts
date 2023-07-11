import prisma from '../../config/prisma';

const ServiceResolvers = {
  Service: {
    projects: async (parent: any, _: any) => {
      return await prisma.project.findMany({
        where: {
          services: {
            some: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      });
    },
  },
  Query: {
    services: async () => {
      return await prisma.service.findMany({});
    },
    service: async (_: any, args: any) => {
      return await prisma.service.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createService: async (_: any, args: any) => {
      return await prisma.service.create({
        data: { ...args.data },
      });
    },
    updateService: async (_: any, args: any) => {
      return await prisma.service.update({
        where: {
          id: args.where.id,
        },
        data: { ...args.data },
      });
    },
    deleteService: async (_: any, args: any) => {
      return await prisma.service.delete({
        where: {
          id: args.where.id,
        },
      });
    },
  },
};

export { ServiceResolvers };
