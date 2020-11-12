import { GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
         GET_LIST_FRIEND_REQUEST_FAILURE,
         APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL,
         APPROVE_REJECT_FRIEND_REQUEST_FAILURE,
        LOADER_GET_LIST_FRIEND_REQUEST } from '../types/FriendRequestTypes';

import { GET_LIST_FRIENDS_SUCCESSFULL,
         GET_LIST_FRIENDS_FAILURE } from '../types/ProfileTypes';  

const INITIAL_STATE = {
  listFriendsRequest: [],
  listFriends: [],
  actionTook: '',
  loader: false,
  error: []
}

export default(state = INITIAL_STATE, action = '') => {
  switch(action.type) {
    case GET_LIST_FRIEND_REQUEST_SUCCESSFULL:
      return {
        ...state,
        listFriendsRequest: action.payload,
        error: [],
        loader: false
      }

    case GET_LIST_FRIEND_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loader: false
      }

    case APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL:
      const { message } = action.payload;
      return {
        ...state,
        actionTook: message
      }
      
    case APPROVE_REJECT_FRIEND_REQUEST_FAILURE:
      return {
        ...state,
        actionTook: ''
      }  

      case GET_LIST_FRIENDS_SUCCESSFULL:
      return {
        ...state,
        listFriends: action.payload,
        error: []
      }
      
      case GET_LIST_FRIENDS_FAILURE:
      return {
        ...state,
        error: payload
      }

    case LOADER_GET_LIST_FRIEND_REQUEST:
      return {
        ...state,
        error: [],
        loader: true
      }  

    default: return state;  
  }
}