import React from 'react';
import { useState } from 'react';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('sign-in');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <h1>
        {error && <p>{error}</p>}

        <span className={type === 'sign-in' ? 'active' : ''} onClick={() => setType('sign-in')}>
          Sign In
        </span>
        <span className={type === 'sign-up' ? 'active' : ''} onClick={() => setType('sign-up')}>
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
