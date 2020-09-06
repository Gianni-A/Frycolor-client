import { GET_POSTS_SUCCESSFULL,
         GET_POSTS_FAILURE,
         GET_POSTS_LOADER} from '../types/NewsFeedTypes';

const INITIAL_STATE = {
  listPost: [],
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

    case GET_POSTS_LOADER:
      return {
        ...state,
        loader: true,
        error: []
      }  

    default: return state;  
  }
}