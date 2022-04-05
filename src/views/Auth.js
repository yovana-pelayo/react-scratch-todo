import React from 'react';
import { useState } from 'react';
import { signInUser, signupUser } from '../services/users';

export default function Auth(items) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !password) return;
    try {
      const user =
        type === 'signin' ? await signInUser(email, password) : await signupUser(email, password);
      items.setCurrentUser(user.email);
    } catch (e) {
      e.message ? setErrorMessage(e.message) : setErrorMessage('Something went wrong. Refresh!');
    }
  };

  return (
    <div>
      <h1>
        <span className={type === 'signin' ? 'active' : ''} onClick={() => setType('signin')}>
          Sign In
        </span>
        <span className={type === 'signup' ? 'active' : ''} onClick={() => setType('signup')}>
          Sign Up
        </span>
      </h1>
      <form className="auth" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input
            type="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Enter</button>
      </form>
    </div>
  );
}
