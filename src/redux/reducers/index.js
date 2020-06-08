import { combineReducers } from 'redux';
import signUpReducer from './SignUpReducer';
import profileReducer from './ProfileReducer';

export default combineReducers({
  signUpReducer,
  profileReducer
});