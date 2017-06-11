import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Router, Route, Link, IndexRoute } from 'react-router';
import TilteStore from '../stores/TilteStore';
import TilteAppContainer from './TilteAppContainer';
import Home from './Home';
import Error from '../core/components/Error';
import EventDetailContainer from '../events/containers/EventDetailContainer';
import Verification from '../authentication/components/Verification';
import OAuthResponse from '../authentication/containers/OAuthResponse';
import { isAuthenticated, logoutUser} from '../authentication/AuthService';


export default class App extends Component {
  authenticateAccess(nextState, replace) {
    if (!isAuthenticated()) {
      replace({ pathname: '/verify' })
    } else {
      return true;
    }
  }

  render() {
    return(
      <Provider store={ TilteStore }>
        <Router history={ browserHistory }>
            <Route path='/' component={ TilteAppContainer }>
              <IndexRoute component={ Home } />
              <Route path='/events/:id' component={ EventDetailContainer } onEnter={ this.authenticateAccess }/>
              <Route path='/verify' component={ Verification }/>
              <Route path='/oauth' component={ OAuthResponse }/>
              <Route path='*' component={ Error }/>
            </Route>
        </Router>
      </Provider>
    );
  }
};
