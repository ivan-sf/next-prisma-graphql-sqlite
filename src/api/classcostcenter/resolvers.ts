import prisma from "../../config/prisma";


    const ClassCostCenterResolvers = {
    ClassCostCenter: {
        rrActivities: async (parent:any, _:any) => {
                  return await prisma.rRActivity.findMany({
                  where: {
                      classCostCenter: {
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
        classCostCenters: async () => {
        return await prisma.classCostCenter.findMany({});
        },
        classCostCenter: async (_:any, args:any) => {
        return await prisma.classCostCenter.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createClassCostCenter:async (_:any, args:any)=>{
        return await prisma.classCostCenter.create({
          data:{...args.data,  }
        })
      },
      updateClassCostCenter:async (_:any, args:any)=>{
        return await prisma.classCostCenter.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteClassCostCenter:async (_:any, args:any)=>{
        return await prisma.classCostCenter.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    }

    export { ClassCostCenterResolvers };

    