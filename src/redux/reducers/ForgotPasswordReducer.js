import { SEND_EMAIL_SUCCESS_FORGOTPASSWORD,
         SEND_EMAIL_FAILURE_FORGOTPASSWORD,
         LOADING_FORGOTPASSWORD,
         RESTORE_PASSWORD_CHANGE_ERROR_VALUE } from '../types/ForgotPasswordTypes';

const INITIAL_STATE = {
  emailSentStatus: false,
  loader: false,
  error: []
}         

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SEND_EMAIL_SUCCESS_FORGOTPASSWORD:
      return {
        ...state,
        emailSentStatus: true,
        loader: false,
        error: []
      }

    case SEND_EMAIL_FAILURE_FORGOTPASSWORD:
      return {
        ...state,
        emailSentStatus: false,
        loader: false,
        error: action.payload
      }
      
     case LOADING_FORGOTPASSWORD:
       return {
         ...state,
         loader: true
       }
       
    case RESTORE_PASSWORD_CHANGE_ERROR_VALUE:
      return {
        ...state,
        error: []
      }

     default: return state;  
  }
}