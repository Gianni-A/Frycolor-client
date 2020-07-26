import { combineReducers } from 'redux';
import signUpReducer from './SignUpReducer';
import profileReducer from './ProfileReducer';
import profileFormReducer from './ProfileFormReducer';
import forgotPasswordReducer from './ForgotPasswordReducer';

export default combineReducers({
  signUpReducer,
  profileReducer,
  profileFormReducer,
  forgotPasswordReducer
});