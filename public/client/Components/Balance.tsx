import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { BalanceProps } from '../../Types/interfaces';

function Balance(props: BalanceProps) {
  const { currentBalance, username } = props;
  return (
    <div className="balanceWrapper">
      <div className="userWelcome">
        Welcome <div>{username}</div>
      </div>
      <div className="balance">
        Balance
        <div>
          {currentBalance}{' '}
          <FontAwesomeIcon icon={faEthereum} style={{ color: 'black' }} />
        </div>
      </div>
    </div>
  );
}

export default Balance;
