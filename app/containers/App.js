import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Router, Route, Link, IndexRoute } from 'react-router';
import TilteStore from '../stores/TilteStore';
import TilteAppContainer from '../components/TilteAppContainer';
import HomeContainer from '../containers/HomeContainer';

export default class App extends Component {
  render() {
    return(
      <Provider store={ TilteStore }>
        <Router history={ browserHistory }>
            <Route component={ TilteAppContainer }>
              <Route path='/' component={ HomeContainer }/>
            </Route>
        </Router>
      </Provider>
    );
  }
};
