import React from 'react';
import Login from './Login';
import Graph from './Graph';
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
    //     <Graph />
    //     <div className="sidebar"> Sidebar</div>
    //   </div>
    // </div>
  );
}

export default Home;
