/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';

const Market = props => {


  return (
  
    <div className="marketBox">
      <span>Market ID: {props.marketId}</span>
      <br/>
      <span>Location: {props.location}</span>
      <br/>
      <span>Number Of Cards: {props.numberOfCards}</span>
      <br/>
      <span>Percent of total: {props.percentOfTotal}</span>
      <br />
      <div className = 'buttonsDiv'>
        <button onClick = {() => props.addCard(props.marketId)}>Add Card</button>
        <button onClick = {() => props.deleteCard(props.marketId)}>Delete Card</button>
      </div>
    </div>
  );

};

export default Market;