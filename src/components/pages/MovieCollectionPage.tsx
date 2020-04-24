import { push } from 'connected-react-router';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { RootState } from '../../store/types';
import FilterInput from '../FilterInput';
import { getFilteredMovies } from '../../store/ducks/filter/selectors';


interface MovieCollectionPageProps extends ConnectedProps<typeof connector> {
}

function MovieCollectionPage({ movies, goToDetails }: MovieCollectionPageProps) {
  return (
    <div>
      <FilterInput/>
      <MoviesContainer>
        {movies.map(({ id, title, images: { thumbnail } }) => (
          <Card key={id}>
            <ThumbnailPlaceholder>
              {title}
            </ThumbnailPlaceholder>
            <img src={thumbnail} alt={title} title={title} key={id} onClick={() => goToDetails(id)}/>
          </Card>
        ))}
      </MoviesContainer>
    </div>
  );
}

const MoviesContainer = styled.div`
  justify-content: space-between;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill,minmax(140px,1fr));
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 209px;
  img {
   display: block;
  }
`;

const ThumbnailPlaceholder = styled.div`
  background: linear-gradient(to bottom, #555 30%, #666 50%, #555 70%);
  color: white;
    
  // place it behind the thumbnail
  position: absolute;
  z-index: -1;
  width: 140px;
  height: 100%;
  
  // centralizes text
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  // animation
  @keyframes backgroundAnimation {
    0% {
     background-position: 0 -209px;
    }
    100% {
     background-position: 0 209px;
    }
  }
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: backgroundAnimation;
  animation-timing-function: linear;
`;

function mapStateToProps(state: RootState) {
  return {
    movies: getFilteredMovies(state.filter)
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
