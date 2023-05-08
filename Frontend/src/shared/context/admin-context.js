import { createContext } from 'react';

export const AdminContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});
