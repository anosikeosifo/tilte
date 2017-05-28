import { combineReducers } from 'redux';
// import { feedData } from '../user_feed/FeedReducer';
import { userData }  from '../users/UserReducer';
import { configData } from '../core/CoreReducer';
import { searchData } from '../search/SearchReducer';
import { eventData } from '../events/EventReducer';
import { momentData } from '../moments/MomentReducer';
import { authData } from '../authentication/AuthReducer';
import { layoutData } from '../layout/LayoutReducer';

const rootReducer = combineReducers({
  // userFeed: feedData,
  userData: userData,
  configData: configData,
  searchData: searchData,
  eventData: eventData,
  momentData: momentData,
  authData: authData,
  layoutData: layoutData,
});

export default rootReducer;
