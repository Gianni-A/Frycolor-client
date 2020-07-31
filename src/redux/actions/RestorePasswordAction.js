import { RESTORE_PASSWORD_SUCCESSFULL,
         RESTORE_PASSWORD_FAILURE,
         RESTORE_PASSWORD_LOADER } from '../types/RestorePasswordTypes';
import { serviceCall } from '../../util/Utils';         

export const restorePasswordSuccess = response => {
  return {
    type: RESTORE_PASSWORD_SUCCESSFULL,
    payload: response
  };
};  

export const restorePasswordFailure = error => {
  return {
    type: RESTORE_PASSWORD_FAILURE,
    payload: error
  };
};

export const restorePassword = (data) => async (dispatch) => {

  dispatch({
    type: RESTORE_PASSWORD_LOADER
  })

  serviceCall(
    {
      url: `/session/password?userId=${data.userId}&newPassword=${data.newPassword}`,
      method: 'PUT'
    },
    dispatch,
    restorePasswordSuccess,
    restorePasswordFailure
  );
}