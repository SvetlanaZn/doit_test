import React from 'react';
import About from '../About/About';
import Forms from '../Auth/Forms';
import Main from '../Main/Main';
import { Switch, Route } from 'react-router-dom';

const Root = () => (
  <Switch>
    <Route exact path='/' component={Forms}/>
    <Route path='/main' component={Main}/>
    <Route path='/about' component={About}/>
  </Switch>
)

export default Root;