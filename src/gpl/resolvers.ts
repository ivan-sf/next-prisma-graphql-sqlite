import { companyDataLoader } from "../api/company/dataLoaders";
import { CompanyResolvers } from "../api/company/resolvers";

const resolvers = {
  Query: {
    ...CompanyResolvers.Query,
  },
  Mutation: {
    ...CompanyResolvers.Mutation,
  },
  Role: {
    ...companyDataLoader
  }
};

export default resolvers;
