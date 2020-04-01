import { CREATE_USER, LOADING, ERROR } from '../types/SignUpTypes';
import { SERVER } from '../../util/GlobalVariables';

export const createUser = (data) => async (dispatch) => {
  //console.log("Data from the action :"+data.usUser);
  /*dispatch({
    type: CREATE_USER,
    payload: 'admin' 
  })*/
  fetch(`${SERVER}/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => console.log(JSON.stringify(response.json())))

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