import { NFTType } from '../TypeDefs/NFT';
import db from '../../models/CP';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

export const GET_ALL_NFTS_FROM_API = {
  type: new GraphQLList(NFTType),
  resolve: async () => {
    const SQLQuery = 'SELECT * FROM "nft"';
    const results = await db.query(SQLQuery);
    const { rows } = results;
    return rows;
  },
};
