import { initialState, feedData }  from '../../app/reducers/FeedReducer';

describe('FeedReducer', () => {
  it('should return initial state', () => {
    const initialFeedData = feedData(initialState, {});

    expect(initialFeedData).toEqual([]);
  });

  describe('likeMoment', () => {
    //Pending
  });
});
