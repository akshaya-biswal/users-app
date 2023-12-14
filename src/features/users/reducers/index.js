import { Map, Set } from 'immutable';
import {
  SET_USERS_DATA,
  SET_USERS_DATA_PENDING,
  SET_USERS_DATA_FULFILLED,
  SET_USERS_DATA_REJECTED,
} from '../actions';

const initialState = Map({
  pages: Map({ 1: Set() }),
  currentPage: null,
  isLoading: false,
  error: null,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA_PENDING:
      return state.set('isLoading', true).set('error', null);

    case SET_USERS_DATA_FULFILLED:
      const { currentPage, data } = action.payload;

      return state
        .setIn(['pages', currentPage], data)
        .set('currentPage', currentPage)
        .set('isLoading', false);

    case SET_USERS_DATA_REJECTED:
      return state.set('isLoading', false).set('error', 'Something went wrong');

    case SET_USERS_DATA:
      return state;

    default:
      return state;
  }
};

export default usersReducer;

// TODO
// withMutations
