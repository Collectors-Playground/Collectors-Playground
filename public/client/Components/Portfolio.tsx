import React from 'react';
import { portfolioInt } from '../../Types/interfaces';

function Portfolio(props: portfolioInt) {
  const {
    name,
    boughtPrice,
    sellPrice,
    sellNFT,
    currentNFT,
    updateCurrentNFT,
  } = props;
  return (
    <div
      className={
        name === currentNFT
          ? 'indivPortfolioItemSelected'
          : 'indivPortfolioItem'
      }
      onClick={() => updateCurrentNFT(name)}
    >
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
