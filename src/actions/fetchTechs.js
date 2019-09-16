import {LOAD_TECHS} from './../constants';
import {createAction} from 'redux-actions';
import {url_techs} from './../api/urls';

const techs = () => fetch(url_techs).then(resolve => resolve.json());

export const fetchTechs = createAction(LOAD_TECHS, techs);

// export const loadTechs = payload => ({type: LOAD_TECHS, payload});

// export const fetchTechs = () => {
//   return dispatch => {
//     // change this url in production.
//     const url = 'http://localhost:3001/techs';
//     //Fetch technologies
//     return fetch(url).then(
//       resolve => resolve.json()
//     ).then(
//       data => {
//         dispatch(loadTechs(data))
//       }
//     );
//   }
// }
