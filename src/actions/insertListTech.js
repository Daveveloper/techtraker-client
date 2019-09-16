import {createAction} from 'redux-actions';
import {UPDATE_USERTECHS} from './../constants';
import { patch } from './../api/requests';
import { url_usertechs } from './../api/urls';

export const addNewInList = createAction(UPDATE_USERTECHS, (newTech, id) => patch(url_usertechs, id, newTech)());
