import { connect } from 'react-redux';
import Profile from '../pages/Profile';
import { getUserInformation, getListFriends, getListPhotos, addFriend, deleteFriend } from '../redux/actions/ProfileAction';
import { approveRejectRequest } from '../redux/actions/FriendRequestAction';

const mapStateToProps = state => {
  const {user_information, statusFriend, friendTableId, listFriends, listPhotos, loader, error} = state.profileReducer;
  return {
    user_information,
    statusFriend,
    friendTableId,
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
    deleteFriend: (userLogged, userId) => dispatch(deleteFriend(userLogged, userId)),
    approveRejectRequest: data => dispatch(approveRejectRequest(data))
  }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;