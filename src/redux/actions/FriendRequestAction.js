import { GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
         GET_LIST_FRIEND_REQUEST_FAILURE,
         APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL,
         APPROVE_REJECT_FRIEND_REQUEST_FAILURE,
         LOADER_GET_LIST_FRIEND_REQUEST } from '../types/FriendRequestTypes';

import { serviceCall } from '../../util/Utils';

/* Get a list of people who are adding the user who is logged */

export const getListFriendRequestSuccess = response => {

  return {
    type: GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
    payload: response
  };
};

export const getListFriendRequestFailure = error => {
  return {
    type: GET_LIST_FRIEND_REQUEST_FAILURE,
    payload: error
  };
};

export const getListFriendRequest = userIdLogged => dispatch => {
  dispatch({
    type: LOADER_GET_LIST_FRIEND_REQUEST
  })

  serviceCall(
    {
      url: `/request/friend/${userIdLogged}`,
      method: 'GET'
    },
    dispatch,
    getListFriendRequestSuccess,
    getListFriendRequestFailure
  );
}

/* Get a list of people who are adding the user who is logged */

/* Add or remove a friend base on the user's decision */

export const approveRejectRequestSuccess = response => {
  return {
  type: APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL,
  payload: response
  };
};

export const approveRejectRequestFailure = error => {
  return {
    type: APPROVE_REJECT_FRIEND_REQUEST_FAILURE,
    payload: error
  };
};

export const approveRejectRequest = data => dispatch => {
  dispatch({
    type: LOADER_GET_LIST_FRIEND_REQUEST
  })

  const formData = new FormData();
  formData.append("userFriendId", data.userFriendId);
  formData.append("action", data.action);

  serviceCall(
    {
      url: '/profile/friends',
      method: 'POST',
      body: formData
    },
    dispatch,
    approveRejectRequestSuccess,
    approveRejectRequestFailure,
    false
  );
}


 /* Add or remove a friend base on the user's decision */