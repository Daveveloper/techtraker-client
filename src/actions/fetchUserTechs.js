import {LOAD_USERTECHS} from './../constants';
import {createAction} from 'redux-actions';
import {url_usertechs} from './../api/urls';

const mytechs = (id) => fetch(`${url_usertechs}?userId=${id}`).then(response => response.json());
export const fetchUserTechs = createAction(LOAD_USERTECHS, (id) => mytechs(id));
