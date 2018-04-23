import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPins, savePins } from "../../actions/pinActions";

import './Sidebar.css';

class SB extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const user = this.props.user;

    if(e.target.name === 'load') this.props.fetchPins(user);
    else {
      const pins = this.props.tempItems;
      this.props.savePins(pins, user);
    }
  }

  //
  render(){
    if (this.props.isAuth) {
      return (
        <div className="center">
            <button onClick={this.onClick} name="save">Save</button>
            <button onClick={this.onClick} name="load">Load</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>You need Login or Register</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  tempItems: state.pins.tempItems,
  user: state.auth.user,
});

export default connect(mapStateToProps, { fetchPins, savePins })(SB);
