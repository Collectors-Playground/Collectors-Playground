import React from 'react';
import { portfolioInt } from '../../Types/interfaces';

function Portfolio(props: portfolioInt) {
  const { name, boughtPrice, sellPrice, sellNFT } = props;
  return (
    <div className="indivPortfolioItem">
      <div>Name: {name}</div>
      <div>Bought at: {boughtPrice}</div>
      <div>Current Sell Price: {sellPrice}</div>
      <button id={name} onClick={() => sellNFT(name)}>
        {' '}
        Sell
      </button>
    </div>
  );
}

export default Portfolio;
