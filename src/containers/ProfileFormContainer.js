import { connect } from 'react-redux';
import ProfileForm from '../pages/ProfileForm';
import { saveInformation, saveImageProfile } from '../redux/actions/ProfileFormAction';

const mapStateToProps = state => {
  const {userInfo, imageProfile, userInfoUpdated, loader, error} = state.profileFormReducer;
  return {
    userInfo,
    imageProfile,
    userInfoUpdated,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveInformation: userInfo => dispatch(saveInformation(userInfo)),
    saveImageProfile: (image, userInfId) => dispatch(saveImageProfile(image, userInfId))
  }
};

const ProfileFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

export default ProfileFormContainer;