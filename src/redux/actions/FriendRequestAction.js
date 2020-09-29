import { GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
         GET_LIST_FRIEND_REQUEST_FAILURE,
         LOADER_GET_LIST_FRIEND_REQUEST } from '../types/FriendRequestTypes';

 import { serviceCall } from '../../util/Utils';

 export const getListFriendRequestSuccess = response => {
   return {
     type: GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
     payload: response
   };
 };

 export const getListFriendRequestFailure = error => {
   return {
     type: GET_LIST_FRIEND_REQUEST_FAILURE,
     payload: error
   };
 };

 export const getListFriendRequest = userIdLogged => dispatch => {
  dispatch({
    type: LOADER_GET_LIST_FRIEND_REQUEST
  })

  serviceCall(
    {
      url: '',
      method: 'GET'
    },
    dispatch,
    getListFriendRequestSuccess,
    getListFriendRequestFailure
  );
 }