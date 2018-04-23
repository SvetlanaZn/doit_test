import React, { Component } from 'react';
import MapContainer from './MapContainer';
import SB from './Sidebar';

class Main extends Component {
  render () {
    return (
      <div className="container">
        <div className="coordinates">
          <MapContainer />
          <SB />
        </div>
      </div>
    );
  }
}

export default Main;
