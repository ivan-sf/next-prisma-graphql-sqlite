import { areasResolver } from '../api/area/resolvers';
import { companiesResolver } from '../api/companies/resolver';
import { usersResolver } from '../api/users/resolver';

const resolvers = {
  Query: {
    ...companiesResolver.queries,
    ...usersResolver.queries,
    ...areasResolver.queries,
  },
  Mutation: {
    ...companiesResolver.mutations,
    ...usersResolver.mutations,
    ...areasResolver.mutations,
  },
  Company: {
    users: companiesResolver.users,
  },
  User: {
    company: usersResolver.company,
    area: usersResolver.area,
  },
  // Area: {
  //   user: areasResolver.user,
  // }
};

export default resolvers;
