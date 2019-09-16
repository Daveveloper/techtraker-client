import { createAction } from 'redux-actions';
import {INSERT_COMMENT} from './../constants';
import { patch } from './../api/requests';
import { url_techs } from './../api/urls';

export const insertComment = createAction(INSERT_COMMENT, (comment, id) => patch(url_techs, id, comment)());
