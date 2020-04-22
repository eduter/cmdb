import React from 'react';
import { Route, Switch } from 'react-router';
import MovieCollectionPage from './pages/MovieCollectionPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MovieCollectionPage}/>
        <Route exact path="/movieDetails/:id" component={MovieDetailsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}


export default App;
