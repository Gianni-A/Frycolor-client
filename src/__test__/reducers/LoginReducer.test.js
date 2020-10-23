import { LOGIN_SUCCESSFUL,
  LOGIN_FAILURE,
  LOGIN_LOADER } from '../../redux/types/LoginTypes';

import LoginReducer from '../../redux/reducers/LoginReducer';  
import { userSessionData, errorData } from '../__mocks__/mockData';

describe('LoginReducer', () => {

  const initialState = {
    userInformation: {},
    loader: false,
    error: []
  }

  test('Sets loader to true', () => {
    const expected = {
      userInformation: {},
      loader: true,
      error: []
    };
    expect(LoginReducer(initialState, {type: LOGIN_LOADER})).toEqual(expected);
  });

  test('Get user information', () => {
    const payload = userSessionData;
    const action = {
      type: LOGIN_SUCCESSFUL,
      payload
    };

    const expected = {
      userInformation: userSessionData,
      loader: false,
      error: []
    };
    expect(LoginReducer(initialState, action)).toEqual(expected);
  });

  test('Get error for invalid credentials', () => {
    const payload = errorData;
    const action = {
      type: LOGIN_FAILURE,
      payload
    };

    const expected = {
      userInformation: {},
      loader: false,
      error: errorData
    };
    expect(LoginReducer(initialState, action)).toEqual(expected);
  });
});