import React, { useReducer, createContext } from 'react';

const UserReducer = createContext();
const UserReducerProvider = props => {
  const state = {
    userTheme: {},
    name: '',
    age: '',
    sessionTime: '',
    validToken: '',
    tokenExpiration: ''
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'SAVING_USER_THEME':
        return {
          ...state,
          userTheme: action.data
        };
      case 'LOADING_USER_THEME':
        return {
          ...state,
          userTheme: action.data
        };
      case 'DELETING_USER_THEME':
        return {
          ...state,
          userTheme: action.data
        };

      default:
        return state;
    }
  }
  const [{ userTheme }, dispatch] = useReducer(reducer, state);

  return (
    <UserReducer.Provider
      value={{
        userTheme,
        dispatch
      }}
    >
      {props.children}
    </UserReducer.Provider>
  );
};

export { UserReducer, UserReducerProvider };
