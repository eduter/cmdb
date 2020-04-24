import { Actions } from './types';

export type FilterAction = ReturnType<typeof updateMoviesFilter>;

function updateMoviesFilter(searchQuery: string) {
  return {
    type: Actions.UPDATE_MOVIES_FILTER,
    payload: {
      searchQuery
    }
  }
}


export {
  updateMoviesFilter
};
