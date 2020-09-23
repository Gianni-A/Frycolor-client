import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import '../css/login.css';

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSendData = useCallback((username, password) => {
    
    const credentials = {
      username,
      password
    };

    props.loginAction(credentials);
  });

  const { userInformation, loader, error } = props;

  //console.log("data: ", userInformation);
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
                  <img src="" alt="Logotipo"/>
                </div>
                <h4 className="mb-4 mt-3">Log In</h4>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="inputUsername" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </form>
                <button className="btn btn-primary btn-block" onClick={() => handleSendData(username, password)}>Send</button>
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