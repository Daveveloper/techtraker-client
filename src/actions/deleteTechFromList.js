import {createAction} from 'redux-actions';
import {UPDATE_USERTECHS} from './../constants';
import { patch } from './../api/requests';
import { url_usertechs } from './../api/urls';

export const removeFromList = createAction(UPDATE_USERTECHS, (newList, id) => patch(url_usertechs, id, newList)());
