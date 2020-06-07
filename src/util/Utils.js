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
    if(statusCode == 200) {
      response.json().then(data => {
        dispatch(callSuccess(data))
      }); 
    } else {
      response.text().then(error => {
        dispatch(callFailure(error))
      });
    }
  })
};