import { connect } from 'react-redux';
import Signup from '../pages/Signup';
import { createUser } from '../redux/actions/SignUpAction';
import { ERROR } from '../redux/types/SignUpTypes';


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
    errorPasswords: error => dispatch({type: ERROR, payload: error})
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;