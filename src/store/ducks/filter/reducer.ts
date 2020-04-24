import { Actions, FilterState } from './types';
import { FilterAction } from './actions';

const INITIAL_STATE: FilterState = {
  searchQuery: ''
};

function filterReducer(state: FilterState = INITIAL_STATE, action: FilterAction): FilterState {
  switch (action.type) {
    case Actions.UPDATE_MOVIES_FILTER:
      return {
        searchQuery: action.payload.searchQuery
      };
    default:
      return state;
  }
}

export default filterReducer;
