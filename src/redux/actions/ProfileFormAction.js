import { SAVE_INFORMATION_SUCCESS,
				 SAVE_INFORMATION_FAILURE,
				 LOADING_PROFILE_FORM } from '../types/ProfileFormTypes';

import { serviceCall } from '../../util/Utils';	

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
}