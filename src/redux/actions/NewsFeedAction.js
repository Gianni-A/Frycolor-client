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
      url: `/postlist/friends/${data.userId}/${data.pagination}`,
      method: 'GET'
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
  formData.append("files", data.file);

  /*for(const name in data) {
    formData.append(name, data[name]);
  }*/

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

/* Add or Remove a like from a post */
export const addRemovelikePostSuccessfull = response => {
  return {type: ''}
};

export const addRemovelikePostFailure = error => {
  return {type: ''}
};

export const addRemovelikePost = data => async dispatch => {

  serviceCall(
    {
      url: `/newsfeed/reaction?userId=${data.userId}&nwId=${data.nwId}`,
      method: 'POST'
    },
    dispatch,
    addRemovelikePostSuccessfull,
    addRemovelikePostFailure
  );
}


/* Add or Remove a like from a post */