import { combineReducers } from "redux";
import headerReducer from './headerReducer.jsx';
import binemonReducer from './binemonReducer.jsx';

const rootReducer = combineReducers ({
  headerReducer,
  binemonReducer,
});

export default rootReducer;
