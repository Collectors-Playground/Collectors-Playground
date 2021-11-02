import React, { ReactElement, useEffect } from 'react';
import Balance from './Balance';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux';

import {
  GlobalState,
  dashboardProps,
  LeaderboardProps,
  portfolioInt,
} from '../../Types/interfaces';
import { SELL_FROM_PORTFOLIO } from '../constants/actionTypes';
import Portfolio from './Portfolio';

function Dashboard(props: dashboardProps) {
  const { username, dashboard, sellPortfolioDispatch } = props;

  const createLeaderboard = (leaderList: LeaderboardProps[]) => {
    const leaderListOut: ReactElement[] = leaderList.map((user, index) => {
      return (
        <Leaderboard
          key={index}
          username={user.username}
          balance={user.balance}
          place={index}
        />
      );
    });
    return leaderListOut;
  };

  const createPortfolioList = (portfolioItems: portfolioInt[]) => {
    const leaderListOut: ReactElement[] = portfolioItems.map((item, index) => {
      return (
        <Portfolio
          key={index}
          name={item.name}
          boughtPrice={item.boughtPrice}
          sellPrice={item.sellPrice}
          sellNFT={sellPortfolioDispatch}
        />
      );
    });
    return leaderListOut;
  };

  return (
    <div className="dashboardWrapper">
      <div className="topRowWrapper">
        <Balance currentBalance={dashboard.balance} />
        <div className="logoutWrapper">logout {username}</div>
      </div>
      <div className="mainContentWrapper">
        <div className="leaderboardPortfolioWrapper">
          <div className="leaderboardWrapper">
            Leaderboard
            {createLeaderboard(dashboard.leaderboard)}
          </div>
          <div className="portfolioWrapper">
            Portfolio
            {createPortfolioList(dashboard.portfolioList)}
          </div>
        </div>
        <div className="NFTTimeline"></div>
      </div>
    </div>
  );
}

export default connect(
  (state: GlobalState) => ({
    username: state.userReducer.username,
    dashboard: state.dashboardReducer,
  }),
  (dispatch) => ({
    sellPortfolioDispatch: (NFT: string) =>
      dispatch({ type: SELL_FROM_PORTFOLIO, payload: NFT }),
  })
)(Dashboard);
