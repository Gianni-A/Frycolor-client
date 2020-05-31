import { CREATE_USER, LOADING, ERROR } from '../types/SignUpTypes';

const INITIAL_STATE = {
  user_created: {},
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_USER:
      return {
        ...state,
        user_created: action.payload,
        loading: false,
        error: ''
      };

    case ERROR:
      return {
        ...state,
        user_created: {},
        loading: false,
        error: action.payload
      }
      
    case LOADING:
      return {
        ...state,
        loading: true
      }
      
    default: return state;  
  }
}