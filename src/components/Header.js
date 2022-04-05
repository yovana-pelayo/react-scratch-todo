import React from 'react';

export default function Header({ currentUser, handleLogout }) {
  return (
    <header>
      <h2>Todos List!</h2>
      {currentUser && (
        <div className="link" onClick={handleLogout}>
          logout
        </div>
      )}
    </header>
  );
}
