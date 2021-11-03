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

  app.post(
    '/getNFTs',
    nftController.userNFTs,
    (req: Request, res: Response) => {
      res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(res.locals.getUserNFTs);
    }
  );

  app.post(
    '/sellNFTs',
    nftController.sellNFTs,
    (req: Request, res: Response) => {
      res.status(200).json(res.locals.infoAfterSell);
    }
  );

  app.post('/buyNFTs', nftController.buyNFTs, (req: Request, res: Response) => {
    res.status(200).json(res.locals.infoAfterBuy);
  });
}
