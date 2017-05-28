require('../styles/comment_input.scss');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { USER_AVATAR_PLACEHOLDER } from '../../users/constants';
import update from 'immutability-helper';

class CommentInput extends Component {
  componentWillMount() {
    this.setState(Object.assign({}, this.state, {
      isProcessingInput: false
    }));
  }

  handleCommentSubmit(event) {
    if(event.key == 'Enter') {
      this.handlePreSubmit(event.target);
      this.props.submitAction(this.props.eventObjectId, this.props.actor.id, event.target.value.trim());
      this.handlePostSubmit(event.target);

      event.preventDefault();
    }
  }

  handlePreSubmit() {
    this.refs.comment__trigger.setAttribute('disabled', true);
  }

  handlePostSubmit(inputElement) {
    inputElement.value = '';
    this.refs.comment__trigger.removeAttribute('disabled');
  }

  render() {
    const inputElementStyle = classNames({
      comment__textarea: true,
      is__disabled: this.state.isProcessingInput,
    });

    return(
      <section className='component__comment__input'>
        <div className='header__wrap'>
          <span>Comments</span><span className='comment__count'>{ this.props.commentCount ? ` . ${ this.props.commentCount }`: '' }</span>
        </div>
        <div className='main__wrap'>
          <div className='actor__avatar__wrap'>
            <img src={ this.props.actor.user_avatar || USER_AVATAR_PLACEHOLDER } className='actor__avatar'/>
          </div>
          <div className='text__input__wrap'>
            <div className='comment__input__edge'>
              <div className='edge__inner'></div>
              <div className='edge__outer'></div>
            </div>
            <div className='comment__input__frame'>
              <textarea ref='comment__trigger' className={ inputElementStyle } placeholder='Add a comment. Press enter to send.' onKeyPress={ this.handleCommentSubmit.bind(this) }></textarea>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

CommentInput.propTypes = {
  actor: PropTypes.object.isRequired,
  isInputAllowed: PropTypes.bool.isRequired,
  submitAction: PropTypes.func.isRequired,
};

CommentInput.defaultProps = {
  isInputAllowed: true,
}

export default CommentInput;
