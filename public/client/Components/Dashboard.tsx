import React, { ReactElement } from 'react';
import Balance from './Balance';
import Leaderboard from './Leaderboard';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';

import {
  GlobalState,
  dashboardProps,
  LeaderboardProps,
  portfolioInt,
  NFTListInt,
} from '../../Types/interfaces';
import {
  SELL_FROM_PORTFOLIO,
  UPDATE_CURRENT_NFT,
} from '../constants/actionTypes';
import Portfolio from './Portfolio';

function Dashboard(props: dashboardProps) {
  const {
    username,
    dashboard,
    sellPortfolioDispatch,
    updateCurrentNFTDispatch,
  } = props;

  const createLeaderboard = (leaderList: LeaderboardProps[]) => {
    const leaderListOut: ReactElement[] = leaderList.map((user, index) => {
      return (
        <Leaderboard
          key={index}
          username={user.username}
          balance={user.balance}
          place={index + 1}
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
          currentNFT={dashboard.currentNFT}
          updateCurrentNFT={updateCurrentNFTDispatch}
        />
      );
    });
    return leaderListOut;
  };

  return (
    <div className="dashboardWrapper">
      <div className="topRowWrapper">
        <Balance currentBalance={dashboard.balance} />
        <Dropdown NFTList={dashboard.NFTList} />
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
        <div className="NFTTimeline">{dashboard.currentNFT}</div>
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
    updateCurrentNFTDispatch: (NFT: string) =>
      dispatch({ type: UPDATE_CURRENT_NFT, payload: NFT }),
  })
)(Dashboard);
