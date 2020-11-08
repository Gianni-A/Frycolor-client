import { SERVER } from '../util/GlobalVariables';
import moment from 'moment';

export const serviceCall = async (config, dispatch, callSuccess, callFailure, contentTypeJson = true) => {
  let header;

  if(contentTypeJson) {
    header = {
      'Content-type': 'application/json',
      Accept: 'application/json'}
  }
  else {
    header = { Accept: 'application/json' }
  }

  //Needs to find a better solution
  //Needs to do this condition in order to avoid setting authorization to the login endpoint
  const url = config.url.split("/");
  if(url[2] != "login") {
    const token = await getAuthenticationToken();
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

//NOTE: Need to calculate the time of the token in order to call it when this expires
//Getting token to authenticate into the endpoints
const getAuthenticationToken = async () => {

  //Validate if the token expired then call to the endpoint to get new one
  try {
    const tokenData = JSON.parse( localStorage.getItem('token') );
    const expireToken = moment(tokenData.date).add(12, 'h').toDate();

    if(new Date() < expireToken) {
      return tokenData.jwt;
    }
  } catch(err) {}
  
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
  
  return response.json().then(data => {
    const dataToken = {
      jwt: data.jwt,
      date: new Date().toLocaleString()
    };

    localStorage.setItem('token', JSON.stringify(dataToken)); 

    return data.jwt;
  });
  
}