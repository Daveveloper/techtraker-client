// import {LOAD_USERS} from './../constants';
// import {createAction} from 'redux-actions';
import {url_user} from './../api/urls';

export const searchUser = (username) => fetch(`${url_user}?username=${username}`).then(response => response.json());

export const fetchUser =  (username) => searchUser(username);
