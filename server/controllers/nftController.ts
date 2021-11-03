import axios from 'axios';
import { Request, Response, NextFunction, Errback } from 'express';

const nftController: any = {};

nftController.getNFTs = (req: Request, res: Response, next: NextFunction) => {
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
};

nftController.buyAllNFT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

nftController.sellAllNFT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

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
