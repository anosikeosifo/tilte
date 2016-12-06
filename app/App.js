require('./styles/layout.scss');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Router, Route, Link, IndexRoute } from 'react-router';
import TilteStore from 'stores/TilteStore';
import TilteAppContainer from './components/TilteAppContainer';
import Index from './components/Index';

ReactDOM.render((
  <Provider store={ TilteStore }>
    <Router history={ browserHistory }>
        <Route component={ TilteAppContainer }>
          <Route path='/' component={ Index }/>
        </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
