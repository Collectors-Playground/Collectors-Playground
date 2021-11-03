const express = require('express');
const nftController = require('../controllers/nftController');

const router = express.Router();

router.get('/getNFTs', nftController.getNFTs, (req, res) =>
  res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json(res.locals.nfts)
);
