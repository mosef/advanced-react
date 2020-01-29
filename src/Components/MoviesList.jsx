import React, { useState } from 'react';
import getMovies from './getMovies';

const MoviesList = ({ selectedTheme }) => {
  const Movies = getMovies();
  const [isVisible, setVisibility] = useState(false);
  const { currentTheme, dark, light } = selectedTheme;
  const theme = currentTheme ? dark : light;

  return (
    <div className="list-container">
      <button className="show-btn" onClick={() => setVisibility(!isVisible)}>
        Show Movies >
      </button>
      <div className={`list ${isVisible ? '' : 'hidden'}`}>
        {Movies.map(movie => (
          <div
            className="movie"
            style={{
              background: theme.cardBg,
              color: theme.cardText
            }}
          >
            {movie}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
