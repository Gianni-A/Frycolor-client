import React, { useState, useCallback  } from 'react';
import Loader from '../components/Loader';

import '../css/restorePassword.css';

function RestorePassword(props) {

  const userId = props.match.params.userId;
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = useCallback((password, confirmPassword) => { 
    if(password != confirmPassword) {
      alert("Passwords don't matches");
      return;
    }   

    const passInfo = {
      userId: userId,
      newPassword: password
    };

    props.restorePassword(passInfo);
  });

  const redirectMainPage = useCallback(() => {
    window.location = '../../';
  });

  const { passwordInfo, loading, error } = props;

  if(Object.keys(passwordInfo).length > 0) {
    alert('The password has been change');
    redirectMainPage();
  }

  if(Object.keys(error).length > 0) {
    alert('There is an error');
  }

  return(
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="block_section text-center border rounded">
              <h3>Changes the password</h3>
              <p>Please introduce a different password than the previous passwords you were using</p>
              <form>
                <div className="form-group">
                  <input type="password" className="form-control" name='password' placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name='confirmPassword' placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                </div>
              </form>
              <button className="btn btn-primary btn-block col-md-6 float-right" onClick={() => handleSubmit(password, confirmPassword)}>Send</button>
            </div>
          </div>
          {loading && <Loader />}
        </div>
      </div>
    </section>  
  )
}

export default RestorePassword;