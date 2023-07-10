import { roleDataLoader } from "../api/role/dataLoaders";
import { RoleResolvers } from "../api/role/resolvers";

const resolvers = {
  Query: {
    ...RoleResolvers.Query,
  },
  Mutation: {
    ...RoleResolvers.Mutation,
  },
  Role: {
    ...roleDataLoader
  }
};

export default resolvers;
