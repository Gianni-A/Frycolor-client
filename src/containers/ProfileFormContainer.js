import { connect } from 'react-redux';
import ProfileForm from '../pages/ProfileForm';
import { saveInformation, getUserInformation } from '../redux/actions/ProfileFormAction';

const mapStateToProps = state => {
  const {userInfo, userInfoUpdated, loader, error} = state.profileFormReducer;
  return {
    userInfo,
    userInfoUpdated,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveInformation: userInfo => dispatch(saveInformation(userInfo)),
    getUserInformation: userId => dispatch(getUserInformation(userId))
  }
};

const ProfileFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

export default ProfileFormContainer;