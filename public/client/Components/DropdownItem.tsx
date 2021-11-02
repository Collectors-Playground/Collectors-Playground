import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {
  GlobalState,
  dashboardProps,
  LeaderboardProps,
  portfolioInt,
  NFTListInt,
} from '../../Types/interfaces';
import { SELL_FROM_PORTFOLIO } from '../constants/actionTypes';

function DropdownItem(props: NFTListInt) {
  const { name, description, cost } = props;
  const [displayInformation, changeDisplay] = useState(false);
  return (
    <div className="dropdownItemWrapper">
      <div onClick={() => changeDisplay(!displayInformation)}>{name}</div>
      {displayInformation && (
        <div>
          <div>{description}</div>
          <div>{cost}</div>
        </div>
      )}
    </div>
  );
}

export default DropdownItem;
