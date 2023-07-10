import prisma from "../../config/prisma";


    const DiseaseTargetMarketResolvers = {
    DiseaseTargetMarket: {
        projects: async (parent:any, _:any) => {
                  return await prisma.project.findMany({
                  where: {
                      diseaseTargetMarket: {
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
        diseaseTargetMarkets: async () => {
        return await prisma.diseaseTargetMarket.findMany({});
        },
        diseaseTargetMarket: async (_:any, args:any) => {
        return await prisma.diseaseTargetMarket.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createDiseaseTargetMarket:async (_:any, args:any)=>{
        return await prisma.diseaseTargetMarket.create({
          data:{...args.data,  }
        })
      },
      updateDiseaseTargetMarket:async (_:any, args:any)=>{
        return await prisma.diseaseTargetMarket.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteDiseaseTargetMarket:async (_:any, args:any)=>{
        return await prisma.diseaseTargetMarket.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    }

    export { DiseaseTargetMarketResolvers };

    