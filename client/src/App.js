import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Components/Header/Header'
import Root from './Components/Root/Root';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <Root />
        </div>
      </Provider>
    );
  }
}
export default App;
