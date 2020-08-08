export const serviceCall = (config, dispatch, callSuccess, callFailure, contentTypeJson = true) => {
  let header;
  if(contentTypeJson) {
    header = {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
  }
  else {
    header = { Accept: 'application/json' }
  }

  fetch(`http://localhost:8090${config.url}`, {
    ...config,
    mode: 'cors',
    headers: header
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