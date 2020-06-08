import React from 'react';

function ErrorSignup(props) {
  return(
    <div class="alert alert-danger alert-dismissible fade show">
      <strong>Error!</strong> {props.error}
    </div>
  );
}

export default ErrorSignup;