import { connect } from 'react-redux';
import ProfileForm from '../pages/ProfileForm';
import { saveInformation } from '../redux/actions/ProfileFormAction';

const mapStateToProps = state => {
  const {userInfo, loader, error} = state.profileFormReducer;
  return {
    userInfo,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveInformation: userInfo => dispatch(saveInformation(userInfo))
  }
};

const ProfileFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

export default ProfileFormContainer;