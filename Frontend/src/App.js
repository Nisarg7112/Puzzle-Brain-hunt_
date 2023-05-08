import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Main from './user/pages/Main';
import User from './user/pages/User';
import Game from './user/pages/Game';
import Admin from './admin/pages/Admin';
import Dashboard from './admin/pages/Dashboard';
import Stat from './user/pages/Stat';
import Rules from './user/pages/Rules';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import { useAdmin } from './shared/hooks/admin-hook';

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const { tokenadmin ,adminlogin ,adminlogout ,adminId } = useAdmin();
  let routes;

  if(tokenadmin){
    routes = (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/admin/dashboard" exact>
          <Dashboard />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  else if(token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/games/:userId" exact>
          <Game />
        </Route>
        <Route path="/stats/:userId" exact>
          <Stat />
        </Route>
        <Route path="/rules" exact>
          <Rules/>
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } 
  else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
      <AuthContext.Provider
        value={{
          userLoggedIn: !!token,
          adminLoggedIn : tokenadmin,
          token: token,
          tokenadmin:tokenadmin,
          userId: userId,
          adminId:adminId,
          login: login,
          adminlogin:adminlogin,
          logout:logout,
          adminlogout:adminlogout
        }}
      >
        <Router>
          <MainNavigation />
          <main>{routes}</main>
        </Router>
      </AuthContext.Provider> 
  );
};

export default App;
