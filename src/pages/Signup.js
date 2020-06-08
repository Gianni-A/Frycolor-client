import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorSignup from '../components/ErrorSignup';
import $ from 'jquery'; 

import '../css/signup.css';

import Modal from '../components/Modal';

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
    const password_1 = this.state.password;
    const password_2 = this.state.confirmpassword;

    if(password_1 !== password_2) {
      this.sendErrorPasswords();
    } else {
      const dataUser = {
        usUser: this.state.username,
        usPassword: this.state.password,
        usEmail: this.state.email
      }
      
      await this.props.createUser(dataUser);
    }
  }

  sendErrorPasswords() {
    this.props.errorPasswords("Passwords don't Match");
  }

  handleOpenModal() {
    $('#GeneralModal').modal('show');
  }

  handleGoToMain() {
    window.location.href = "/";
  }

  render() {
    const {user_created, error, loading} = this.props;
    
    if(Object.keys(user_created).length > 0) {
      console.log("Datos: "+user_created.usEmail);
      this.handleOpenModal();
    }

    return(
      <section id="intro_container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 offset-md-4" id="menu_support">
              <div className="menu_container text-center border rounded">
                <div className="col-md-12">
                  <h4 className="mb-4 mt-3">Registro de usuario</h4>
                  {error.length > 0 && <ErrorSignup error={error} />}
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
          <Modal title={'User created'} acceptButton={() => this.handleGoToMain()}>
            <p>Thank you for signup in <strong>Frycolor</strong>. We already sent you an email to: <strong>{user_created.usEmail}</strong> to verify your account</p>
          </Modal>
        </div>
      </section>
    )
  }
}

export default Signup;