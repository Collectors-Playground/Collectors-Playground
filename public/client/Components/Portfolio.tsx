import React from 'react';
import { portfolioInt } from '../../Types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

function Portfolio(props: portfolioInt) {
  const {
    name,
    image,
    boughtPrice,
    description,
    sellPrice,
    sellNFT,
    currentNFT,
    updateCurrentNFT,
  } = props;
  return (
    <div
      className={
        name === currentNFT.name
          ? 'indivPortfolioItemSelected'
          : 'indivPortfolioItem'
      }
      onClick={() => updateCurrentNFT(name, image, description)}
    >
      <div className="nameImageWrapper">
        <div className="portfolioName">{name}</div>
        <div className="portfolioImage">
          <img
            src={image}
            width={`${0.025 * window.innerWidth}`}
            height={`${0.05 * window.innerHeight}`}
          />
        </div>
      </div>
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
