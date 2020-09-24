import { connect } from 'react-redux';
import Profile from '../pages/Profile';
import { getUserInformation, getListFriends, getListPhotos, addFriend, deleteFriend } from '../redux/actions/ProfileAction';

const mapStateToProps = state => {
  const {user_information, isFriend, listFriends, listPhotos, loader, error} = state.profileReducer;
  return {
    user_information,
    isFriend,
    listFriends,
    listPhotos,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInformation: (userId, userLogged) => dispatch(getUserInformation(userId,userLogged)),
    getListFriends: userId => dispatch(getListFriends(userId)),
    getListPhotos: userId => dispatch(getListPhotos(userId)),
    addFriend: (userLogged, userId) => dispatch(addFriend(userLogged, userId)),
    deleteFriend: (userLogged, userId) => dispatch(deleteFriend(userLogged, userId))
  }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;