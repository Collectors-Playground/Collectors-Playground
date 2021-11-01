/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from 'react';
import Market from './Market.jsx';


const MarketsDisplay = props => {


  const markets = props.marketList.map((market, index) => {
    return (
      <Market 
        key={index}
        marketId={market.marketId}
        location={market.location}
        numberOfCards={market.numberOfCards}
        percentOfTotal={market.percentOfTotal}
        addCard = {props.addCard}
        deleteCard = {props.deleteCard}

      />
    );
  });

  return(

    <div className="displayBox">
      <h4>Markets</h4>
      {markets}
    </div>
  );
};

export default MarketsDisplay;