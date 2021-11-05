import axios from 'axios';
import { Request, Response, NextFunction, Errback } from 'express';
import db from '../models/CP';

const nftController: any = {};

nftController.getNFTs = (req: Request, res: Response, next: NextFunction) => {
  try {
    const options: any = {
      method: 'GET',
      url: 'https://api.opensea.io/api/v1/assets?order_by=sale_price&order_direction=desc&offset=0&limit=50&collection=boredapeyachtclub',
    };
    axios
      .request(options)
      .then((response) => {
        const listNFT = [];
        for (let i = 0; i < response.data.assets.length; i++) {
          const nft: any = {};
          nft.id = response.data.assets[i].id;
          nft.token_id = response.data.assets[i].token_id;
          nft.contract_name = response.data.assets[i].asset_contract.name;
          nft.name = response.data.assets[i].name;
          nft.price =
            response.data.assets[i].last_sale.total_price / (1 * 10 ** 18);
          nft.description = response.data.assets[i].collection.description;
          nft.image = response.data.assets[i].image_url;
          listNFT.push(nft);
        }
        res.locals.nfts = listNFT;
        return next();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(`Failed to get NFTs: ${error}`);
    return res.status(400);
  }
};

nftController.userNFTs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id, NFT_id } = req.body;
    const SQLquery: string = `SELECT * FROM transactions WHERE user_id = '${user_id}' AND NFT_id = '${NFT_id} AND price_at_sell = null RETURNING NFT_id, price;`;
    const { rows } = await db.query(SQLquery);

    res.locals.getUserNFTs = rows[0];

    return next();
  } catch (error) {
    console.log(`Failed to get user NFTs: ${error}`);
    return res.status(400);
  }
};

nftController.buyNFT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id, NFT_id, price } = req.body;
    //transaction table: insert transaction user_id, NFT_id, price_at_buy, price_at_sell, profit, date_bought, date_sold
    //user table: update the user's balance and net_value
    //return user's balance, net_value, and collection of owned NFT
    let SQLquery: string = `INSERT INTO "transactions" (user_id, NFT_id, price_at_buy, price_at_sell, profit, date_bought, date_sold) VALUES ('${user_id}','${NFT_id}','${price}',null, null, '${Date.now()}',null); \n`;

    SQLquery += `UPDATE users SET net_value = net_value + '${price}', balance = balance - '${price}' WHERE user_id='${user_id}' RETURNING user_id, net_value, balance;`;

    const { rows } = await db.query(SQLquery);

    res.locals.infoAfterBuy = rows[0];

    return next();
  } catch (error) {
    console.log(`Failed to buy NFTs: ${error}`);
    return res.status(400);
  }
};

nftController.sellNFT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id, NFT_id, price } = req.body;
    //transaction table: update the price_at_sell, profit, date_sold
    let SQLquery: string = `UPDATE "transactions" SET date_sold ='${Date.now()}', profit = '${price}' WHERE user_id = '${user_id}' AND NFT_id = '${NFT_id}'; \n`;
    //user tabe: update the user's balance and net_value
    SQLquery += `UPDATE users SET net_value = net_value - '${price}', balance = balance + '${price}' WHERE user_id='${user_id}' RETURNING user_id, net_value, balance;`;
    //return user's balance, net_value, and collection of owned NFT
    const { rows } = await db.query(SQLquery);

    res.locals.infoAfterSell = rows[0];

    return next();
  } catch (error) {
    console.log(`Failed to sell NFTs: ${error}`);
    return res.status(400);
  }
};

export default nftController;
// const API_KEY = 'BQY6DXBkV5RuHO6j9oOORkW5wiLdm6Wu';
// const url_endpoint = 'https://graphql.bitquery.io/';
// const query = `
//   query{
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
// `;
// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//     'x-api-key': API_KEY,
//   },
//   query: query,
// };
// axios
//   .post(url_endpoint, options)
//   .then((data) => console.log(data.data.data.ethereum.transfers[0]))
//   .catch((error) => console.log(error));
