import { UserType } from '../TypeDefs';
import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';
import bcrypt from 'bcryptjs';
import db from '../../models/CP';

export const GET_USER = {
  type: new GraphQLList(UserType),
  resolve(): string {
    return 'user';
  },
};

export const USER_LOGIN = {};

export const CREATE_USER = {
  type: UserType,
  args: {
    user_id: { type: GraphQLID },
    user_name: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const { user_name, password } = args;
    return bcrypt
      .hash(password, 10)
      .then((hashedPW: any) => {
        const SQLquery: any = `INSERT INTO user (user_name, password) VALUES (${user_name}, ${hashedPW}) RETURNING user_id`;
        const { rows } = db.query(SQLquery);
        return rows[0].user_id;
      })
      .catch((err: any) => {
        throw err;
      });
  },
};
