
import prisma from "../../config/prisma";

    const StudyRoleResolvers = {
    StudyRole: {
        studyRoleUsers: async (parent:any, _:any) => {
                  return await prisma.teamMembers.findMany({
                  where: {
                      position: {
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
        studyRoles: async () => {
        return await prisma.studyRole.findMany({});
        },
        studyRole: async (_:any, args:any) => {
        return await prisma.studyRole.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createStudyRole:async (_:any, args:any)=>{
        return await prisma.studyRole.create({
          data:{...args.data,  }
        })
      },
      updateStudyRole:async (_:any, args:any)=>{
        return await prisma.studyRole.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteStudyRole:async (_:any, args:any)=>{
        return await prisma.studyRole.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    }

    export { StudyRoleResolvers };

    