import { connect } from 'react-redux';
import Signup from '../pages/Signup';
import { createUser, errorPasswords } from '../redux/actions/SignUpAction';


const mapStateToProps = state => {
  const {user_created, error, loading} = state.signUpReducer;
  return {
    user_created,
    error,
    loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: data => dispatch(createUser(data)),
    errorPasswords: error => dispatch(errorPasswords(error))
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;