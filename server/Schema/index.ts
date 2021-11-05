// //exporting all consolidated schemas here
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
  GET_USER,
  CREATE_USER,
} from './Queries_and_Mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getUser: GET_USER,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
