require('../styles/moment_detail');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { fetchMomentDetails } from '../actions/MomentActionCreators';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const MomentDetail = (props) => {
  return (
    <section className='component__moment__detail'>
      <div className='moment__detail__wrap'>
        <figure className='moment_details'>
          <section className='moment_media_object'>
            <img src={ FEED_IMAGE_PLACEHOLDERS[0] } alt='' className='feed_img'/>
          </section>

          <figcaption>
            <section className='item__main'>
              <span className='item__metadata'>
                <span className='timestamp'>3m</span>
                &middot;
                <span className='nested location'>
                  <LocationDetailsTrigger/>
                </span>
              </span>
              <div className='item__content'>
                { props.moment.description || "hello! welcome to tilte, the place where we share the most fun experiences!" }
              </div>
            </section>
             <section className='comment__section'>
              <div className='comment__input'>
                <CommentInput momentId={ props.moment.id } actor={ props.moment.user } commentCount={ props.moment.comments_count } submitAction={ props.submitCommentAction }/>
              </div>
              <div className='comment__list'>
                <CommentList comments={ props.moment.comments }/>
              </div>
            </section>
          </figcaption>
        </figure>
      </div>

      <div className='map__view'>
      </div>
    </section>
  );
}

MomentDetail.propTypes = {
  moment: PropTypes.shape({
    can_repost: PropTypes.bool,
    can_comment: PropTypes.bool,
    is_favorite: PropTypes.bool,
    comments: PropTypes.array,
    // comments_count: PropTypes.number.isRequired,
    // favorites_count: PropTypes.number.isRequired,
    // reposts_count: PropTypes.number.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string,
    origin_post: PropTypes.object,
    created_at: PropTypes.string,
    comments: PropTypes.array,
  }),
  currentUser: PropTypes.object,
}

export default MomentDetail;
