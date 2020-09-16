import { connect } from 'react-redux';
import Profile from '../pages/Profile';
import { getUserInformation, getListFriends } from '../redux/actions/ProfileAction';

const mapStateToProps = state => {
  const {user_information, listFriends, loader, error} = state.profileReducer;
  return {
    user_information,
    listFriends,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInformation: userId => dispatch(getUserInformation(userId)),
    getListFriends: userId => dispatch(getListFriends(userId))
  }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;