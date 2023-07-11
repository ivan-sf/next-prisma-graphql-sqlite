import prisma from '../../config/prisma';

const DepartmentResolvers = {
  Department: {
    rrActivities: async (parent: any, _: any) => {
      return await prisma.rRActivity.findMany({
        where: {
          department: {
            is: {
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
    departments: async () => {
      return await prisma.department.findMany({});
    },
    department: async (_: any, args: any) => {
      return await prisma.department.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createDepartment: async (_: any, args: any) => {
      return await prisma.department.create({
        data: { ...args.data },
      });
    },
    updateDepartment: async (_: any, args: any) => {
      return await prisma.department.update({
        where: {
          id: args.where.id,
        },
        data: { ...args.data },
      });
    },
    deleteDepartment: async (_: any, args: any) => {
      return await prisma.department.delete({
        where: {
          id: args.where.id,
        },
      });
    },
  },
};

export { DepartmentResolvers };
