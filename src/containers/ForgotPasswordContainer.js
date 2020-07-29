import { connect } from 'react-redux';
import ForgotPassword from '../pages/ForgotPassword';
import { sendEmail } from '../redux/actions/ForgotPasswordAction';

import { RESTORE_PASSWORD_CHANGE_ERROR_VALUE } from '../redux/types/ForgotPasswordTypes';

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
    sendEmail: emailInput => dispatch(sendEmail(emailInput)),
    changeErrorValue: () => dispatch({type: RESTORE_PASSWORD_CHANGE_ERROR_VALUE})
  }
};

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

export default ForgotPasswordContainer;