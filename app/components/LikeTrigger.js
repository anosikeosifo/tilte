import React, { Component, PropTypes } from 'react';

const LikeTrigger = (props) => {
  return(
    <section className='component__like__triger'>
      <span><img src='' className='like__image' /></span>
    </section>
  );
}

LikeTrigger.PropTypes = {
  user: PropTypes.object
}

export default LikeTrigger;
