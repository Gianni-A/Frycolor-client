export const serviceCall = (config, dispatch, callSuccess, callFailure) => {
  fetch(`http://localhost:8090${config.url}`, {
    ...config,
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
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