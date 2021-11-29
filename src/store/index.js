import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import auth from "./reducers/auth";
import jobs from "./reducers/jobs";
import user from "./reducers/user";
import loading from "./reducers/loading";

const reducer = combineReducers({
  // Khai báo reducer con
  auth,
  jobs,
  loading,
  user
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
