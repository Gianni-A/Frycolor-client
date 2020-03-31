import React from 'react';
import { connect } from 'react-redux';
import * as signupActions from '../redux/actions/SignUpAction';

const { createUser } = signupActions;

function Signup(props) {

  const example = props.usEmail;

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
                    <input type="email" className="form-control" id="inputEmail" placeholder={example} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="inputUserName" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm password" />
                  </div>
                </form>
                <button className="btn btn-primary btn-block" onClick={() => props.createUser()}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    usEmail: state.signUpReducer.usEmail
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: () => dispatch(createUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);