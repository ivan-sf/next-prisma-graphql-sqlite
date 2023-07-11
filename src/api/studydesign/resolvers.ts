import prisma from "../../config/prisma";


    const StudyDesignResolvers = {
    StudyDesign: {
        projects: async (parent:any, _:any) => {
                  return await prisma.project.findMany({
                    where: {
                      studyDesign: {
                        some: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  });
                }
    },
    Query: {
        studyDesigns: async () => {
        return await prisma.studyDesign.findMany({});
        },
        studyDesign: async (_:any, args:any) => {
        return await prisma.studyDesign.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createStudyDesign:async (_:any, args:any)=>{
        return await prisma.studyDesign.create({
          data:{...args.data,  }
        })
      },
      updateStudyDesign:async (_:any, args:any)=>{
        return await prisma.studyDesign.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteStudyDesign:async (_:any, args:any)=>{
        return await prisma.studyDesign.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    }

    export { StudyDesignResolvers };

    