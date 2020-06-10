import React from 'react';

function ErrorSignup(props) {
  let errors;
  if(props.error.length > 1) {
    errors = props.error.map(element => 
      <li key={element.defaultMessage}> {element.defaultMessage} </li>
    );
  } else {
    errors = props.error[0].defaultMessage ? props.error[0].defaultMessage : props.error;
  }
  
  return(
    <div className="alert alert-danger alert-dismissible fade show">
     <ul> {errors} </ul>
    </div>
  );
}

export default ErrorSignup;