import prisma from "../../config/prisma";


const CompanyResolvers = {
Company: {
    projects: async (parent:any, _:any) => {
              return await prisma.project.findMany({
              where: {
                  company: {
                    is: {
                      id: {
                        equals: parent.id,
                      },
                    },
                  },
                },
              })
            },
            city: async (parent:any, _:any) => {
            return await prisma.city.findUnique({
                where: {
                id: parent.cityId,
                },
            });
            }
            ,User: async (parent:any, _:any) => {
              return await prisma.user.findMany({
              where: {
                  company: {
                    is: {
                      id: {
                        equals: parent.id,
                      },
                    },
                  },
                },
              })
            }
},
Query: {
    companys: async () => {
    return await prisma.company.findMany({});
    },
    company: async (_:any, args:any) => {
    return await prisma.company.findUnique({
        where: {
        id: args.id,
        },
    });
    },
},
Mutation:{
  createCompany:async (_:any, args:any)=>{
    return await prisma.company.create({
      data:{...args.data,  }
    })
  },
  updateCompany:async (_:any, args:any)=>{
    return await prisma.company.update({
      where:{
        id:args.where.id
      },
      data:{...args.data, }
    })
  },
  deleteCompany:async (_:any, args:any)=>{
    return await prisma.company.delete({
      where:{
        id:args.where.id
      }
    })
  },
}
}

export { CompanyResolvers };

