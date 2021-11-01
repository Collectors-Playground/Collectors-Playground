/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const { immutableState } = require('immutable');

const initialState = immutableState({
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 0,
  newLocation: '',
});

const marketsReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET: {

      const updatedId = state.lastMarketId++;

      const updatedTotalMarkets = state.totalMarkets++;
      // increment lastMarketId and totalMarkets counters

      // create the new market object from provided data
      const newMarket = {
        marketId: updatedId,
        location: state.newLocation,
        numberOfCards: 0,
        percentOfTotal: 0
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);



      
      // return updated state
      return {
        ...state,
        marketList,
        updatedId,
        updatedTotalMarkets,
        newLocation: state.newLocation,
      };
    }
    case types.SET_NEW_LOCATION: {

      const newState = {...state, newLocation: action.payload};
      
      return newState;
      
    }
    
    case types.ADD_CARD: {

      const stateCopy = {...state};

      stateCopy.totalCards += 1;

      const newMarketList = stateCopy.marketList.map(market => {
        if (market.marketId === action.payload) {
          const newCardNumber = ++market.numberOfCards;
          return {
            ...market, 
            numberOfCards: newCardNumber, 
            percentOfTotal: ((Math.round((newCardNumber / stateCopy.totalCards) * 100) /  100) * 100).toPrecision(3)
          };
        }
        return {
          ...market,  
          percentOfTotal: ((Math.round((market.numberOfCards / stateCopy.totalCards) * 100) / 100) * 100).toPrecision(3)
        };
      });

      const finalState = {...stateCopy, marketList: newMarketList };
      
      return finalState;

    }

    case types.DELETE_CARD:{

      const stateCopy = {...state};
     

      const newMarketList = stateCopy.marketList.map(market => {
        if (market.marketId === action.payload) {

          let newCardNumber
          if (market.numberOfCards - 1 >= 0){
            newCardNumber =  --market.numberOfCards;
            --stateCopy.totalCards;
          } else {
            newCardNumber =  0;
          }

          const percent = (newCardNumber === 0) ? 0 : ((Math.round((newCardNumber / stateCopy.totalCards) * 100) / 100) * 100).toPrecision(3);
          return {
            ...market, 
            numberOfCards: newCardNumber, 
            percentOfTotal: percent
          };
        }
        return {
          ...market,  
          percentOfTotal: isNaN((Math.round((market.numberOfCards / stateCopy.totalCards) * 100) / 100).toFixed(2) * 100) ? 0 : ((Math.round((market.numberOfCards / stateCopy.totalCards) * 100) / 100) * 100).toPrecision(3)
        };
      });

      const finalState = {...stateCopy, marketList: newMarketList };
      
      return finalState;

    }

    

    default: {
      return state;
    }
  }
};

export default marketsReducer;
