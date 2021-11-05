import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import { GET_ALL_NFTS_FROM_API } from './Queries/NFT';
import { CREATE_USER } from './Mutations/User';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllNFTs: GET_ALL_NFTS_FROM_API,
  },
});

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
