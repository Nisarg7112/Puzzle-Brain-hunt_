import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      {auth.userLoggedIn && (
        <li>
          <NavLink to={`/games/${auth.userId}`}>Start Game</NavLink>
        </li>
      )}
      {auth.userLoggedIn && (
        <li>
          <NavLink to={`/stats/${auth.userId}`}>My Stats</NavLink>
        </li>
      )}
      {auth.userLoggedIn && (
        <li>
          <NavLink to="/rules">Rules</NavLink>
        </li>
      )}
      {!auth.userLoggedIn && !auth.adminLoggedIn && (
        <li>
          <NavLink to="/user">USER</NavLink>
        </li>
      )}
      {!auth.userLoggedIn && !auth.adminLoggedIn && (
        <li>
          <NavLink to="/admin">ADMIN</NavLink>
        </li>
      )}
      {auth.adminLoggedIn && (
        <li>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </li>
      )}

      {auth.userLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
      {auth.adminLoggedIn && (
        <li>
          <button onClick={auth.adminlogout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
