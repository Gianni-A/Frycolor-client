import { connect } from 'react-redux';
import FriendRequest from '../pages/FriendRequest';
import { getListFriendRequest, approveRejectRequest } from '../redux/actions/FriendRequestAction';

const mapStateToProps = state => {
  const { listFriendsRequest, actionTook, loader, error } = state.friendRequest;
  return {
    listFriendsRequest,
    actionTook,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListFriendRequest: userIdLogged => dispatch(getListFriendRequest(userIdLogged)),
    approveRejectRequest: data => dispatch(approveRejectRequest(data))
  }
};

const FriendRequestContainer = connect(mapStateToProps, mapDispatchToProps)(FriendRequest);

export default FriendRequestContainer;