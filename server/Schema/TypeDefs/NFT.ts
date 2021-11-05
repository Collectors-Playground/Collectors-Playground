import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

export const NFTType = new GraphQLObjectType({
  name: 'NFT',
  description: 'This represents the typical NFT',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    image: { type: GraphQLString },
    token_id: { type: GraphQLString },
    api_id: { type: GraphQLInt },
  }),
});
