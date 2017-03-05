import { combineReducers } from 'redux';
import { feedData } from './FeedReducer';
import { userData }  from './UserReducer';
import { configData } from './ConfigReducer';
import { searchData } from './SearchReducer';
import { eventData } from './EventReducer';

const rootReducer = combineReducers({
  userFeed: feedData,
  users: userData,
  config: configData,
  searchSuggestions: searchData,
  event: eventData,
});

export default rootReducer;
