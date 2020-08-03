import { CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_LOADER } from '../types/ChangePasswordTypes';

import { serviceCall } from '../../util/Utils';  

export const changePasswordSuccess = response => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: response
  }
}

export const changePasswordFailure = error => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: error
  }
}

export const changePasswordAction = passwordInfo => async dispatch => {
  dispatch({
    type: CHANGE_PASSWORD_LOADER
  })

  serviceCall(
		{
			url: '/profile/password',
      method: 'PUT',
      body: JSON.stringify(passwordInfo)
		},
		dispatch,
		changePasswordSuccess,
		changePasswordFailure
	);
}