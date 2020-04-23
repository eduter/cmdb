import React from 'react';
import { Route, Switch } from 'react-router';
import MovieCollectionPage from './pages/MovieCollectionPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import { createGlobalStyle } from 'styled-components';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <h1>Chris' Movie Collection</h1>
      <Switch>
        <Route exact path="/" component={MovieCollectionPage}/>
        <Route exact path="/movieDetails/:id" component={MovieDetailsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
    background-color: #000;
    color: gray;
  }
`;


export default App;
