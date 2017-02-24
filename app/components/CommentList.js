import React, { PropTypes } from 'react';
import CommentItem from './CommentItem';

const loadingUI = (
  <div>
    <span>Loading</span>
  </div>
);

const CommentList = (props) => {
  if (!props.comments) return loadingUI;

  const commentList = props.comments.map((comment) => {
    return <CommentItem key={ comment.id } { ...comment } />
  });

  return(
    <section className='component__commentlist'>
      { commentList }
    </section>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array,
}

export default CommentList;
