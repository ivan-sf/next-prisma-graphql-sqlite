import { classCostCenterDataLoader } from "../api/classcostcenter/dataLoaders";
import { ClassCostCenterResolvers } from "../api/classcostcenter/resolvers";

const resolvers = {
  Query: {
    ...ClassCostCenterResolvers.Query,
  },
  Mutation: {
    ...ClassCostCenterResolvers.Mutation,
  },
  Company: {
    ...classCostCenterDataLoader
  }
};

export default resolvers;
