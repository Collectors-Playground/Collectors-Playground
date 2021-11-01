//exporting all consolidated schemas here

import { GraphQLObjectType, GraphQLSchema } from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {},
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {},
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
