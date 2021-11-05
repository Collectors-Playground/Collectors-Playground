import { Express, Request, Response } from 'express';
import nftController from '../controllers/nftController';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  app.get('/getNFTs', nftController.getNFTs, (req: Request, res: Response) => {
    res
      .status(200)
      .setHeader('content-type', 'application/json')
      .json(res.locals.nfts);
  });

  app.post('/getUserNFTs', (req: Request, res: Response) => {
    nftController.userNFTs;
    res
      .status(200)
      .setHeader('content-type', 'application/json')
      .json(res.locals.getUserNFTs);
  });

  app.post('/sellNFTs', (req: Request, res: Response) => {
    nftController.sellNFTs;
    res
      .status(200)
      .setHeader('content-type', 'application/json')
      .json(res.locals.infoAfterSell);
  });

  app.post('/buyNFTs', (req: Request, res: Response) => {
    nftController.buyNFTs;
    res
      .status(200)
      .setHeader('content-type', 'application/json')
      .json(res.locals.infoAfterBuy);
  });
}
