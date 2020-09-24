import {GET_USER_INFORMATION_SUCCESS, 
				GET_USER_INFORMATION_FAILURE,
        GET_LIST_FRIENDS_SUCCESSFULL,
        GET_LIST_FRIENDS_FAILURE,
				GET_LIST_PHOTOS_SUCCESSFULL,
				GET_LIST_PHOTOS_FAILURE,
        ADD_FRIEND_SUCCESSFULL,
        ADD_FRIEND_FAILURE,
        DELETE_FRIEND_SUCCESSFULL,
        DELETE_FRIEND_FAILURE} from '../types/ProfileTypes';
				
import { serviceCall } from '../../util/Utils';			

export const getUserInformationSuccess = response => {
	return {
		type: GET_USER_INFORMATION_SUCCESS,
		payload: response
	}
};

export const getUserInformationFailure = error => {
	return {
		type: GET_USER_INFORMATION_FAILURE,
		payload: error
	}
};

export const getUserInformation = (userId, userLogged) => async (dispatch) => {

	serviceCall(
		{
			url: `/profile/${userId}/${userLogged}`,
			method: 'GET'
		},
		dispatch,
		getUserInformationSuccess,
		getUserInformationFailure
	);
};        

/* Get list friends of the user which is logged */

export const getListFriendsSuccessfull = response => {
  return {
    type: GET_LIST_FRIENDS_SUCCESSFULL,
    payload: response
  }
};

export const getListFriendsFailure = error => {
  return {
    type: GET_LIST_FRIENDS_FAILURE,
    payload: error
  }
};

export const getListFriends = userId => dispatch => {

  serviceCall(
    {
      url: `/profile/${userId}/friends`,
      method: 'GET'
    },
    dispatch,
    getListFriendsSuccessfull,
    getListFriendsFailure
  );
};

/* Get list friends of the user which is logged */

/* Get list friends of the user which is logged */

export const getListPhotosSuccessfull = response => {
  return {
    type: GET_LIST_PHOTOS_SUCCESSFULL,
    payload: response
  }
};

export const getListPhotosFailure = error => {
  return {
    type: GET_LIST_PHOTOS_FAILURE,
    payload: error
  }
};

export const getListPhotos = userId => dispatch => {

  serviceCall(
    {
      url: `/postlist/images/${userId}/10`,
      method: 'GET'
    },
    dispatch,
    getListPhotosSuccessfull,
    getListPhotosFailure
  );
};

/* Get list friends of the user which is logged */

/* Add friend */

export const addFriendSuccessfull = response => {
  return {
    type: ADD_FRIEND_SUCCESSFULL
  }
};

export const addFriendFailure = error => {
  return {
    type: ADD_FRIEND_FAILURE,
    payload: error
  }
};

export const addFriend = (userLogged, userId) => dispatch => {

  let formData = new FormData();
  formData.append("userId", userLogged);
  formData.append("friendId", userId);

  serviceCall(
    {
      url: '/profile/friends',
      method: 'POST',
      body: formData
    },
    dispatch,
    addFriendSuccessfull,
    addFriendFailure,
    false
  );
};

/* Add friend */

/* Delete friend */

export const deleteFriendSuccessfull = response => {
  return {
    type: DELETE_FRIEND_SUCCESSFULL,
  }
};

export const deleteFriendFailure = error => {
  return {
    type: DELETE_FRIEND_FAILURE,
    payload: error
  }
};

export const deleteFriend = (userLogged, userId) => dispatch => {

  let formData = new FormData();
  formData.append("userId", userLogged);
  formData.append("friendId", userId);

  serviceCall(
    {
      url: '/profile/friends/delete',
      method: 'POST',
      body: formData
    },
    dispatch,
    deleteFriendSuccessfull,
    deleteFriendFailure,
    false
  );
};

/* Delete friend */