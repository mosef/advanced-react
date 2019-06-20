import React, { useContext } from 'react';
import MoviesList from './Components/MoviesList';
import { ThemeContext } from './Themes/ThemeProvider';
import './scss/App.scss';

// Instructions:
// To get started head over to https://www.themoviedb.org
// Sign up for an account. Verify it. Then log in.
// Head to https://developers.themoviedb.org/3/getting-started/introduction
// and await further instructions.

const App = () => {
  const { currentTheme, toggle, dark, light } = useContext(ThemeContext);
  const theme = currentTheme ? dark : light;
  return (
    <div className="app" style={{ backgroundColor: theme.bg }}>
      <nav style={{ background: theme.navColor, color: theme.textColor }}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Movies</li>
          <li>Contact</li>
          <button onClick={() => toggle(!currentTheme)} />
        </ul>
      </nav>
      {/* <MoviesList
        theme={{
          currentTheme,
          toggle,
          dark,
          light
        }}
      /> */}
      <MoviesList selectedTheme={useContext(ThemeContext)} />
    </div>
  );
};

export default App;
