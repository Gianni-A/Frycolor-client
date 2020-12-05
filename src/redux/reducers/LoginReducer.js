import { LOGIN_SUCCESSFUL,
         LOGIN_FAILURE,
         LOGIN_LOADER } from '../types/LoginTypes';

const INITIAL_STATE = {
  userInformation: {},
  loader: false,
  error: []
};

export default(state = INITIAL_STATE, action) => {
  state.error = [];
  switch(action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        userInformation: action.payload,
        loader: false,
        error: []
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        userInformation: {},
        loader: false,
        error: action.payload
      }

    case LOGIN_LOADER:
      return {
        ...state,
        loader: true
      }  

    default: return state;  
  }
}