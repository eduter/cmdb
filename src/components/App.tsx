import React from 'react';
import { Route, Switch } from 'react-router';
import MovieCollectionPage from './pages/MovieCollectionPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import { createGlobalStyle } from 'styled-components';
import SiteHeader from './SiteHeader';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <SiteHeader/>
      <Switch>
        <Route exact path="/" component={MovieCollectionPage}/>
        <Route exact path="/movieDetails/:id" component={MovieDetailsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.6vw;
    
    @media(orientation: portrait) {
      font-size: 1.6vh;
    }
    @media(min-width: 1000px) {
      font-size: 16px;
    }
  }
  
  body {
    font-family: Roboto, sans-serif;
    background-color: #000;
    color: lightgray;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
`;


export default App;
