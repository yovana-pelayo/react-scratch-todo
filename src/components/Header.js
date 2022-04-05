import React from 'react';
import { logout } from '../services/users';
import { NavLink } from 'react-router-dom';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>

        {!currentUser && (
          <li>
            <NavLink to="/auth">Sign In</NavLink>
          </li>
        )}
        {currentUser && (
          <li>
            <NavLink exact to="/todos/:id/create">
              Add Dog
            </NavLink>
          </li>
        )}
      </ul>
      {currentUser && (
        <ul>
          <li>{currentUser}</li>
          <li className="link" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      )}
    </div>
  );
}
