import React from 'react';
import MoviesList from './Components/MoviesList';
import './scss/App.scss';

// Instructions:
// To get started head over to https://www.themoviedb.org
// Sign up for an account. Verify it. Then log in.
// Head to https://developers.themoviedb.org/3/getting-started/introduction
// and await further instructions.

const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Movies</li>
          <li>Contact</li>
        </ul>
      </nav>
      <MoviesList />
    </div>
  );
};

export default App;
