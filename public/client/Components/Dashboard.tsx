import React, { ReactElement } from 'react';
import Balance from './Balance';
import Leaderboard from './Leaderboard';
import Dropdown from './Dropdown';
import Portfolio from './Portfolio';
import InformationPopup from './InformationPopup';
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
  NFT_TO_BUY,
  ADD_TO_PORTFOLIO,
  UPDATE_BALANCE,
} from '../constants/actionTypes';

function Dashboard(props: dashboardProps) {
  const {
    username,
    dashboard,
    sellPortfolioDispatch,
    updateCurrentNFTDispatch,
    updateNFTToBuyDispatch,
    addNFTToPortfolioDispatch,
    buyNFTDispatch,
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
        <Balance currentBalance={dashboard.balance} username={username} />
        <Dropdown
          NFTList={dashboard.NFTList}
          updateNFTToBuyDispatch={updateNFTToBuyDispatch}
        />
        <div className="logoutWrapper">
          <span className="logout">Logout </span>
        </div>
      </div>
      <div className="mainContentWrapper">
        <div className="leaderboardPortfolioWrapper">
          <div className="leaderboardWrapper">
            Leaderboard
            {createLeaderboard(dashboard.leaderboard)}
          </div>
          <div className="portfolioWrapper">
            <div className="portfolioTitle">Portfolio</div>
            <div className="portfolioList">
              {createPortfolioList(dashboard.portfolioList)}
            </div>
          </div>
        </div>
        <div className="NFTTimeline">{dashboard.currentNFT}</div>
        <div className="descriptionAndCostWrapper">
          {dashboard.NFTToBuy.name !== '' && (
            <InformationPopup
              name={dashboard.NFTToBuy.name}
              description={dashboard.NFTToBuy.description}
              price={dashboard.NFTToBuy.price}
              updateNFTToBuyDispatch={updateNFTToBuyDispatch}
              addNFTToPortfolioDispatch={addNFTToPortfolioDispatch}
              currentPortfolio={dashboard.portfolioList}
              currentBalance={dashboard.balance}
              buyNFTDispatch={buyNFTDispatch}
            />
          )}
          <div id="purchaseNFTErrorMessage"></div>
        </div>
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
    updateNFTToBuyDispatch: (
      name: string,
      description: string,
      price: number
    ) => dispatch({ type: NFT_TO_BUY, payload: { name, description, price } }),
    addNFTToPortfolioDispatch: (name: string, price: number) =>
      dispatch({
        type: ADD_TO_PORTFOLIO,
        payload: { name, price },
      }),
    buyNFTDispatch: (price: number) =>
      dispatch({
        type: UPDATE_BALANCE,
        payload: price,
      }),
  })
)(Dashboard);
