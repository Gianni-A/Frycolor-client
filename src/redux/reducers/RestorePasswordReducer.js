import { RESTORE_PASSWORD_SUCCESSFULL, 
         RESTORE_PASSWORD_FAILURE,
         RESTORE_PASSWORD_LOADER } from '../types/RestorePasswordTypes';

const INITIAL_STATE = {
  passwordInfo: {},
  loading: false,
  error: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RESTORE_PASSWORD_SUCCESSFULL:
      return {
        ...state,
        passwordInfo: action.payload,
        loading: false,
        error: []
      }

     case RESTORE_PASSWORD_FAILURE:
       return {
         ...state,
         passwordInfo: {},
         loading: false,
         error: action.payload
       }

     case RESTORE_PASSWORD_LOADER:
       return {
        ...state,
        passwordInfo: {},
        loading: true,
        error: []
       }  

     default: return state;  
  }
}