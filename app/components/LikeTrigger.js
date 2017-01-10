import '../styles/like_trigger.scss';

import React, { Component, PropTypes } from 'react';
import { ICON_FAVORITE } from 'constants';
import Icon from './Icon';

const LikeTrigger = (props) => {
  return(
    <section className='component__like__triger'>
      <span>
        <Icon icon={ICON_FAVORITE} color='#c1c1c1'/>
      </span>
    </section>
  );
}

LikeTrigger.PropTypes = {
  user: PropTypes.object
}

export default LikeTrigger;
