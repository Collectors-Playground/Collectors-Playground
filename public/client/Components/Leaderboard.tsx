import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { LeaderboardProps } from '../../Types/interfaces';

export default function Leaderboard(props: LeaderboardProps) {
  const { username, balance, place } = props;
  let color;
  switch (place) {
    case 1:
      color = 'gold';
      break;
    case 2:
      color = 'silver';
      break;
    case 3:
      color = '#CD7F32'; // gold color hexdecimal
      break;
    default:
      color = 'blue';
      break;
  }
  return (
    <div className="individualLeader" style={{ borderColor: color }}>
      <div className="standing">
        <FontAwesomeIcon icon={faTrophy} style={{ color }} />
      </div>
      <div className="leaderUser" style={{ color }}>
        {username}
      </div>
      <div style={{ color }}>{balance}</div>
    </div>
  );
}
