import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { createUser } from '../redux/actions/SignUpAction';


const mapStateToProps = state => {
  return {
    user_created: state.signUpReducer.user_created,
    error: state.signUpReducer.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: data => dispatch(createUser(data))
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;