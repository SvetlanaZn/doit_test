import React, { Component } from 'react';

import Map from './Map';

class MapContainer extends Component {
  render () {
    return (
      <Map center={[54.98, 82.89]} zoom={13}/>
    );
  }
}

export default MapContainer;