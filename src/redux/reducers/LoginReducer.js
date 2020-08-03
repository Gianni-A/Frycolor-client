import { LOGIN_SUCCESSFUL,
         LOGIN_FAILURE,
         LOGIN_LOADER } from '../types/LoginTypes';

const INITIAL_STATE = {
  credentials: {},
  loader: false,
  error: []
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        credentials: action.payload,
        loader: false,
        error: []
      }

    case LOGIN_FAILURE:
      return {
        credentials: {},
        loader: false,
        error: action.payload
      }

    case LOGIN_LOADER:
      return {
        loader: true
      }  

    default: return state;  
  }
}