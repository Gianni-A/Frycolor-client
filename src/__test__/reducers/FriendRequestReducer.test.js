import { GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
  GET_LIST_FRIEND_REQUEST_FAILURE,
  APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL,
 LOADER_GET_LIST_FRIEND_REQUEST } from '../../redux/types/FriendRequestTypes';

import FriendRequest from '../../redux/reducers/FriendRequestReducer'; 
import { friendRequestData, errorData } from '../__mocks__/mockData';

describe('FriendRequestReducer', () => {

  const initialState = {
    listFriendsRequest: [],
    actionTook: '',
    loader: false,
    error: []
  };

  test('Sets loader to true', () => {
    const expected = {
      listFriendsRequest: [],
      actionTook: '',
      loader: true,
      error: []
    };
    expect(FriendRequest(initialState,{type: LOADER_GET_LIST_FRIEND_REQUEST})).toEqual(expected);
  });

  test('Getting a list of friends requests', () => {
    const payload = friendRequestData;
    const action = {
      type: GET_LIST_FRIEND_REQUEST_SUCCESSFULL,
      payload
    };

    const expected = {
      listFriendsRequest: friendRequestData,
      actionTook: '',
      loader: false,
      error: []
    };
    expect(FriendRequest(initialState,action)).toEqual(expected);
  });

  test('Error for no having any requests of a friend', () => {
    const payload = errorData;
    const action = {
      type: GET_LIST_FRIEND_REQUEST_FAILURE,
      payload
    };

    const expected = {
      listFriendsRequest: [],
      actionTook: '',
      loader: false,
      error: errorData
    };
    expect(FriendRequest(initialState,action)).toEqual(expected);
  });

  test('Get response of approve on a request', () => {
    const payload = {
      "message": "Approved"
    };
    const action = {
      type: APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL,
      payload
    };

    const expected = {
      listFriendsRequest: [],
      actionTook: 'Approved',
      loader: false,
      error: []
    };
    expect(FriendRequest(initialState,action)).toEqual(expected);
  });

  test('Get response of reject on a request', () => {
    const payload = {
      "message": "Rejected"
    };
    const action = {
      type: APPROVE_REJECT_FRIEND_REQUEST_SUCCESSFULL,
      payload
    };

    const expected = {
      listFriendsRequest: [],
      actionTook: 'Rejected',
      loader: false,
      error: []
    };
    expect(FriendRequest(initialState,action)).toEqual(expected);
  });
});