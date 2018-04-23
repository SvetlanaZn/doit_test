import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from "../../actions/authActions"

import './Authorize.css';

class Authorize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({...this.state, [e.target.name]: e.target.value } );
  }

  onSubmit(e) {
    e.preventDefault();
    const login = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(login);
    this.setState({ email: '', password: '' });
  }

  onClick() {
    this.props.logout();
  }
  render () {
    if (this.props.isAuth) {
      return <button onClick={ this.onClick }>Logout</button>
    } else {
      return (
        <form>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={ this.onChange } />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={ this.onChange } />
          <button onClick={ this.onSubmit } >Submit</button>
        </form>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Authorize);