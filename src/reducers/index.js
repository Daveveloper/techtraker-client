import {combineReducers} from 'redux';
import {techs} from './technologies';
// import {users} from './users';
import {userTechList} from './userTechList';

export default combineReducers({
  techs,
  userTechList
});
