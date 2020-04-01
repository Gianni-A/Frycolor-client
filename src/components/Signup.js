import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as signupActions from '../redux/actions/SignUpAction';

const { createUser } = signupActions;

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

    const example = this.props.user_created;
    //console.log("Response: "+JSON.stringify(example))
  }

  render(props) {
    
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
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
 
}

const mapStateToProps = (state) => {
  return {
    user_created: state.signUpReducer.user_created
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(createUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);