import prisma from "../../config/prisma";


    const ConditionResolvers = {
    Condition: {
        projects: async (parent:any, _:any) => {
                  return await prisma.project.findMany({
                  where: {
                      condition: {
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
        conditions: async () => {
        return await prisma.condition.findMany({});
        },
        condition: async (_:any, args:any) => {
        return await prisma.condition.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createCondition:async (_:any, args:any)=>{
        return await prisma.condition.create({
          data:{...args.data,  }
        })
      },
      updateCondition:async (_:any, args:any)=>{
        return await prisma.condition.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteCondition:async (_:any, args:any)=>{
        return await prisma.condition.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    }

    export { ConditionResolvers };

    