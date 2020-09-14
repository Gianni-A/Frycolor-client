import { GET_POSTS_SUCCESSFULL,
         GET_POSTS_FAILURE,
         CREATE_POST_SUCCESSFULL,
         CREATE_POST_FAILURE,
         SAVE_RESPONSE_POST_SUCCESSFULL,
         SAVE_RESPONSE_POST_FAILURE,
         GET_POSTS_LOADER} from '../types/NewsFeedTypes';

const INITIAL_STATE = {
  listPost: [],
  responsePost: {},
  loader: false,
  error: []
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
        error: []
      }

    case GET_POSTS_FAILURE:
      return {
        ...state,
        loader: false,
        error: payload
      }  
      
    case CREATE_POST_SUCCESSFULL:
      console.log(payload);
      let user = payload.usId.usInfId;
      const commentPost = payload.usCommentId != null ? payload.usCommentId.usComComment : '';
      const image = payload.usMdId != null ? payload.usMdId.usMdPath : '';
      const newPost = {
        nwId: payload.nwId,
        comment: commentPost,
        image: image,
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
        loader: false
      } 
      
    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: payload,
        loader: false
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
        error: []
      }

    case SAVE_RESPONSE_POST_FAILURE:
      return {
        ...state,
        responsePost: {},
        loader: false,
        error: payload
      }    

    case GET_POSTS_LOADER:
      return {
        ...state,
        loader: true,
        error: []
      }  

    default: return state;  
  }
}