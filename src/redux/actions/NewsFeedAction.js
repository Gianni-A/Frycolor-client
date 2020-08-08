import { GET_POSTS_SUCCESSFULL,
  GET_POSTS_FAILURE,
  CREATE_POST_SUCCESSFULL,
  CREATE_POST_FAILURE,
  GET_POSTS_LOADER } from '../types/NewsFeedTypes';

import { serviceCall } from '../../util/Utils';

/* Get information */
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
/* Get information */

/* Create the post */
export const createPostSuccessfull = response => {
  return {
    type: CREATE_POST_SUCCESSFULL,
    payload: response
  }
};

export const createPostFailure = error => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  }
};

export const createPost = data => async dispatch => {
  dispatch({
    type: GET_POSTS_LOADER
  })

  const formData = new FormData();

  formData.append("file", data.file);
  formData.append("comment", data.comment);
  formData.append("userId", data.userId);

  console.log("Formdata:", data);

  serviceCall(
    {
      url: '/newsfeed/newpost',
      method: 'POST',
      body: formData
    },
    dispatch,
    createPostSuccessfull,
    createPostFailure,
    false
  )
};
/* Create the post */