import React, { Component } from 'react';
import {Fragment} from 'redux-little-router';
import Home from '../../containers/home.js';
import NavToolBar from '../../containers/navtoolbar.js';
import Compare from '../../containers/compare.js';
 
export default class App extends Component {

  render() {
    return (
      <Fragment forRoute='/'>
        <div className="App">
          <NavToolBar />
          <Fragment forRoute='/compare'><Compare /></Fragment>
          <Fragment forRoute='/'><Home /></Fragment>
        </div>
      </Fragment>
    );
  }
}

