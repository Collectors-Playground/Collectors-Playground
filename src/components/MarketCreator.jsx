/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

const MarketCreator = props => (
  <div className = 'newMarketBox'>

    <input 
      type="text"
      onChange={(e) => props.setNewLocation(e.target.value)}
    ></input>

    <button onClick = {() => props.addNewMarket(props.newLocation)}>Add Market</button>

  </div>
);  

export default MarketCreator;