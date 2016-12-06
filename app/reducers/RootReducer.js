import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import ConfigReducer from './ConfigReducer';

const rootReducer = combineReducers({
  posts: PostReducer.posts,
  users: UserReducer.users,
  config: ConfigReducer.config,
});

export default rootReducer;
