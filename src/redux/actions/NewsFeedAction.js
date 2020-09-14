import { GET_POSTS_SUCCESSFULL,
  GET_POSTS_FAILURE,
  CREATE_POST_SUCCESSFULL,
  CREATE_POST_FAILURE,
  SAVE_RESPONSE_POST_SUCCESSFULL,
  SAVE_RESPONSE_POST_FAILURE,
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
  formData.append("file", data.file);
  formData.append("userId", data.userId);
  formData.append("comment", data.comment);

  //console.log(data);

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
};


/* Add or Remove a like from a post */

/* Add a comment of a Post */

export const saveResponsePostSucessfull = response => {
  return {
    type: SAVE_RESPONSE_POST_SUCCESSFULL,
    payload: response
  };
};

export const saveResponsePostFailure = error => {
  return {
    type: SAVE_RESPONSE_POST_FAILURE,
    payload: error
  };
};
//export const addRemovelikePost = data => async dispatch => {
export const saveResponsePost = data => async dispatch => {
  /*dispatch({
    type: LOADER_RESPONSE_POST
  })*/

  serviceCall(
    {
      url: '/newsresponse',
      method: 'POST',
      body: JSON.stringify(data)
    },
    dispatch,
    saveResponsePostSucessfull,
    saveResponsePostFailure
  );
}

/* Add a comment of a Post */

/* Add reaction to a response of a post */

export const addRemovelikeComSuccessfull = response => {
  return {type: ''}
};

export const addRemovelikeComFailure = error => {
  return {type: ''}
};

export const addRemovelikeCom = data => async dispatch => {

  serviceCall(
    {
      url: `/newsresponse/reaction?userId=${data.userId}&nwResId=${data.nwResId}`,
      method: 'POST'
    },
    dispatch,
    addRemovelikePostSuccessfull,
    addRemovelikePostFailure
  );
};

/* Add reaction to a response of a post */