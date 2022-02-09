import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducers';
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
  session: loginReducer,
  users: usersReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);