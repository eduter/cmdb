import { push } from 'connected-react-router';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { State } from '../../store/types';
import { movies } from '../../movies';
import NotFoundPage from './NotFoundPage';


interface MovieDetailsPageProps extends ConnectedProps<typeof connector> {
}


function MovieDetailsPage({ movie, goToCollection }: MovieDetailsPageProps) {
  if (movie) {
    const { title, images: { thumbnail } } = movie;
    return (
      <div>
        <h1>{title}</h1>
        <img src={thumbnail} alt=""/>
        <button onClick={() => goToCollection() }>Back to collection</button>
      </div>
    );
  } else {
    return <NotFoundPage/>;
  }
}

interface MatchParams {
  id: string;
}

function mapStateToProps(state: State, { match }: RouteComponentProps<MatchParams>) {
  return {
    movie: movies.find(movie => movie.id === match.params.id)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    goToCollection: () => dispatch(push('/'))
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(MovieDetailsPage);
export { MovieDetailsPage };
