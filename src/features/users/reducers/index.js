import { Map, Set } from 'immutable';

const initialState = Map({
  pages: Map({ 1: Set() }),
  currentPage: null,
  isLoading: false,
  error: null,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USERS_PENDING':
      return state.set('isLoading', true).set('error', null);

    // case 'LOAD_USERS_FULFILLED':
    //   const { currentPage, data } = action.payload;

    //   return state
    //     .setIn(['pages', currentPage], data)
    //     .set('currentPage', currentPage)
    //     .set('isLoading', false);

    case 'LOAD_USERS_REJECTED':
      return state.set('isLoading', false).set('error', 'Something went wrong');

    case 'SET_USERS_DATA':
      const { currentPage, data } = action.payload;

      return state
        .setIn(['pages', currentPage], data)
        .set('currentPage', currentPage);

    default:
      return state;
  }
};

export default reducer;

// case "SET_USERS_DATA":
//   const { currentPage, data } = action.payload;

//   return state
//     .setIn(["pages", currentPage], data)
//     .set("currentPage", currentPage);

// TODO
// withMutations
