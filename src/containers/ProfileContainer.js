import { connect } from 'react-redux';
import Profile from '../pages/Profile';
import { getUserInformation } from '../redux/actions/ProfileAction';

const mapStateToProps = state => {
  const {user_information, loader, error} = state.profileReducer;
  return {
    user_information,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInformation: userId => dispatch(getUserInformation(userId))
  }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;