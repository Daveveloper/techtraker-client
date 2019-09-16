import { createAction } from 'redux-actions';
import {INSERT_TECH} from './../constants';
import { post } from './../api/requests';
import { url_techs } from './../api/urls';

export const insertTech = createAction(INSERT_TECH, (tech) => post(url_techs, tech)());
