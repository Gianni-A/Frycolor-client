import { CREATE_USER, LOADING, ERROR } from '../types/SignUpTypes';
import { SERVER } from '../../util/GlobalVariables';

export const createUser = () => (dispatch) => {
  /*var data = {
    usUser: 'TestComponent',
    usPassword: '123456',
    usEmail: 'testcomponent@hot.com'
  };*/
  //console.log(data)
  dispatch({
    type: CREATE_USER,
    payload: 'admin' 
  })
  /*fetch(`${SERVER}/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => {
    dispatch({
      type: CREATE_USER,
      payload: response.data 
    })
  })
  .catch(error => {
    dispatch({
      type: ERROR,
      payload: error
    })
  })*/
}