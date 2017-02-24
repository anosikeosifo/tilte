import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Router, Route, Link, IndexRoute } from 'react-router';
import TilteStore from '../stores/TilteStore';
import TilteAppContainer from '../containers/TilteAppContainer';
import HomeContainer from '../containers/HomeContainer';
import Error from '../components/Error';
import MomentDetailContainer from '../containers/MomentDetailContainer';

export default class App extends Component {
  render() {
    return(
      <Provider store={ TilteStore }>
        <Router history={ browserHistory }>
            <Route path='/' component={ TilteAppContainer }>
              <IndexRoute component={ HomeContainer }/>
              <Route path='/feed/:id' component={ MomentDetailContainer }/>
              <Route path='*' component={ Error }/>
            </Route>
        </Router>
      </Provider>
    );
  }
};
