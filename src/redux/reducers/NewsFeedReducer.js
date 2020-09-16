import { GET_POSTS_SUCCESSFULL,
         GET_POSTS_FAILURE,
         CREATE_POST_SUCCESSFULL,
         CREATE_POST_FAILURE,
         SAVE_RESPONSE_POST_SUCCESSFULL,
         SAVE_RESPONSE_POST_FAILURE,
         GET_POSTS_LOADER} from '../types/NewsFeedTypes';

import { GET_LIST_FRIENDS_SUCCESSFULL,
         GET_LIST_FRIENDS_FAILURE } from '../types/ProfileTypes';        

const INITIAL_STATE = {
  listPost: [],
  listFriends: [],
  responsePost: {},
  loader: false,
  error: [],
  cleanForm: false
};

export default(state = INITIAL_STATE, action) => {
  let { listPost } = state;
  let payload = action.payload;

  switch(action.type) {
    case GET_POSTS_SUCCESSFULL:
      return {
        ...state,
        listPost: payload,
        loader: false,
        error: [],
        cleanForm: false
      }

    case GET_POSTS_FAILURE:
      return {
        ...state,
        loader: false,
        error: payload,
        cleanForm: false
      }  
      
    case CREATE_POST_SUCCESSFULL:
      let user = payload.usId.usInfId;
      const commentPost = payload.usCommentId != null ? payload.usCommentId.usComComment : '';
      const image = payload.usMdId != null ? payload.usMdId.usMdPath : '';
      const newPost = {
        nwId: payload.nwId,
        comment: commentPost,
        image: image,
        imageProfile: user.usInfPath_image,
        nameUser: `${user.usInfName} ${user.usInfLastname}`,
        contReactions: 0,
        userLike: false,
        listResponses: []
      };

      listPost.push(newPost);

      return {
        ...state,
        listPost,
        error: [],
        loader: false,
        cleanForm: commentPost != "" ? true : false
      } 
      
    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: payload,
        loader: false,
        cleanForm: false
      }  
      
    case SAVE_RESPONSE_POST_SUCCESSFULL:
      let {nameUser, comment, nwId, nwResId} = payload;
      
      const post = listPost.filter(list => list.nwId == nwId);

      const responseComment = {
        nwResId,
        comment,
        nameUser,
        contReactions: 0
      }
      
      post[0].listResponses.push(responseComment);
      
      return {
        ...state,
        responsePost: payload,
        loader: false,
        error: [],
        cleanForm: true
      }

    case SAVE_RESPONSE_POST_FAILURE:
      return {
        ...state,
        responsePost: {},
        loader: false,
        error: payload,
        cleanForm: false
      }   
      
    case GET_LIST_FRIENDS_SUCCESSFULL:
      return {
        ...state,
        listFriends: payload,
        error: []
      }  

    case GET_LIST_FRIENDS_FAILURE:
      return {
        ...state,
        error: payload
      }  

    case GET_POSTS_LOADER:
      return {
        ...state,
        loader: true,
        error: [],
        cleanForm: false
      }  

    default: return state;  
  }
}