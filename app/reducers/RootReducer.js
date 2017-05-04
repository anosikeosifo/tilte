import { combineReducers } from 'redux';
import { feedData } from './FeedReducer';
import { userData }  from './UserReducer';
import { configData } from './ConfigReducer';
import { searchData } from './SearchReducer';
import { eventData } from './EventReducer';
import { momentData } from './MomentReducer';

const rootReducer = combineReducers({
  userFeed: feedData,
  userData: userData,
  config: configData,
  searchData: searchData,
  eventData: eventData,
  momentData: momentData
});

export default rootReducer;
