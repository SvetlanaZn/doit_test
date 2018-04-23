import React from 'react';
import { Link } from 'react-router-dom';
// import About from './About/About';
// import Main from './Main/Main';
import './Header.css';

const Header = (props) => {
  return (
    <div className="container">
      <div className="Header">
        <ul>
          <li className="SignUp_In pages"><Link to="/">Auth</Link></li>
          <li className="Main pages"><Link to="/main">Main</Link></li>
          <li className="About pages"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
    );
  };

// const Auth = React.createClass({
//   render: function() {
//     return (
//       <Auth />
//     )
//   }
// });
//
// const Main = React.createClass({
//   render: function() {
//     return (
//       <Main />
//   )
//   }
// });
//
// const About = React.createClass({
//   render: function() {
//     return (
//       <About />
//     )
//   }
// });



export default Header;