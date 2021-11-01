import * as types from '../constants/actionTypes';
import { dashboardState, dashboardAction } from '../../Types/interfaces';

const initialState: dashboardState = {
  portfolioList: [],
  currentNFT: 'Cats',
  balance: 50,
  leaderBoard: [],
};

const dashboardReducer = (state = initialState, action: dashboardAction) => {
  switch (action.type) {
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

export default dashboardReducer;
