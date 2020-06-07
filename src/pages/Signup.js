import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

import '../css/signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmpassword: ''
    };
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSendData() {
    const dataUser = {
      usUser: this.state.username,
      usPassword: this.state.password,
      usEmail: this.state.email
    }
    
    await this.props.createUser(dataUser);
  }

  render() {
    const {user_created, error, loading} = this.props;

    if(loading) {
      console.log("Cargando");
    }
    else {
      console.log("NO Cargando");
    }

    if(error != '') {
      console.log(error);
    } else {
      console.log("Datos: "+user_created.usEmail);
    }

    return(
      <section id="intro_container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 offset-md-4" id="menu_support">
              <div className="menu_container text-center border rounded">
                <div className="col-md-12">
                  <h4 className="mb-4 mt-3">Registro de usuario</h4>
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control" name='email' id="inputEmail" placeholder="Email" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="username" id="inputUserName" placeholder="Username" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" name="confirmpassword" id="inputConfirmPassword" placeholder="Confirm password" onChange={(e) => this.handleChange(e)} />
                    </div>
                  </form>
                  <button className="btn btn-primary btn-block" onClick={() => this.handleSendData()}>Register</button>
                </div>
                <div className="col-md-12 linkBack">
                  <Link to='/' className="text-decoration-none">Back to the main</Link>
                </div>
              </div>
              {loading && <Loader />}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Signup;