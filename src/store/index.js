import { createStore, applyMiddleware, compose } from 'redux';
import {loadState, saveState} from './../immutable';
//import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';

const globalState = loadState() || {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, globalState, composeEnhancers(
  applyMiddleware(promiseMiddleware)
));

store.subscribe(() => {
  saveState({
    users: store.getState().users,
    techs: store.getState().techs,
    comments: store.getState().comments
  })
});
