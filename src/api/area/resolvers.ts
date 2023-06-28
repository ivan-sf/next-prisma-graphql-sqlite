import { PrismaClient, Company, Area, User } from '@prisma/client';
import { AreaInput } from '../../interfaces/AreaInput';

const prisma = new PrismaClient();

const areasResolver = {
    queries: {
        areas: ():Promise<Area[]> => prisma.area.findMany(),
        areaById: (_:any, id:number):Promise<Area | null> => 
            prisma.area.findUnique({where:{id}})
    },

    mutations:{
        createArea: (_:any, {data}: {data:AreaInput}):Promise<Area> =>
            prisma.area.create({data})
    }
}

export {areasResolver}