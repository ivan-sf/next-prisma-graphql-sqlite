import { ConditionResolvers } from '../api/condition/resolvers';
import { DiseaseTargetMarketResolvers } from '../api/diseasetargetmarket/resolvers';
import { conditionDataLoader } from '../api/condition/dataLoaders';
import { diseaseTargetMarketDataLoader } from '../api/diseasetargetmarket/dataLoaders';
import { StudyDesignResolvers } from '../api/studydesign/resolvers';
import { StudyRoleResolvers } from '../api/studyrole/resolvers';
import { StudyTypeResolvers } from '../api/studytype/resolvers';
import { studyDesignDataLoader } from '../api/studydesign/dataLoaders';
import { studyRoleDataLoader } from '../api/studyrole/dataLoaders';
import { studyTypeDataLoader } from '../api/studytype/dataLoaders';

const resolvers = {
  Query: {
    ...ConditionResolvers.Query,
    ...DiseaseTargetMarketResolvers.Query,
    ...StudyDesignResolvers.Query,
    ...StudyRoleResolvers.Query,
    ...StudyTypeResolvers.Query,
  },
  Mutation: {
    ...ConditionResolvers.Mutation,
    ...DiseaseTargetMarketResolvers.Mutation,
    ...StudyDesignResolvers.Mutation,
    ...StudyRoleResolvers.Mutation,
    ...StudyTypeResolvers.Mutation,
  },
  Condition: {
    ...conditionDataLoader,
  },
  DiseaseTargetMarket: {
    ...diseaseTargetMarketDataLoader,
  },
  StudyDesign: {
    ...studyDesignDataLoader
  },
  StudyRole: {
    ...studyRoleDataLoader
  },
  StudyType: {
    ...studyTypeDataLoader
  },
};

export default resolvers;
