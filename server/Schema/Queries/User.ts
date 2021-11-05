import { UserType } from '../TypeDefs/User';
const bcrypt = require('bcryptjs');
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

// export const CREATE_USER = {
//   type: UserType,
//   args: {
//     username: { type: GraphQLString },
//     password: { type: GraphQLString },
//   },
//   resolve(parent: any, args: any, context: any) {
//     const { username, password } = args;
//     console.log(context);
//   },
// };
