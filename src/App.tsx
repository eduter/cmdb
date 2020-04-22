import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { fetchMovies } from './api/dummyApi';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        <Route exact path="/" component={MovieCollection}/>
        <Route exact path="/movieDetails/:id" component={MovieDetails}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

const MovieCollection = () => {
  useEffect(() => {
    (async () => {
      const movies = await fetchMovies();
      console.log(movies);
    })();
  }, []);
  return (
    <div>
      <h1>Collection</h1>
      <Link to="/movieDetails/42">Movie Details</Link>
      <Link to="/broken/link">Broken link</Link>
    </div>
  );
};

const MovieDetails = () => <div>details</div>;
const NotFound = () => <div>404</div>;


export default App;
