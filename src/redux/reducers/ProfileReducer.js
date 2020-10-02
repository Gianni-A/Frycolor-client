import {GET_USER_INFORMATION_SUCCESS, 
        GET_USER_INFORMATION_FAILURE, 
        GET_LIST_FRIENDS_SUCCESSFULL,
        GET_LIST_FRIENDS_FAILURE, 
        LOADING_PROFILE, 
        GET_LIST_PHOTOS_SUCCESSFULL,
        ADD_FRIEND_SUCCESSFULL,
        ADD_FRIEND_FAILURE,
        DELETE_FRIEND_SUCCESSFULL,
        DELETE_FRIEND_FAILURE} from '../types/ProfileTypes';

import { APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL } from '../types/FriendRequestTypes';        

const INITIAL_STATE = {
  user_information: {},
  statusFriend: '',
  friendTableId: 0,
  listFriends: [],
  listPhotos: [],
  loader: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case GET_USER_INFORMATION_SUCCESS: 
      const { userInformation, statusFriend, friendRequestId } = action.payload;
      return {
        ...state,
        user_information: userInformation,
        statusFriend: statusFriend,
        friendTableId: friendRequestId,
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

    case ADD_FRIEND_SUCCESSFULL:
      return {
        ...state,
        statusFriend: 'PEND',
        loader: false,
        error: []
      }  

    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        loader: false
      }
      
    case DELETE_FRIEND_SUCCESSFULL:
      return {
        ...state,
        statusFriend: 'UNKNOWN',
        loader: false,
        error: []
      }  

    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        loader: false
      } 
      
    case APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL:
      return {
        ...state,
        statusFriend: 'ACTIVE'
      }  
    
    case LOADING_PROFILE:
      return {
        ...state,
        loader: true
      }  

    default: return state; 
  }
};