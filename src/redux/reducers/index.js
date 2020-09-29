import { combineReducers } from 'redux';

import signUpReducer from './SignUpReducer';
import profileReducer from './ProfileReducer';
import profileFormReducer from './ProfileFormReducer';
import forgotPasswordReducer from './ForgotPasswordReducer';
import restorePasswordReducer from './RestorePasswordReducer';
import changePasswordReducer from './ChangePasswordReducer';
import loginReducer from './LoginReducer';
import newsFeedReducer from './NewsFeedReducer';
import friendRequest from './FriendRequestReducer';

export default combineReducers({
  signUpReducer,
  profileReducer,
  profileFormReducer,
  forgotPasswordReducer,
  restorePasswordReducer,
  changePasswordReducer,
  loginReducer,
  newsFeedReducer,
  friendRequest
});