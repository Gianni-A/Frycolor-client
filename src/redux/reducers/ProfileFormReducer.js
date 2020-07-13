import { SAVE_INFORMATION_SUCCESS,
  SAVE_INFORMATION_FAILURE } from '../types/ProfileFormTypes';

  const INITIAL_STATE = {
    userInfo: {},
    loader: false,
    error: ''
  }

  export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case SAVE_INFORMATION_SUCCESS:
        return {
          ...state,
          userInfo: action.payload,
          loader: false
        }

      case SAVE_INFORMATION_FAILURE:
        return {
          ...state,
          error: action.payload,
          loader: false
        }
        
        default: return state;  
    }
  }