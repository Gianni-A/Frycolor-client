import { LOGIN_SUCCESSFUL,
         LOGIN_FAILURE,
         LOGIN_LOADER } from '../types/LoginTypes';

import { serviceCall } from '../../util/Utils';

export const loginSuccessfull = response => {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: response
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

export const loginAction = data => async dispatch => {
  dispatch({
    type: LOGIN_LOADER
  })

  serviceCall(
    {
      url: '/login',
      method: 'POST',
      body: JSON.stringify(data)
    },
    dispatch,
    loginSuccessfull,
    loginFailure
  );
}