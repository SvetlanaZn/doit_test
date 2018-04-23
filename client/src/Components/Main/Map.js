import React, { Component } from 'react';
import DG from '2gis-maps';

import { connect } from 'react-redux';
import { addPin } from '../../actions/pinActions';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { map: null, pins: [] };
  }

  static shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    DG.then(() => {
      this.setState({
        ...this.state,
        map: DG.map('map', {
          center: this.props.center,
          zoom: this.props.zoom,
        })
      });
      this.state.map.on('click', (data) => {
        this.props.addPin(data.latlng)
        DG.marker([data.latlng.lat, data.latlng.lng]).addTo(this.state.map);
      })
    });
  }
  render() {
    return <div id="map" style={{width: "600px", height: "500px"}}>
    </div>;
  }
}

const maStateToProps = state => ({
  pins: state.pins.items,
});

export default connect(maStateToProps, { addPin })(Map);

