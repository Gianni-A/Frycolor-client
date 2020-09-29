import { GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
         GET_LIST_FRIEND_REQUEST_FAILURE,
        LOADER_GET_LIST_FRIEND_REQUEST } from '../types/FriendRequestTypes';

const INITIAL_STATE = {
  listFriendsRequest: [],
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

    case LOADER_GET_LIST_FRIEND_REQUEST:
      return {
        ...state,
        error: [],
        loader: true
      }  

    default: return state;  
  }
}