import { createAction } from 'redux-actions';
import {UPDATE_LIKES} from './../constants';
import { patch } from './../api/requests';
import { url_techs } from './../api/urls';

export const updateLikes = createAction(UPDATE_LIKES, (updatedProperty, id) => patch(url_techs, id, updatedProperty)());
