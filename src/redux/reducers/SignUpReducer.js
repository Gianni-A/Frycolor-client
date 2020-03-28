import { CREATE_USER } from '../types/SignUpTypes';

const INITIAL_STATE = {
  user_created: {},
  usEmail: '',
  usUser: '',
  usPassword: '',
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case CREATE_USER:
        return {
          ...state,
          usUser: action.payload,
          loading: false,
          error: ''
        };
        
      default: return state;  
  }
}