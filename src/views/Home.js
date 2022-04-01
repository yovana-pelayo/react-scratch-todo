import React, { useState } from 'react';
import { signInUser, signupUser } from '../services/users';
export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('sign-in');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'sign-in') {
      const resp = await signInUser(email, password);
    } else {
      const resp = await signupUser(email, password);
    }
  };
  return (
    <div>
      <h1>
        <span className={type === 'sign-in' ? 'active' : ''} onClick={() => setType('sign-in')}>
          Sign In
        </span>
        <span className={type === 'sign-up' ? 'active' : ''} nClick={() => setType('sign-up')}>
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
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="">Enter</button>
      </form>
    </div>
  );
}
