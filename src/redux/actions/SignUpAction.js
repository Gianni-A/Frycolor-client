import { CREATE_USER, LOADING, ERROR } from '../types/SignUpTypes';
import { serviceCall } from '../../util/Utils';

export const createUserSuccess = response => {
  return {
    type: CREATE_USER,
    payload: response
  };
};

export const createUserFailure = error => {
  return {
    type: ERROR,
    payload: error
  }
};

export const createUser = (data) => async (dispatch) => {
  
  dispatch({
    type: LOADING
  })

  serviceCall(
    {
      url: '/users',
      method: 'POST',
      body: JSON.stringify(data)
    },
    dispatch,
    createUserSuccess,
    createUserFailure
  );
}