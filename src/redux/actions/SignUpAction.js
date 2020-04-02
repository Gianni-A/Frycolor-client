import { CREATE_USER, LOADING, ERROR } from '../types/SignUpTypes';
import { SERVER } from '../../util/GlobalVariables';

export const createUser = (data) => async (dispatch) => {
  await fetch(`${SERVER}/users`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => {
    const data = response.json();
    data.then(res =>  {
      console.log(`Code status: ${res.codeStatus}`)
      if(res.codeStatus == 200) {
        dispatch({
          type: CREATE_USER,
          payload: res
        })
      } else {
        dispatch({
          type: ERROR,
          payload: res.message
        })
      }
    })
  })

  /**
   * fetch(`${SERVER}/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => {
    console.log("Response from the action: "+JSON.stringify(response.json()))
    dispatch({
      type: CREATE_USER,
      payload: response.data 
    })
  })
  .catch(error => {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error
    })
  })
   */
}