import { combineReducers } from 'redux';
import login from '../app/login/login.reducer'

export const rootReducer = combineReducers({
  login,
});
