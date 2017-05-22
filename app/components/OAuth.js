require('../styles/oauth.scss');

import React, { PropTypes, Component } from 'react';
import OAuthContainer from '../containers/OAuthContainer';
import { ICON_TWITTER, ICON_FACEBOOK, ICON_LINKEDIN } from '../constants';
import Icon from './Icon';

const viewData = {
  linkedin: {
    color: '#0084bf',
    icon: { name: ICON_LINKEDIN },
    title: 'LinkedIn',
  },

  facebook: {
    color: '#3b5998',
    icon: { name: ICON_FACEBOOK},
    title: 'Facebook',
  },

  twitter: {
    color: '#1DA1F2',
    icon: { name: ICON_TWITTER },
    title: 'Twitter',
  },
};

const OAuth = (props) => {
  let oauthList = props.strategies.map((strategy) => (
    <div key={ strategy.name } className={`oauth__item ${ strategy.name }`} onClick={ strategy.callbackAction }>
      <span className='icon__wrap'>
        <Icon icon={ viewData[strategy.name].icon.name } size={ 78 } color={ viewData[strategy.name].color } viewBox={ 512 } { ...viewData[strategy.name].icon.custom } />
      </span>
      <span style={{ color: viewData[strategy.name].color }} className='title'>{ viewData[strategy.name].title }</span>
    </div>
  ));

  return (
    <section className='component__oauth'>
      <div className='oauth__wrap'>
        { oauthList }
      </div>
    </section>
  );
}

OAuth.propTypes = {
  strategies: PropTypes.array.isRequired,
}

export default OAuth;
