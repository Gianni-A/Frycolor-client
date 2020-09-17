import { connect } from 'react-redux';
import Profile from '../pages/Profile';
import { getUserInformation, getListFriends, getListPhotos } from '../redux/actions/ProfileAction';

const mapStateToProps = state => {
  const {user_information, listFriends, listPhotos, loader, error} = state.profileReducer;
  return {
    user_information,
    listFriends,
    listPhotos,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInformation: userId => dispatch(getUserInformation(userId)),
    getListFriends: userId => dispatch(getListFriends(userId)),
    getListPhotos: userId => dispatch(getListPhotos(userId))
  }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;