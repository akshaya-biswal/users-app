import http from '../../../shared/http';

export const SET_USERS_DATA = 'SET_USERS_DATA';
export const SET_USERS_DATA_PENDING = `${SET_USERS_DATA}_PENDING`;
export const SET_USERS_DATA_FULFILLED = `${SET_USERS_DATA}_FULFILLED`;
export const SET_USERS_DATA_REJECTED = `${SET_USERS_DATA}_REJECTED`;

export function setUsersData() {
  return {
    type: SET_USERS_DATA,
    payload: http.get('users'),
  };
}
