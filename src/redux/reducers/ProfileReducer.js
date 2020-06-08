import {GET_USER_INFORMATION_SUCCESS, GET_USER_INFORMATION_FAILURE, LOADING_PROFILE} from '../types/ProfileTypes';

const INITIAL_STATE = {
  user_information: {},
  loader: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case GET_USER_INFORMATION_SUCCESS: 
      return {
        ...state,
        user_information: action.payload,
        loader: false
      };

    case GET_USER_INFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loader: false
      };
      
    case LOADING_PROFILE:
      return {
        ...state,
        loader: true
      }  

    default: return state; 
  }
};