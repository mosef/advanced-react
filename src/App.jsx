import React, { useContext } from 'react';
import MoviesList from './Components/MoviesList';
import { ThemeContext } from './Themes/ThemeProvider';
import * as actions from './Store/actions';
import { UserReducer } from './Store/reducers';
import './scss/App.scss';

// Instructions:
// To get started head over to https://www.themoviedb.org
// Sign up for an account. Verify it. Then log in.
// Head to https://developers.themoviedb.org/3/getting-started/introduction
// and await further instructions.

// “Don’t call Hooks inside loops, conditions, or nested functions.
// Instead, always use Hooks at the top level of your React function.
// By following this rule, you ensure that Hooks are called in the same order each time a component renders.
// That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.”
// In other words, you can only call a Hook at the top level of a React function, not a regular JavaScript function.

const App = () => {
  const { currentTheme, toggle, dark, light } = useContext(ThemeContext);
  const theme = currentTheme ? dark : light;
  const { userTheme, dispatch } = useContext(UserReducer);
  return (
    <div className="app" style={{ backgroundColor: theme.bg }}>
      <nav style={{ background: theme.navColor, color: theme.textColor }}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Movies</li>
          <li>Contact</li>
          <button
            onClick={() => {
              toggle(!currentTheme);
              dispatch({
                type: actions.SAVE_USERDATA,
                data: currentTheme ? light : dark
              });
            }}
          />
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
