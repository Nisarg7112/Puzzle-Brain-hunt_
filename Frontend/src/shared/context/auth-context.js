import { createContext } from 'react';

export const AuthContext = createContext({
  userLoggedIn: false,
  adminLoggedIn:false,
  userId: null,
  adminId:null,
  token: null,
  tokenadmin:null,
  login: () => {},
  logout: () => {},
  adminlogin: () =>{},
  adminlogout: () => {}
});
