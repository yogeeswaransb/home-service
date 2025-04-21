import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Sign.css';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSignIn} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
                minLength="5"
                maxLength="10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">
              Sign in
            </button>
            <p className="text-center">
              <a href="/signup" className="link-primary">
                Don't have an account? Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
