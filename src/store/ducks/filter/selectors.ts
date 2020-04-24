import { FilterState } from './types';
import { movies } from '../../../movies';


function getFilteredMovies(state: FilterState) {
  const query = state.searchQuery.toLowerCase();
  return movies.filter(movie => movie.title.toLowerCase().includes(query))
}


export { getFilteredMovies };
