import * as types from '../constants/actionTypes';

const initialState = {
  username: 'test',
  portfolioList: [],
  currentNFT: 'Cats',
  balance: 50,
  leaderBoard: [],
};

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      break;
    case 'POPULATE_PORTFOLIO':
      break;
    case 'ADD_TO_PORTFOLIO':
      break;
    case 'DELETE_FROM_PORTFOLIO':
      break;
    case 'POPULATE_LEADERBOARD':
      break;
    case 'UPDATE_BALANCE':
      break;

    default: {
      return state;
    }
  }
};

export default marketsReducer;
