import {GET_USER_INFORMATION_SUCCESS, 
        GET_USER_INFORMATION_FAILURE} from '../types/ProfileTypes';
				
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