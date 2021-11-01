import * as React from 'react';
import Login from './Login';

function App() {
  return (
    <div className="mainPageWrapper">
      <div className="titleLoginWrapper">
        <div className="title">
          <h1>Collector's Playground</h1>
        </div>
        <Login />
      </div>
      <div className="centralPageWrapper">
        <div className="liveGraph">Graph</div>
        <div className="sidebar"> Sidebar</div>
      </div>
    </div>
  );
}

export default App;
