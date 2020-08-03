import { CHANGE_PASSWORD_SUCCESS,
         CHANGE_PASSWORD_FAILURE,
         CHANGE_PASSWORD_LOADER } from '../types/ChangePasswordTypes';

const INITIAL_STATE = {
  passwordInfo: {},
  loader: false,
  error: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordInfo: action.payload,
        loader: false,
        error: []
      }

    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        passwordInfo: {},
        loader: false,
        error: action.payload
      }  

    case CHANGE_PASSWORD_LOADER:
      return {
        ...state,
        loader: true
      }  

    default: return state;  
  }
}