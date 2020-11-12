import React, { useState, useCallback } from 'react';
import HeaderPage from '../components/HeaderPage';
import Loader from '../components/Loader';
import Menu from '../components/Menu';
import '../css/generalStyle.css';
import '../css/changePassword.css';
import { getUserInformationStore } from '../util/Utils';

function ChangePassword(props) {
  const userInformation = getUserInformationStore();
  const [userId, setUserId] = useState(userInformation.usId);
  const [actualPassword, setActualPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submitData = useCallback((actualPassword, newPassword, confirmPassword) => {
    if(newPassword != confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const passwordInfo = {
      userId,
      actualPassword,
      newPassword
    }

    props.changePasswordAction(passwordInfo);
  });

  const redirectMainPage = useCallback(() => {
    window.location = "../";
  });

  const { passwordInfo, loader, error } = props;

  if(Object.keys(passwordInfo).length > 0) {
    alert('The password has been change');
    redirectMainPage();
  }

  if(Object.keys(error).length > 0) {
    alert('There is an error');
  }

  return(
    <div className="main-page">
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-4 border menu-component">
            <Menu />
          </div>
          <div className="col-md-4 changePassword-content">
            <form>
              <div className="form-group">
                <input type="password" className="form-control" name='actualPassword' placeholder="Your actual password" onChange={(e) => setActualPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name='newPassword' placeholder="The new password" onChange={(e) => setNewPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name='confirmPasswor' placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </form>
            <button className="btn btn-primary btn-block" onClick={() => submitData(actualPassword, newPassword, confirmPassword)}>Update password</button>
          </div>
        </div>
        {loader && <Loader />}
      </div>
      
    </div>
  )
}

export default ChangePassword;