import { Movie } from '../model/Movie';


async function fetchMovies(): Promise<Movie[]> {
  return fetch(process.env.PUBLIC_URL + '/api/movies.json')
    .then(res => res.json());
}

export {
  fetchMovies
};
