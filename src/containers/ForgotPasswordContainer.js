import { connect } from 'react-redux';
import ForgotPassword from '../pages/ForgotPassword';
import { sendEmail } from '../redux/actions/ForgotPasswordAction';

const mapStateToProps = state => {
  const { emailSentStatus, loader, error } = state.forgotPasswordReducer;
  return {
    emailSentStatus,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendEmail: emailInput => dispatch(sendEmail(emailInput))
  }
};

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

export default ForgotPasswordContainer;