import {LOAD_USERTECHS,UPDATE_USERTECHS} from './../constants';
import {handleActions} from 'redux-actions';

export const userTechList = handleActions({
  [LOAD_USERTECHS]: (state, action) => [...action.payload],
  [UPDATE_USERTECHS]: (state, action) => {
    const {id} = action.payload;
    const newState = state.reduce((accumulated, tech) => {
      if (tech.id === id) {
        return [...accumulated, action.payload];
      } else {
        return [...accumulated, tech];
      }
    }, []);
    return newState;
  },
},[]);
