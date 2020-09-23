import { LOGIN_SUCCESSFUL,
         LOGIN_FAILURE,
         LOGIN_LOADER } from '../types/LoginTypes';

import { serviceCall, saveToken, getToken } from '../../util/Utils';

import { SERVER } from '../../util/GlobalVariables';

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
      url: `/session/login?username=${data.username}&password=${data.password}`,
      method: 'POST'
    },
    dispatch,
    loginSuccessfull,
    loginFailure
  );

  //Getting token to authenticate into the endpoints
  const credentials = {
    username: "FrycolorUser",
    password: "frysyscolor"
  };
  const header = {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
  const dataParsed = JSON.stringify(credentials);

  const response = await fetch(`${SERVER}/authenticate`, {mode: 'cors', headers: header, method: 'POST',  body: dataParsed});
  response.json().then(data => {
    localStorage.setItem('token', data.jwt);
  });
}