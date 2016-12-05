import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

const tilteStore = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default tilteStore;
