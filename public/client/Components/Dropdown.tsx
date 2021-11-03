import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NFTListInt, DropdownProps } from '../../Types/interfaces';
import DropdownItem from './DropdownItem';

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
          price={item.price}
          updateNFTToBuyDispatch={updateNFTToBuyDispatch}
        />
      );
    });
    return NFTpurchaseListOut;
  };

  return (
    <div className="dropdownWrapper">
      <div className="dropdown">
        Press the dropdown button to view available NFTs for purchase.
        {dropdownDisplay && (
          <div
            className="dropdownList"
            onMouseLeave={() => changeDropdownDisplay(!dropdownDisplay)}
          >
            {createNFTPurchaseList(NFTList)}
          </div>
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
