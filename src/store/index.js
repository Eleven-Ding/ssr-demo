//
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;

export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(ReduxThunk));
};

export const getClientStore = () => {
  const defaultState = window.__context ? window.__context : {};
  return createStore(reducer, defaultState, applyMiddleware(ReduxThunk));
};
