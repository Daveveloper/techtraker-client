import {LOAD_USERS} from './../constants';
import {handleActions} from 'redux-actions';

export const users = handleActions({
  [LOAD_USERS]: (state, action) => [...action.payload],
}, []);
