import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import BannerReducer from './BannerReducer';

const rootReducer = combineReducers({
  posts: PostReducer.posts,
  users: UserReducer.users,
  bannerConfig: BannerReducer.banners,
});

export default rootReducer;
