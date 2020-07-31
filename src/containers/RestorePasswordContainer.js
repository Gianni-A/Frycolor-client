import { connect } from 'react-redux';
import RestorePassword from '../pages/RestorePassword';
import { restorePassword } from '../redux/actions/RestorePasswordAction';

const mapStateToProps = state => {
  const { passwordInfo, loading, error } = state.restorePasswordReducer;
  return {
    passwordInfo,
    loading,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    restorePassword: passwordInfo => dispatch(restorePassword(passwordInfo))
  }
};

const RestorePasswordContainer = connect(mapStateToProps, mapDispatchToProps)(RestorePassword);

export default RestorePasswordContainer;