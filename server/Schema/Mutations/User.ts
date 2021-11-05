import { UserType } from '../TypeDefs/User';
import db from '../../models/CP';

const bcrypt = require('bcryptjs');
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

export const CREATE_USER = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parent: any, args: any, { res }: any) => {
    try {
      const { username, password } = args;
      const hashedPassword = bcrypt.hashSync(password, 10);
      const sessionID = bcrypt.hashSync(`${Date.now()}`, 10);
      const SQLQuery = `INSERT INTO "users" (username,password, sessionID) VALUES ('${username}','${hashedPassword}','${sessionID}')`;
      await db.query(SQLQuery);
      res.cookie('session_token', `${sessionID}`, {
        httpOnly: true,
        MaxAge: 1000 * 60 * 60,
      });
      res.cookie('ssid', `${sessionID}`, {
        httpOnly: true,
        MaxAge: 1000 * 60 * 60,
      });
      res.cookie('username', `${sessionID}`, {
        httpOnly: true,
        MaxAge: 1000 * 60 * 60,
      });
      return args;
    } catch (err) {
      console.log(err);
    }
  },
};
