import { SAVE_INFORMATION_SUCCESS,
         SAVE_INFORMATION_FAILURE } from '../types/ProfileFormTypes';

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
  serviceCall(
		{
			url: `/profile/${userId}`,
      method: 'PUT',
      body: Object.entries(userInfo)
		},
		dispatch,
		saveInformationSuccess,
		saveInformationFailure
	);
}