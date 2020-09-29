import { connect } from 'react-redux';
import FriendRequest from '../pages/FriendRequest';
import { getListFriendRequest } from '../redux/actions/FriendRequestAction';

const mapStateToProps = state => {
  const { listFriendsRequest, loader, error } = state.friendRequest;
  return {
    listFriendsRequest,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListFriendRequest: userIdLogged => dispatch(getListFriendRequest(userIdLogged))
  }
};

const FriendRequestContainer = connect(mapStateToProps, mapDispatchToProps)(FriendRequest);

export default FriendRequestContainer;