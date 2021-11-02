import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { InformationPopupProps } from '../../Types/interfaces';
import { SELL_FROM_PORTFOLIO } from '../constants/actionTypes';

function InformationPopup(props: InformationPopupProps) {
  const {
    name,
    cost,
    description,
    updateNFTToBuyDispatch,
    addNFTToPortfolioDispatch,
    currentPortfolio,
    currentBalance,
  } = props;

  const checkPurchase = (name: string, cost: number) => {
    const errorDiv = document.querySelector('#purchaseNFTErrorMessage');

    if (cost > currentBalance) {
      errorDiv.innerHTML = 'You do not have enough ETH to purchase this NFT.';
      setTimeout(() => (errorDiv.innerHTML = ''), 3000);
      return;
    }
    for (let i = 0; i < currentPortfolio.length; i++) {
      const currentNFT = currentPortfolio[i];

      console.log(currentNFT.name, name);
      if (currentNFT.name === name) {
        errorDiv.innerHTML =
          'You have already purchased this NFT. Please select another one to purchase.';
        setTimeout(() => (errorDiv.innerHTML = ''), 1500);
        return;
      }
    }
    addNFTToPortfolioDispatch(name, cost);
  };

  return (
    <div className="descriptionAndCostCard">
      <div>
        <p>Description: {description}</p>
        <p>Cost: {cost} eth</p>
        <div className="buttonDiv">
          <button onClick={() => checkPurchase(name, cost)}>Buy</button>
        </div>
      </div>
      <div className="infoExit">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            updateNFTToBuyDispatch('', '', 0);
          }}
        />
      </div>
    </div>
  );
}

export default InformationPopup;
