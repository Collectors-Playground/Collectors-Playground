import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    user_id: { type: GraphQLID },
    password: { type: GraphQLString },
    session_id: { type: GraphQLString },
    net_value: { type: GraphQLInt },
    balance: { type: GraphQLInt },
  }),
});
