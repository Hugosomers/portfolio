import { combineReducers } from "redux";
import headerReducer from './headerReducer.jsx';

const rootReducer = combineReducers ({
  headerReducer,
});

export default rootReducer;
