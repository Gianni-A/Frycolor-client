import {GET_USER_INFORMATION_SUCCESS} from '../types/ProfileTypes';

const INITIAL_STATE = {
  user_information: {},
  loader: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: return state; 
  }
};