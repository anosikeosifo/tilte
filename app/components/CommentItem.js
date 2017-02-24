require('../styles/comment_item');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { USER_AVATAR_PLACEHOLDER } from '../constants';

class CommentItem extends Component {
  render() {
    return(
      <section className='component__comment__item'>
        <div className='comment__wrap'>
          <div className='user_avatar__wrap'>
            <img src={ this.props.user_avatar || USER_AVATAR_PLACEHOLDER } className='image'/>
          </div>
          <div className='text__wrap'>
            <span className='text'>{ this.props.text }</span>
          </div>
        </div>
      </section>
    );
  }
}

CommentItem.propTypes = {
  flagged: PropTypes.bool,
  removed: PropTypes.bool,
  text: PropTypes.string,
  user_avatar: PropTypes.string,
  user_id: PropTypes.number,
}

export default CommentItem;
