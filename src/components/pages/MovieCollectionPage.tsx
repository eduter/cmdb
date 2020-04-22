import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../store/types';
import { movies } from '../../movies';
import { push } from 'connected-react-router';


interface MovieCollectionPageProps extends ConnectedProps<typeof connector> {
}


function MovieCollectionPage({ movies, goToDetails }: MovieCollectionPageProps) {
  return (
    <div>
      <h1>Chris' Movie Collection</h1>
      {movies.map(({ id, title, images: {thumbnail} }) => (
        <div key={id}>
          <div>
            {title}
          </div>
          <button key={id} onClick={() => goToDetails(id)}>
            <img src={thumbnail} alt=""/>
          </button>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state: State) {
  return {
    movies
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    goToDetails: (movieId: string) => dispatch(push(`/movieDetails/${movieId}`))
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(MovieCollectionPage);
export { MovieCollectionPage };
