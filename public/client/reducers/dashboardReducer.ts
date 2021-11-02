import * as types from '../constants/actionTypes';
import {
  dashboardStateInt,
  dashboardAction,
  portfolioInt,
} from '../../Types/interfaces';

const dashboardState: dashboardStateInt = {
  portfolioList: [
    { name: 'Cats', boughtPrice: 100, sellPrice: 200 },
    { name: 'Cats2', boughtPrice: 1000, sellPrice: 300 },
    { name: 'Cats3', boughtPrice: 1000, sellPrice: 400 },
  ],
  currentNFT: 'Cats',
  balance: 50,
  leaderboard: [
    { username: 'Person1', balance: 100 },
    { username: 'Person2', balance: 200 },
    { username: 'Person3', balance: 300 },
  ],
  NFTList: [
    { name: 'SuperCat', description: 'A really super cat', cost: 0.01 },
    { name: 'SuperCat2', description: 'A really super cat2', cost: 0.02 },
    { name: 'SuperCat3', description: 'A really super cat3', cost: 0.03 },
    { name: 'SuperCat4', description: 'A really super cat4', cost: 0.04 },
    { name: 'SuperCat5', description: 'A really super cat5', cost: 0.05 },
  ],
  NFTToBuy: { name: '', description: '', cost: 0 },
};

const dashboardReducer = (state = dashboardState, action: dashboardAction) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.POPULATE_PORTFOLIO:
      break;
    case types.ADD_TO_PORTFOLIO:
      const { portfolioList } = stateCopy;

      portfolioList.push({
        name: action.payload.name,
        boughtPrice: action.payload.cost,
        sellPrice: action.payload.cost,
      });
      return {
        ...state,
        portfolioList,
      };
    case types.SELL_FROM_PORTFOLIO:
      const NFTtoSell = action.payload;
      const currentPortfolioList: portfolioInt[] = stateCopy.portfolioList;
      let currentBalance = stateCopy.balance;
      let currentNFT;
      const filteredList = currentPortfolioList.filter((NFT: portfolioInt) => {
        if (NFT.name === NFTtoSell) currentBalance += NFT.sellPrice;
        return NFT.name !== NFTtoSell;
      });
      if (filteredList.length === 0) currentNFT = 'Purchase an NFT to view';
      return {
        ...state,
        portfolioList: filteredList,
        balance: currentBalance,
        currentNFT,
      };
    case types.POPULATE_LEADERBOARD:
      break;
    case types.UPDATE_BALANCE:
      break;
    case types.UPDATE_CURRENT_NFT:
      return { ...state, currentNFT: action.payload };
    case types.NFT_TO_BUY:
      return {
        ...state,
        NFTToBuy: {
          name: action.payload.name,
          description: action.payload.description,
          cost: action.payload.cost,
        },
      };

    default: {
      return state;
    }
  }
};

export default dashboardReducer;
