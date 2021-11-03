import React, { useEffect, useState } from 'react';
import Login from './Login';
import Graph from './Graph';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel';
import { connect } from 'react-redux';
import { GlobalState, NFTListInt, HomeProps } from '../../Types/interfaces';
import { POPULATE_NFT_LIST } from '../constants/actionTypes';

import Dashboard from './Dashboard';

function Home(props: HomeProps) {
  const { dashboard, populateNFTListDispatch } = props;
  const [NFTImages, updateNFTImages] = useState([]);

  const populateNFTImages = (NFTList: NFTListInt[]) => {
    const imagesArr: any[] = [];

    NFTList.forEach((NFT) => {
      imagesArr.push(<img src={`${NFT.image}`} />);
    });
    updateNFTImages(imagesArr);
  };

  useEffect(() => {
    fetch('/getNFTs')
      .then((response) => response.json())
      .then((results: NFTListInt[]) => {
        populateNFTListDispatch(results);
        populateNFTImages(results);
      });
  }, []);
  return (
    // <Dashboard />
    <div className="mainPageWrapper">
      <div className="titleLoginWrapper">
        <div className="title">
          <h1>Collector's Playground</h1>
          <h2>The Only Open Source NFT Trading Sandbox</h2>
        </div>
      </div>
      <div className="centralPageWrapper">
        <div className="carouselLoginWrapper">
          <div className="carousel">
            <AliceCarousel
              autoPlay
              infinite
              autoPlayInterval={3000}
              autoHeight={true}
              autoWidth={true}
              autoPlayStrategy="none"
              items={NFTImages}
              disableButtonsControls={true}
              renderDotsItem={() => false}
              activeIndex={Math.floor(Math.random() * NFTImages.length + 1)}
            ></AliceCarousel>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state: GlobalState) => ({
    dashboard: state.dashboardReducer,
  }),
  (dispatch) => ({
    populateNFTListDispatch: (fetchedList: NFTListInt[]) =>
      dispatch({
        type: POPULATE_NFT_LIST,
        payload: fetchedList,
      }),
  })
)(Home);
