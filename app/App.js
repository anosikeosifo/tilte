import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Router, Route, Link, IndexRoute } from 'react-router';
import TilteAppContainer from './components/TilteAppContainer';
import TilteStore from 'stores/TilteStore';
import Welcome from './components/Welcome';

require('./styles/layout.scss');

ReactDOM.render((
  <Provider store={ TilteStore }>
    <Router history={ browserHistory }>
        <Route path='/' component={ TilteAppContainer }>
          <IndexRoute component={ Welcome }/>
        </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
