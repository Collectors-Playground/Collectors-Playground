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
}
