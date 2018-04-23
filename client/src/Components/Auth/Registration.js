import React, { Component } from 'react';
import { api } from "../../http"
import './Registration.css';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = this.state;
    fetch(`${api}/Users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => (
        this.setState({
          username: '',
          email: '',
          password: ''
        })
    ));
  };

  render () {
    return (
        <form>
          <input
            name="username"
            placeholder="Name"
            value={this.state.username}
            onChange={ this.onChange} />
          <br />
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

export default Registration;