import { connect } from 'react-redux';
import Login from '../pages/Login';
import { loginAction } from '../redux/actions/LoginAction';

const mapStateToProps = state => {
  const { userInformation, loader, error } = state.loginReducer;
  return {
    userInformation,
    loader,
    error
  }
};

const mapDistpatchToProps = distpatch => {
  return {
    loginAction: data => distpatch(loginAction(data))
  }
};

const LoginContainer = connect(mapStateToProps, mapDistpatchToProps)(Login);

export default LoginContainer;