import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';
import UserReducer from './UserReducer';
import ConfigReducer from './ConfigReducer';
import SearchReducer from './SearchReducer';
import MomentReducer from './MomentReducer';

const rootReducer = combineReducers({
  userFeed: FeedReducer.userFeed,
  users: UserReducer.users,
  config: ConfigReducer.config,
  searchSuggestions: SearchReducer.suggestions,
  moment: MomentReducer.moment
});

export default rootReducer;
