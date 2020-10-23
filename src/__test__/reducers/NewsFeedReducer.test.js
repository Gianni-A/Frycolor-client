import { GET_POSTS_SUCCESSFULL,
  GET_POSTS_FAILURE,
  CREATE_POST_SUCCESSFULL,
  CREATE_POST_FAILURE,
  SAVE_RESPONSE_POST_SUCCESSFULL,
  SAVE_RESPONSE_POST_FAILURE,
  GET_POSTS_LOADER} from '../../redux/types/NewsFeedTypes';

import { GET_LIST_FRIENDS_SUCCESSFULL,
  GET_LIST_FRIENDS_FAILURE } from '../../redux/types/ProfileTypes'; 

import NewsFeedReducer from '../../redux/reducers/NewsFeedReducer';
import { listPosts, errorData } from '../__mocks__/mockData'; 

describe('NewsFeedReducer', () => {
  
  const initialState = {
    listPost: [],
    listFriends: [],
    responsePost: {},
    loader: false,
    error: [],
    cleanForm: false
  }

  test('Set loader to true', () => {
    const expected = {
      listPost: [],
      listFriends: [],
      responsePost: {},
      loader: true,
      error: [],
      cleanForm: false
    };

    expect(NewsFeedReducer(initialState,{type: GET_POSTS_LOADER})).toEqual(expected);
  });

  test('Get list of posts', () => {
    const payload = listPosts;
    const action = {
      type: GET_POSTS_SUCCESSFULL,
      payload
    };

    const expected = {
      listPost: listPosts,
      listFriends: [],
      responsePost: {},
      loader: false,
      error: [],
      cleanForm: false
    };

    expect(NewsFeedReducer(initialState,action)).toEqual(expected);
  });

  test('Get error - No posts listed', () => {
    const payload = errorData;
    const action = {
      type: GET_POSTS_FAILURE,
      payload
    };

    const expected = {
      listPost: [],
      listFriends: [],
      responsePost: {},
      loader: false,
      error: errorData,
      cleanForm: false
    };

    expect(NewsFeedReducer(initialState,action)).toEqual(expected);
  });

});