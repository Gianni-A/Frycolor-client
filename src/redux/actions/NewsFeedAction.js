import { GET_POSTS_SUCCESSFULL,
  GET_POSTS_FAILURE,
  GET_POSTS_LOADER } from '../types/NewsFeedTypes';

import { serviceCall } from '../../util/Utils';

export const getPostsSuccessfull = response => {
  return {
    type: GET_POSTS_SUCCESSFULL,
    payload: response
  }
};

export const getPostsFailure = error => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  }
};

export const getListPost = data => async dispatch => {
  dispatch({
    type: GET_POSTS_LOADER
  })

  serviceCall(
    {
      url: '/newsfeed',
      method: 'POST',
      body: JSON.stringify(data)
    },
    dispatch,
    getPostsSuccessfull,
    getPostsFailure
  );
}