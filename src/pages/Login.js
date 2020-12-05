import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Logo from '../assets/components/logo.jpg';
import '../css/login.css';

function Login(props) {

  const handleSendData = () => {
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
    
    const credentials = {
      username,
      password
    };

    props.loginAction(credentials);
  };

  const { userInformation, loader, error } = props;

  if(Object.keys(userInformation).length > 0) {
    //Redirect to the main page and set the login to cookie, Also save the response for future usages
    localStorage.setItem('userInformation', JSON.stringify(userInformation));
    window.location.href = "/newsFeed";
  }
  
  if(Object.keys(error).length > 0) {
    alert("The username or password are incorrect");
  }

  return(
    <section id="login_container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 offset-md-4" id="menu_support">
            <div className="menu_container text-center border rounded">
              <div className="col-md-12">
                <div className="col-md-12">
                  <a href="/"><img src={Logo} className="logo-img" alt="Logotipo"/></a> 
                </div>
                <h4 className="mb-4 mt-3">Log In</h4>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                </form>
                <button className="btn btn-primary btn-block" onClick={() => handleSendData()}>Send</button>
              </div>
              <div className="col-md-12 linkForgotPassword">
                <Link to='/forgotPassword' className="text-decoration-none">Forgot your password ?</Link>
              </div>
            </div>
            {loader && <Loader />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;