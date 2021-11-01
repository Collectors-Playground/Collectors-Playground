import * as types from '../constants/actionTypes';

export const updateUsernameDispatch = (username: string) => ({
  type: types.UPDATE_USERNAME,
  payload: username,
});

// add more action creators
