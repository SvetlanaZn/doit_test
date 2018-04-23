import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pinReducer from './pinReducer';

export default combineReducers({
  auth: authReducer,
  pins: pinReducer
});