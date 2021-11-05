import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents the typical user',
  fields: () => ({
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    sessionID: { type: GraphQLString },
  }),
});
