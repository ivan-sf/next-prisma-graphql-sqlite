import { ConditionResolvers } from "../api/condition/resolvers";
import { DiseaseTargetMarketResolvers } from "../api/diseasetargetmarket/resolvers";
import { conditionDataLoader } from "../api/condition/dataLoaders";
import { diseaseTargetMarketDataLoader } from "../api/diseasetargetmarket/dataLoaders";

const resolvers = {
  Query: {
    ...ConditionResolvers.Query,
    ...DiseaseTargetMarketResolvers.Query,
  },
  Mutation: {
    ...ConditionResolvers.Mutation,
    ...DiseaseTargetMarketResolvers.Mutation,
  },
  Condition: {
    ...conditionDataLoader
  },
  DiseaseTargetMarket:{
    ...diseaseTargetMarketDataLoader
  }
};

export default resolvers;
