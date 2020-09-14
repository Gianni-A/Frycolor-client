import { SAVE_INFORMATION_SUCCESS,
				 SAVE_INFORMATION_FAILURE,
				 GET_USER_INFORMATION_SUCCESS,
				 GET_USER_INFORMATION_FAILURE,
				 LOADING_PROFILE_FORM } from '../types/ProfileFormTypes';

import { serviceCall } from '../../util/Utils';	

/* Save user information */

export const saveInformationSuccess = response => {
  return {
		type: SAVE_INFORMATION_SUCCESS,
		payload: response
	}
}

export const saveInformationFailure = error => {
  return {
    type: SAVE_INFORMATION_FAILURE,
    payload: error
  }
}

export const saveInformation = userInfo => async dispatch => {

	dispatch({
    type: LOADING_PROFILE_FORM
  })

  serviceCall(
		{
			url: '/profile',
      method: 'PUT',
      body: JSON.stringify(userInfo)
		},
		dispatch,
		saveInformationSuccess,
		saveInformationFailure
	);
};

	/* Save user information */

	/* Get user information */

	export const getUserInformationSuccess = response => {
		return {
			type: GET_USER_INFORMATION_SUCCESS,
			payload: response
		}
	}
	
	export const getUserInformationFailure = error => {
		return {
			type: GET_USER_INFORMATION_FAILURE,
			payload: error
		}
	}

	export const getUserInformation = userId => async dispatch => {

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

	/* Get user information */
