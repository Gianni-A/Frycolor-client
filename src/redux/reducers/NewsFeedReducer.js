import { GET_POSTS_SUCCESSFULL,
         GET_POSTS_FAILURE,
         CREATE_POST_SUCCESSFULL,
         CREATE_POST_FAILURE,
         SAVE_RESPONSE_POST_SUCCESSFULL,
         SAVE_RESPONSE_POST_FAILURE,
         UPDATE_RESPONSE_POST_SUCCESSFULL,
         DELETE_RESPONSE_POST_SUCCESSFULL,
         DELETE_POST_SUCCESSFULL,         
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
        userId: payload.usId.usId,
        nwId: payload.nwId,
        comment: commentPost,
        image: image,
        imageProfile: user.usInfPath_image,
        nameUser: `${user.usInfName} ${user.usInfLastname}`,
        contReactions: 0,
        userLike: false,
        listResponses: []
      };

      //unshift = using this method we can add an element to the beginning of the array
      //with this we can simulate it is added the last post to the array
      listPost.unshift(newPost);

      return {
        ...state,
        listPost,
        error: [],
        loader: false,
        cleanForm: true
      } 
      
    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: payload,
        loader: false,
        cleanForm: false
      }  

    case DELETE_POST_SUCCESSFULL:
      const payloadNews = JSON.parse(payload.dataJSON);
      const objIndexPost = listPost.findIndex((obj => obj.nwId == payloadNews.nwId));

      //Delete the object post from the array
      listPost.splice(objIndexPost, 1); 

      return {
        ...state,
        listPost,
        loader: false,
        error: []
      }   
      
    case SAVE_RESPONSE_POST_SUCCESSFULL:
      let {userId, nameUser, comment, nwId, nwResId} = payload;
      
      const post = listPost.filter(list => list.nwId == nwId);

      const responseComment = {
        userId,
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

    case UPDATE_RESPONSE_POST_SUCCESSFULL:
      const indexResPost = listPost.findIndex(obj => obj.nwId == payload.nwComOriginId);
      const indexRes = listPost[indexResPost].listResponses.findIndex(obj => obj.nwResId == payload.nwResId);

      //Changes values from the actual array to make it up to date
      listPost[indexResPost].listResponses[indexRes].comment = payload.usComId.usComComment;
      listPost[indexResPost].listResponses[indexRes].dateTime = payload.nwResTsUpdated;

      return {
        ...state,
        listPost,
        loader: false,
        error: []
      }   
      
    case DELETE_RESPONSE_POST_SUCCESSFULL:
      const payloadResponsePost = JSON.parse(payload.dataJSON);
      const objIndexResPost = listPost.findIndex(obj => obj.nwId == payloadResponsePost.nwId);
      const objIndexRes = listPost[objIndexResPost].listResponses.findIndex(obj => obj.nwResId == payloadResponsePost.nwResId)
      
      
      //Delete the object response of a post from the array
      listPost[objIndexResPost].listResponses.splice(objIndexRes, 1); 

      return {
        ...state,
        listPost,
        loader: false,
        error: []
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