import { conditionDataLoader } from "../api/condition/dataLoaders";
import { ConditionResolvers } from "../api/condition/resolvers";

const resolvers = {
  Query: {
    ...ConditionResolvers.Query,
  },
  Mutation: {
    ...ConditionResolvers.Mutation,
  },
  Condition: {
    ...conditionDataLoader
  }
};

export default resolvers;
