import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { DropdownItemProps } from '../../Types/interfaces';

function DropdownItem(props: DropdownItemProps) {
  const { name, description, price, updateNFTToBuyDispatch } = props;

  return (
    <div className="dropdownItemWrapper">
      <span className="nameSpan">{name}</span>
      <span className="extraInfoArrow">
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          onClick={() => updateNFTToBuyDispatch(name, description, price)}
        />
      </span>
    </div>
  );
}

export default DropdownItem;
