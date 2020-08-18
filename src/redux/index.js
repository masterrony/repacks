import { createStore , applyMiddleware } from "redux";

import { createLogger } from "redux-logger";

import thunk from 'redux-thunk';

import rootReducer from './reducers';

// const middlaware = [thunk, createLogger()];

const middlaware = [thunk];

const store  = createStore(rootReducer, {}, applyMiddleware(...middlaware))

export default store