import { SAVE_INFORMATION_SUCCESS,
         SAVE_INFORMATION_FAILURE,
         SAVE_IMAGE_PROFILE_SUCCESS,
         SAVE_IMAGE_PROFILE_FAILURE,
         LOADING_PROFILE_FORM } from '../types/ProfileFormTypes';

  const INITIAL_STATE = {
    userInfo: {},
    imageProfile: {},
    userInfoUpdated: {},
    loader: false,
    error: []
  }

  export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case SAVE_INFORMATION_SUCCESS:
        return {
          ...state,
          userInfoUpdated: action.payload,
          loader: false
        }

      case SAVE_INFORMATION_FAILURE:
        return {
          ...state,
          error: action.payload,
          loader: false
        }

      case SAVE_IMAGE_PROFILE_SUCCESS:
        return {
          ...state,
          imageProfile: action.payload,
          error: [],
          loader: false
        } 
        
      case SAVE_IMAGE_PROFILE_FAILURE:
        return {
          ...state,
          error: action.payload,
          loader: false
        }  

      case LOADING_PROFILE_FORM:
        return {
          ...state,
          error: [],
          loader: true
        }  
        
        default: return state;  
    }
  }