import { PrismaClient, Company, Area, User } from "@prisma/client";
import { CompanyInput } from "../../interfaces/CompanyInput";

const prisma = new PrismaClient();

const companiesResolver = {
  mutations: {
    createCompany: (
      _: any,
      { data }: { data: CompanyInput }
    ): Promise<Company> => prisma.company.create({ data }),
    updateCompany: (
      _: any,
      { id, data }: { id: number; data: CompanyInput }
    ): Promise<Company> => prisma.company.update({ where: { id }, data }),
    deleteCompany: (_: any, { id }: { id: number }): Promise<Company> =>
      prisma.company.delete({ where: { id } }),
  },
  users: (parent: Company): Promise<User[]> =>
    prisma.company.findUnique({ where: { id: parent.id } }).users() as Promise<
      User[]
    >,
  areaUsers: (parent: Area): Promise<User[]> =>
    prisma.area.findUnique({ where: { id: parent.id } }).users() as Promise<
      User[]
    >,

  queries: {
    companies: (): Promise<Company[]> => prisma.company.findMany(),
  },
};

export { companiesResolver };
