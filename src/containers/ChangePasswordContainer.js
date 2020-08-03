import { connect } from 'react-redux';
import ChangePassword from '../pages/ChangePassword';
import { changePasswordAction } from '../redux/actions/ChangePasswordAction';

const mapStateToProps = state => {
  const { passwordInfo, loader, error } = state.changePasswordReducer;
  return {
    passwordInfo,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changePasswordAction: passwordInfo => dispatch(changePasswordAction(passwordInfo))
  }
};

const ChangePasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

export default ChangePasswordContainer;