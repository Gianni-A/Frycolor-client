import React, { Component } from 'react';
import Loader from '../components/Loader';
import '../css/forgotPassword.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: ''
    };

    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleEmailInput(event) {
    this.setState({emailInput: event.target.value});
  }

  redirectToLogin() {
    window.location = '../';
  }

  //When there is an error, it sets error values as empty
  changeErrorValue() {
    this.props.changeErrorValue();
  }

  async handleSendData() {
    await this.props.sendEmail(this.state.emailInput);
  }

  render() {
    const { emailSentStatus, loader, error } = this.props;
    if(emailSentStatus) {
      alert("Data has been sent it");
      this.redirectToLogin();
    }

    if(error.length > 0) {
      this.changeErrorValue();
      alert("There is an error");
    }

    return(
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="block_section text-center border rounded">
                <h3>Did you forget the password?</h3>
                <p>Please introduce your email ID in order to send you a link to restore your password</p>
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" name='email' id="inputEmail" placeholder="Email" onChange={(e) => this.handleEmailInput(event)} />
                  </div>
                </form>
                <button className="btn btn-primary btn-block col-md-6 float-right" onClick={() => this.handleSendData()}>Send</button>
              </div>
            </div>
            {loader && <Loader />}
          </div>
        </div>
      </section>
    )
  }
}

export default ForgotPassword;