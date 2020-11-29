import React, { Component } from 'react';
import Nav from './components/Nav.js';
import NavMobile from './components/NavMobile.js';
import Body from './components/Body.js';

export default class App extends Component {
  render() {
    return (
      <div id='overlord'>
        <Nav/>
        <NavMobile/>
        <Body/>
      </div>
    )
  }
}