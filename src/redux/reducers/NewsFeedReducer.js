import { GET_POSTS_SUCCESSFULL,
         GET_POSTS_FAILURE,
         GET_POSTS_LOADER } from '../types/NewsFeedTypes';

const INITIAL_STATE = {
  loader: false,
  error: []
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_POSTS_SUCCESSFULL:
      return {
        ...state,
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
        loader: true
      }  

    default: return state;  
  }
}