import React from 'react';
import { BalanceProps } from '../../Types/interfaces';

function Balance(props: BalanceProps) {
  const { currentBalance } = props;
  return (
    <div className="balanceWrapper">
      Balance (eth)
      <div>{currentBalance}</div>
    </div>
  );
}

export default Balance;
