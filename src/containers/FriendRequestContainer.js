import { connect } from 'react-redux';
import FriendRequest from '../pages/FriendRequest';
import { getListFriendRequest, approveRejectRequest } from '../redux/actions/FriendRequestAction';
import { getListFriends } from '../redux/actions/ProfileAction';

const mapStateToProps = state => {
  const { listFriendsRequest, listFriends, loader, error } = state.friendRequest;
  return {
    listFriendsRequest,
    listFriends,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListFriendRequest: userIdLogged => dispatch(getListFriendRequest(userIdLogged)),
    approveRejectRequest: data => dispatch(approveRejectRequest(data)),
    getListFriends: userId => dispatch(getListFriends(userId))
  }
};

const FriendRequestContainer = connect(mapStateToProps, mapDispatchToProps)(FriendRequest);

export default FriendRequestContainer;