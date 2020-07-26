import { SEND_EMAIL_SUCCESS_FORGOTPASSWORD,
         SEND_EMAIL_FAILURE_FORGOTPASSWORD,
         LOADING_FORGOTPASSWORD } from '../types/ForgotPasswordTypes';

 import { serviceCall } from '../../util/Utils';
 
 export const sendEmailSuccess = response => {
   return {
     type: SEND_EMAIL_SUCCESS_FORGOTPASSWORD,
     payload: response
   }
 }

 export const sendEmailFailure = error => {
   return {
     type: SEND_EMAIL_FAILURE_FORGOTPASSWORD,
     payload: error
   }
 }

 export const sendEmail = emailInput => async dispatch => {

   dispatch({
     type: LOADING_FORGOTPASSWORD
   })

   const formData = new FormData();
   formData.append('emailID', emailInput);

   serviceCall(
     {
       url: '/session/password',
       method: 'POST',
       body: formData
     },
     dispatch,
     sendEmailSuccess,
     sendEmailFailure
   );
 }