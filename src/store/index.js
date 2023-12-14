import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import usersReducer from '../features/users/reducers';

const rootReducer = combineReducers({ usersReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;
