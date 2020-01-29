import { createContext } from 'react';
const UserContext = createContext({
  currentUser: localStorage.getItem('user-theme')
    ? JSON.parse(localStorage.getItem('user-theme'))
    : {}
});
export default UserContext;
