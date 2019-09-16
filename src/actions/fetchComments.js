import {LOAD_COMMENTS} from './../constants';
import {createAction} from 'redux-actions';
import {get_comments} from './../api/urls';

const techs = (id) => fetch(`${get_comments}${id}`).then(resolve => resolve.json());

export const fetchComments = createAction(LOAD_COMMENTS, techs);
