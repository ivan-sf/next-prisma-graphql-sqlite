
import prisma from "../../config/prisma";

    const StudyTypeResolvers = {
    StudyType: {
        projects: async (parent:any, _:any) => {
                  return await prisma.project.findMany({
                  where: {
                      studyType: {
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
        studyTypes: async () => {
        return await prisma.studyType.findMany({});
        },
        studyType: async (_:any, args:any) => {
        return await prisma.studyType.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createStudyType:async (_:any, args:any)=>{
        return await prisma.studyType.create({
          data:{...args.data,  }
        })
      },
      updateStudyType:async (_:any, args:any)=>{
        return await prisma.studyType.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteStudyType:async (_:any, args:any)=>{
        return await prisma.studyType.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    }

    export { StudyTypeResolvers };

    