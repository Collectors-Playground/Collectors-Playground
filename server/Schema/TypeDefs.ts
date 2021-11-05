import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    user_id: { type: GraphQLID },
    user_name: { type: GraphQLString },
    password: { type: GraphQLString },
    session_id: { type: GraphQLString },
    net_value: { type: GraphQLInt },
    balance: { type: GraphQLInt },
  }),
});

export const NFTType = new GraphQLObjectType({
  name: 'NFT',
  fields: () => ({
    NFT_id: { type: GraphQLID },
    price_at_buy: { type: GraphQLInt },
    price_at_sell: { type: GraphQLInt },
    date_bought: { type: GraphQLString },
    date_sold: { type: GraphQLString },
  }),
});
