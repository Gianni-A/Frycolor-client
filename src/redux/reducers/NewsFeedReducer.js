import { GET_POSTS_SUCCESSFULL,
         GET_POSTS_FAILURE,
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
  switch(action.type) {
    case GET_POSTS_SUCCESSFULL:
      return {
        ...state,
        listPost: action.payload,
        loader: false,
        error: []
      }

    case GET_POSTS_FAILURE:
      return {
        ...state,
        loader: false,
        error: action.payload
      }    
      
    case SAVE_RESPONSE_POST_SUCCESSFULL:
      let {nameUser, comment, nwId, nwResId} = action.payload;
      
      let { listPost } = state;
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
        responsePost: action.payload,
        loader: false,
        error: []
      }

    case SAVE_RESPONSE_POST_FAILURE:
      return {
        ...state,
        responsePost: {},
        loader: false,
        error: action.payload
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