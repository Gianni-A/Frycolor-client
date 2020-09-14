import { SAVE_INFORMATION_SUCCESS,
				 SAVE_INFORMATION_FAILURE,
				 SAVE_IMAGE_PROFILE_SUCCESS,
				 SAVE_IMAGE_PROFILE_FAILURE,
				 LOADING_PROFILE_FORM } from '../types/ProfileFormTypes';

import { serviceCall } from '../../util/Utils';	

/* Save user information */

export const saveInformationSuccess = response => {
  return {
		type: SAVE_INFORMATION_SUCCESS,
		payload: response
	}
};

export const saveInformationFailure = error => {
  return {
    type: SAVE_INFORMATION_FAILURE,
    payload: error
  }
};

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

	/* Save image profile */

	export const saveImageProfileSuccess = response => {
		return {
			type: SAVE_IMAGE_PROFILE_SUCCESS,
			payload: response
		}
	};
	
	export const saveImageProfileFailure = error => {
		return {
			type: SAVE_IMAGE_PROFILE_FAILURE,
			payload: error
		}
	};

	export const saveImageProfile = (image, userInfId) => async dispatch => {

		dispatch({
			type: LOADING_PROFILE_FORM
		})

		const formData = new FormData();
		formData.append("file", image);
		formData.append("userInfId", userInfId);
	
		serviceCall(
			{
				url: '/profile/media',
				method: 'POST',
				body: formData
			},
			dispatch,
			saveImageProfileSuccess,
			saveImageProfileFailure,
			false
		);
	}

	/* Save image profile */
