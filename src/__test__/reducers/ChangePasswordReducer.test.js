import { CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_LOADER, 
  CHANGE_PASSWORD_FAILURE} from '../../redux/types/ChangePasswordTypes';

import ChangePasswordReducer from '../../redux/reducers/ChangePasswordReducer';
import { changePasswordData, errorData } from '../__mocks__/mockData';

describe('Tests on Reducers', () => {

  const initial_state = {
    passwordInfo: {},
    loader: false,
    error: []
  };

  test('it sets loader to true', () => {
    const expectedState = {
      passwordInfo: {},
      loader: true,
      error: []
    };
    expect(ChangePasswordReducer(initial_state,{type: CHANGE_PASSWORD_LOADER})).toEqual(expectedState);
  });

  test('Should match an OK Response', () => {
    const payload = changePasswordData;
    const action = {
      type: CHANGE_PASSWORD_SUCCESS,
      payload
    };

    const expected = {
      passwordInfo: changePasswordData,
      loader: false,
      error: []
    };
    expect(ChangePasswordReducer(initial_state, action)).toEqual(expected);
  });

  test('It should get error', () => {
    const payload = errorData;
    const action = {
      type: CHANGE_PASSWORD_FAILURE,
      payload
    };

    const expected = {
      passwordInfo: {},
      loader: false,
      error: errorData
    };

    expect(ChangePasswordReducer(initial_state, action)).toEqual(expected);
  });
});