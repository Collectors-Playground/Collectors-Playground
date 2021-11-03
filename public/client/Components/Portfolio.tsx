import React from 'react';
import { portfolioInt } from '../../Types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

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
      <div>
        Bought at: {boughtPrice}{' '}
        <FontAwesomeIcon icon={faEthereum} style={{ color: 'black' }} />
      </div>
      <div>
        Current Sell Price: {sellPrice}{' '}
        <FontAwesomeIcon icon={faEthereum} style={{ color: 'black' }} />
      </div>
      <button id={name} onClick={() => sellNFT(name)}>
        {' '}
        Sell
      </button>
    </div>
  );
}

export default Portfolio;
