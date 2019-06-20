import React from 'react';
import getMovies from './getMovies';

const MoviesList = props => {
  // Call our Movie Database and get a list of Movies, assign the data to a variable that you can map over.
  const Movies = null;

  // Write some state with a method from the hooks api, use it to toggle visibility.

  return (
    <div className="list-container">
      {/* write an onClick function to reveal the movies by toggling the css selector. Use the arrow function syntax*/}
      <button className="show-btn">Show Movies ></button>
      <div className="list">
        {/* Map over the list of movies and return them as individual divs with a class of "movie"*/}
      </div>
    </div>
  );
};

export default MoviesList;
