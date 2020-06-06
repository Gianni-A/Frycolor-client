import { connect } from 'react-redux';
import Signup from '../pages/Signup';
import { createUser } from '../redux/actions/SignUpAction';


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
    createUser: data => dispatch(createUser(data))
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;