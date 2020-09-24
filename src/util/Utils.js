import { SERVER } from '../util/GlobalVariables';
import moment from 'moment';

export const serviceCall = (config, dispatch, callSuccess, callFailure, contentTypeJson = true) => {
  let header;
  const token = localStorage.getItem('token');
  //console.log("token", token);
  if(contentTypeJson) {
    header = {
      'Content-type': 'application/json',
      Accept: 'application/json'}
  }
  else {
    header = { Accept: 'application/json' }
  }

  header['Access-Control-Allow-Origin'] = '*';

  //Needs to find a better solution
  //Needs to do this condition in order to avoid setting authorization to the login endpoint
  const url = config.url.split("/");
  if(url[2] != "login") {
    header['Authorization'] = `Bearer ${token}`;
  }

  fetch(`${SERVER}${config.url}`, {
    ...config,
    mode: 'cors',
    headers: new Headers(header)
  }).then(response => {
    const statusCode = response.status;
    let errorArray = Array();
    if(statusCode == 200) {
      response.json().then(data => {
        dispatch(callSuccess(data))
      }); 
    } else if(statusCode == 400) {
      response.json().then(data => {
        errorArray = data.errors;
        dispatch(callFailure(errorArray))
      }); 
    } else {
      response.text().then(error => {
        errorArray.push(error);
        dispatch(callFailure(errorArray))
      });
    }
  })
};

export const calculateAge = birthday => {
  const stringYear = moment(birthday, "YYYYMMDD").fromNow();
  return stringYear.replace('ago','');
};

export const getUserInformationStore = () => {
  const getUser = localStorage.getItem('userInformation');
  const userInformation = JSON.parse(getUser);
  return userInformation;
}