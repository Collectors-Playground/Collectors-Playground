import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NFTListInt, DropdownProps } from '../../Types/interfaces';
import DropdownItem from './DropdownItem';
import { SELL_FROM_PORTFOLIO } from '../constants/actionTypes';

function Dropdown(props: DropdownProps) {
  const [dropdownDisplay, changeDropdownDisplay] = useState(false);

  const { NFTList, updateNFTToBuyDispatch } = props;
  const createNFTPurchaseList = (NFTList: NFTListInt[]) => {
    const NFTpurchaseListOut: ReactElement[] = NFTList.map((item, index) => {
      return (
        <DropdownItem
          key={index}
          name={item.name}
          description={item.description}
          cost={item.cost}
          updateNFTToBuyDispatch={updateNFTToBuyDispatch}
        />
      );
    });
    return NFTpurchaseListOut;
  };

  return (
    <div className="dropdownWrapper">
      <div className="dropdown">
        Available NFTs to purchase
        {dropdownDisplay && (
          <div className="dropdownList">{createNFTPurchaseList(NFTList)}</div>
        )}
      </div>
      <div
        className="dropdownButton"
        onClick={() => changeDropdownDisplay(!dropdownDisplay)}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
}

export default Dropdown;
