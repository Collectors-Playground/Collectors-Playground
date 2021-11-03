// import { NFTType, UserType } from '../TypeDefs';
// import {
//   GraphQLList,
//   GraphQLID,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLInputObjectType,
// } from 'graphql';
// import bcrypt from 'bcryptjs';
// import db from '../../models/CP';
// import axios, { AxiosResponse } from 'axios';

// const API_KEY = 'BQY6DXBkV5RuHO6j9oOORkW5wiLdm6Wu';
// const url_endpoint = 'https://graphql.bitquery.io/';

// export const GET_NFT = {
//   type: new GraphQLList(NFTType),
//   resolve(): any {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': API_KEY,
//       },
//       body: JSON.stringify(query),
//     };
//     axios
//       .post(url_endpoint, options)
//       .then((data) => data.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//   },
// };
// const query = `
//   query{
// {
//   ethereum {
//     transfers(currency: {is: "0x06012c8cf97bead5deae237070f9587f8e7a266d"}, amount: {gt: 0}) {
//       currency {
//         symbol
//       }
//       count
//       days: count(uniq: dates)
//       sender_count: count(uniq: senders)
//       receiver_count: count(uniq: receivers)
//       min_date: minimum(of: date)
//       max_date: maximum(of: date)
//     }
//   }
// }

// }
// `;
