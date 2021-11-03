import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { DropdownItemProps } from '../../Types/interfaces';

function DropdownItem(props: DropdownItemProps) {
  const {
    id,
    token_id,
    contract_name,
    name,
    description,
    price,
    image,
    updateNFTToBuyDispatch,
  } = props;

  return (
    <div className="dropdownItemWrapper">
      <span className="nameSpan">{name || `${contract_name}-${token_id}`}</span>
      <span className="extraInfoArrow">
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          onClick={() =>
            updateNFTToBuyDispatch(name, description, price, image)
          }
        />
      </span>
    </div>
  );
}

export default DropdownItem;
