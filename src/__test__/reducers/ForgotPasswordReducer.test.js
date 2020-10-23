import { SEND_EMAIL_SUCCESS_FORGOTPASSWORD,
  SEND_EMAIL_FAILURE_FORGOTPASSWORD,
  LOADING_FORGOTPASSWORD,
  RESTORE_PASSWORD_CHANGE_ERROR_VALUE } from '../../redux/types/ForgotPasswordTypes';

import ForgotPasswordReducer from '../../redux/reducers/ForgotPasswordReducer';

import { errorData } from '../__mocks__/mockData';

describe('ForgotPasswordReducer', () => {

  const initial_state = {
    emailSentStatus: false,
    loader: false,
    error: []
  };

  test('it sets loader to true', () => {
    const expected = {
      emailSentStatus: false,
      loader: true,
      error: []
    };

    expect(ForgotPasswordReducer(initial_state, {type: LOADING_FORGOTPASSWORD})).toEqual(expected);
  });

  test('it sets status to true', () => {
    const expected = {
      emailSentStatus: true,
      loader: false,
      error: []
    };

    expect(ForgotPasswordReducer(initial_state, {type: SEND_EMAIL_SUCCESS_FORGOTPASSWORD})).toEqual(expected);
  });

  test('Getting any error', () => {

    const payload = errorData;
    const action = {
      type: SEND_EMAIL_FAILURE_FORGOTPASSWORD,
      payload
    }

    const expected = {
      emailSentStatus: false,
      loader: false,
      error: errorData
    };

    expect(ForgotPasswordReducer(initial_state, action)).toEqual(expected);
  });

  test('Changing error value', () => {
    const payload = initial_state;
    const action = {
      type: RESTORE_PASSWORD_CHANGE_ERROR_VALUE,
      payload
    };

    const expected = initial_state;

    expect(ForgotPasswordReducer(initial_state, action)).toEqual(expected);
  });
});