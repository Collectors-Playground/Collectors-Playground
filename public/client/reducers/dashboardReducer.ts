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
};

const dashboardReducer = (state = dashboardState, action: dashboardAction) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.POPULATE_PORTFOLIO:
      break;
    case types.ADD_TO_PORTFOLIO:
      break;
    case types.SELL_FROM_PORTFOLIO:
      const NFTtoSell = action.payload;
      const currentPortfolioList: portfolioInt[] = stateCopy.portfolioList;
      let currentBalance = stateCopy.balance;
      const filteredList = currentPortfolioList.filter((NFT: portfolioInt) => {
        if (NFT.name === NFTtoSell) currentBalance += NFT.sellPrice;
        return NFT.name !== NFTtoSell;
      });
      return { ...state, portfolioList: filteredList, balance: currentBalance };
    case types.POPULATE_LEADERBOARD:
      break;
    case types.UPDATE_BALANCE:
      break;

    default: {
      return state;
    }
  }
};

export default dashboardReducer;
