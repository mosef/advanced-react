import React, { useState, createContext } from 'react';

const ThemeContext = createContext();
const ThemeContextProvider = props => {
  const dark = {
    bg: '#313131',
    textColor: 'white',
    cardBg: '#53354a',
    cardText: 'white',
    navColor: '#ec625f'
  };
  const light = {
    bg: '#f6f5f5',
    textColor: 'black',
    cardBg: '#e9e4e6',
    cardText: 'black',
    navColor: '#3bb4c1'
  };
  const [darkEnabled, setDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: darkEnabled,
        toggle: setDarkTheme,
        dark: dark,
        light: light
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
