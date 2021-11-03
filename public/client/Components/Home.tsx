import React from 'react';
import Login from './Login';
import Graph from './Graph';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel';
import Dashboard from './Dashboard';

function Home() {
  return (
    <Dashboard />
    // <div className="mainPageWrapper">
    //   <div className="titleLoginWrapper">
    //     <div className="title">
    //       <h1>Collector's Playground</h1>
    //     </div>
    //     <Login />
    //   </div>
    //   <div className="centralPageWrapper">
    //     <div className="carousel">
    //       <AliceCarousel
    //         autoPlay
    //         infinite
    //         mouseTracking
    //         autoPlayInterval={3000}
    //       >
    //         <img src="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" />
    //         <img src="https://static01.nyt.com/images/2021/03/11/arts/11nft-auction3/merlin_184196610_cd2f1557-7871-4004-bca0-004ee1f1f7d6-superJumbo.jpg?quality=75&auto=webp" />
    //         <img src="https://static01.nyt.com/images/2021/03/11/arts/11nft-auction4/merlin_184196712_6ff72329-5e5a-441d-886b-98912b4550f6-superJumbo.jpg?quality=75&auto=webp" />
    //       </AliceCarousel>
    //     </div>
    //     <div className="sidebar"> Sidebar</div>
    //   </div>
    // </div>
  );
}

export default Home;
