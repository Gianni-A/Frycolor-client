import {GET_USER_INFORMATION_SUCCESS, 
				GET_USER_INFORMATION_FAILURE,
				GET_LIST_FRIENDS_SUCCESSFULL,
				GET_LIST_PHOTOS_SUCCESSFULL,
				GET_LIST_PHOTOS_FAILURE,
  			GET_LIST_FRIENDS_FAILURE} from '../types/ProfileTypes';
				
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

export const getUserInformation = (userId) => async (dispatch) => {

	serviceCall(
		{
			url: `/profile/${userId}`,
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