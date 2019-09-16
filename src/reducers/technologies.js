import {LOAD_TECHS, INSERT_TECH, UPDATE_LIKES, INSERT_COMMENT} from './../constants';
import {handleActions} from 'redux-actions';

export const techs = handleActions({
  [LOAD_TECHS]: (state, action) => [...action.payload],
  [INSERT_TECH]: (state, action) => [...state, action.payload],
  [UPDATE_LIKES]: (state, action) => {
    const updatedTech = action.payload;
    const {id} = updatedTech;
    const techs = state;
    const newState = techs.reduce( (accumulated, tech) => {
      if (tech.id === id) {
        return [...accumulated, updatedTech];
      } else {
        return [...accumulated, tech];
      }
    }, []);

    return newState;
  },
  [INSERT_COMMENT]: (state, action) => {
    const newState = state.reduce((accumulated, tech) => {
      if (tech.id === action.payload.id) {
        return [...accumulated, action.payload];
      } else {
        return [...accumulated, tech];
      }
    }, []);

    return newState;
  }
}, []);

// export const techs = (state = {}, action) => {
//   switch(action.type) {
//     case LOAD_TECHS:
//       return {...state, techs: action.payload}

//     default:
//       return state;
//   }
// }
