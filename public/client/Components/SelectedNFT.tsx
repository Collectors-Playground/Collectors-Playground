import React from 'react';
import Graph from './Graph';
import { currentNFTInt } from '../../Types/interfaces';

function SelectedNFT(props: currentNFTInt) {
  const { name, image, description } = props;
  return (
    <div className="currentNFTWrapper">
      <div className="imageAndDescriptionWrapper">
        <div className="currentNFTImage">
          <img src={image} className="NFTimage" />
        </div>
        <div className="currentNFTDescriptionNameWrapper">
          <div className="currentNFTName"> {name}</div>
          <div className="currentNFTDescription">{description}</div>
        </div>
      </div>
      <div className="graphContainer">
        <Graph />
      </div>
    </div>
  );
}

export default SelectedNFT;
