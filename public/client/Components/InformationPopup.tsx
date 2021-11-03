import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { InformationPopupProps } from '../../Types/interfaces';

function InformationPopup(props: InformationPopupProps) {
  const {
    name,
    cost,
    description,
    updateNFTToBuyDispatch,
    addNFTToPortfolioDispatch,
    currentPortfolio,
    currentBalance,
    buyNFTDispatch,
  } = props;

  const checkPurchase = (name: string, cost: number) => {
    const messageDiv = document.querySelector('#purchaseNFTErrorMessage');

    if (cost > currentBalance) {
      messageDiv.innerHTML = 'You do not have enough ETH to purchase this NFT.';
      setTimeout(() => (messageDiv.innerHTML = ''), 3000);
      return;
    }
    for (let i = 0; i < currentPortfolio.length; i++) {
      const currentNFT = currentPortfolio[i];

      console.log(currentNFT.name, name);
      if (currentNFT.name === name) {
        messageDiv.innerHTML =
          'You have already purchased this NFT. Please select another one to purchase.';
        setTimeout(() => (messageDiv.innerHTML = ''), 1500);
        return;
      }
    }
    addNFTToPortfolioDispatch(name, cost);
    updateNFTToBuyDispatch('', '', 0);
    buyNFTDispatch(cost);
    messageDiv.innerHTML = `Succesfully purchased the ${name} NFT! It is now in your portfolio`;
    setTimeout(() => (messageDiv.innerHTML = ''), 3000);
  };

  return (
    <div className="descriptionAndCostCard">
      <div>
        <p>Description: {description}</p>
        <p>
          Cost: {cost}{' '}
          <FontAwesomeIcon icon={faEthereum} style={{ color: 'black' }} />
        </p>
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
