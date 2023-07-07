import { functionsResolver } from '../api/functions/resolver';
import { postResolver } from '../api/post/resolver';
import { tagResolver } from '../api/tag/resolver';
import { userResolver } from '../api/user/resolver';

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...postResolver.Query,
    ...tagResolver.Query,
    ...functionsResolver.queries
  },
  Mutation: {
    ...userResolver.Mutation,
    ...postResolver.Mutation,
    ...tagResolver.Mutation,
  },
  User: {
    ...userResolver.User,
  },
  Post: {
    ...postResolver.Post,
  },
  Tag: {
    ...tagResolver.Tag,
  },

};

export default resolvers;
