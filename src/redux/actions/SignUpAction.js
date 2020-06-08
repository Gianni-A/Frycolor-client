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

export const errorPasswords = error => dispatch => {
  dispatch({
    type: ERROR,
    payload: error
  })
};


/**How was before:
 * .then(response => {
    const statusCode = response.status;
    if(statusCode == 200) {
      const data = response.json();

      data.then(data =>  {
        dispatch({
          type: CREATE_USER,
          payload: data
        })
      })
    }
    else {
      Here doesn't work correctly
      console.log(`Respuesta: ${response}`);
      //console.log(`Respuesta: ${JSON.stringify(response)}`);
    } 
  })

  The last one:

  await fetch(`${SERVER}/users`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => {
    const statusCode = response.status;
    if(statusCode == 200) {
      return response.json().then(data => {
        dispatch({
          type: CREATE_USER,
          payload: data
        })
      });
    }
    else {
      return response.text().then(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
      });
    } 
  })
 */