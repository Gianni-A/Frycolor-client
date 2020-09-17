import {GET_USER_INFORMATION_SUCCESS, 
        GET_USER_INFORMATION_FAILURE, 
        GET_LIST_FRIENDS_SUCCESSFULL,
        GET_LIST_FRIENDS_FAILURE, 
        LOADING_PROFILE, GET_LIST_PHOTOS_SUCCESSFULL} from '../types/ProfileTypes';

const INITIAL_STATE = {
  user_information: {},
  listFriends: [],
  listPhotos: [],
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

    case GET_LIST_FRIENDS_SUCCESSFULL:
      return {
        ...state,
        listFriends: action.payload,
        error: []
      }  

    case GET_LIST_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      
    case GET_LIST_PHOTOS_SUCCESSFULL:
      return {
        ...state,
        listPhotos: action.payload,
        error: []
      }
      
    case GET_LIST_FRIENDS_FAILURE:
      return {
        ...state,
        error: []
      }  
    
    case LOADING_PROFILE:
      return {
        ...state,
        loader: true
      }  

    default: return state; 
  }
};