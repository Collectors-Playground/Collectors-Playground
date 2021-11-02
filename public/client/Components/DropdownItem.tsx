import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { DropdownItemProps } from '../../Types/interfaces';
import InformationPopup from './InformationPopup';

function DropdownItem(props: DropdownItemProps) {
  const { name, description, cost, updateNFTToBuyDispatch } = props;
  const [displayInformation, changeDisplay] = useState(false);

  return (
    <div className="dropdownItemWrapper">
      <span className="nameSpan">{name}</span>
      <span className="extraInfoArrow">
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          onClick={() => updateNFTToBuyDispatch(name, description, cost)}
        />
      </span>
    </div>
  );
}

export default DropdownItem;
