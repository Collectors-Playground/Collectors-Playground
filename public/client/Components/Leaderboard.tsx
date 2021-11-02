import React from 'react';
import { LeaderboardProps } from '../../Types/interfaces';

export default function Leaderboard(props: LeaderboardProps) {
  const { username, balance, place } = props;
  return (
    <div className="individualLeader">
      <div className="standing">{place}</div>
      <div>{username}</div>
      <div>{balance}</div>
    </div>
  );
}
