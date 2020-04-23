import React, { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { State } from '../../store/types';
import { movies } from '../../movies';
import NotFoundPage from './NotFoundPage';
import { formatRuntime } from '../../utils/formatting';


interface MovieDetailsPageProps extends ConnectedProps<typeof connector> {
}


function MovieDetailsPage({ movie }: MovieDetailsPageProps) {
  const posterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (movie) {
      const poster = new Image();
      poster.src = movie.images.poster;
      poster.onload = () => {
        console.log('poster loaded');
        if (posterRef.current) {
          posterRef.current.src = poster.src;
          console.log('image replaced');
        }
      };
    }
  }, [movie]);

  if (movie) {
    const { title, plot, year, runtime, images: { thumbnail } } = movie;

    return (
      <Wrapper>
        <Main>
          <Header>
            <h2>
              {title} ({year})
              <div>
                {formatRuntime(runtime)}
              </div>
            </h2>
          </Header>
          <Details>
            {plot}
          </Details>
          <Poster>
            <img src={thumbnail} alt="" ref={posterRef}/>
          </Poster>
        </Main>
      </Wrapper>
    );
  } else {
    return <NotFoundPage/>;
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: ${Math.ceil(2*140/209*80)}vh;
  
  grid-template-rows: minmax(0px, max-content) auto;
  justify-content: space-around;
  grid-template-areas: "header  poster"
                       "details poster";
  
  @media(orientation: portrait)  {
    max-width: 90vw;
    grid-template-columns: 1fr;
    grid-template-areas: "header"
                         "details"
                         "poster";
  }
`;

const Details = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  grid-area: header;
  div {
    font-size: 1.2rem;
    color: gray;
  }
`;

const Poster = styled.div`
  grid-area: poster;
  display: flex;
  justify-content: center;

  img {
    height: 80vh;
    width: ${Math.round(140/209*80)}vh;
  
    @media(orientation: portrait) {
      max-width: 100%;
      height: initial;
    }
  }
`;

interface MatchParams {
  id: string;
}

function mapStateToProps(state: State, { match }: RouteComponentProps<MatchParams>) {
  return {
    movie: movies.find(movie => movie.id === match.params.id)
  };
}

const connector = connect(mapStateToProps);


export default connector(MovieDetailsPage);
export { MovieDetailsPage };
