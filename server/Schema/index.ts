// //exporting all consolidated schemas here
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_NFT } from './Queries_and_Mutations/NFT.ts';
import {
  GET_USER,
  CREATE_USER,
} from './Queries_and_Mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getUser: GET_USER,
    getNFT: GET_NFT
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
