import {GET_PAGES} from './types';

export const getPages = (filter = {}) => {
  return (dispatch, getState) => {
    const state = getState()

    return state.page
  }
}
