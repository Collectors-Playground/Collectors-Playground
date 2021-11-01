import React, { useState } from 'react';
import '../scss/LoginPage.scss';

function Login() {
  const [username, setUsername]: [string, (value: string) => void] =
    useState('');
  const [password, setPassword]: [string, (value: string) => void] =
    useState('');
  const userLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/userLogin', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  return (
    <div className="loginWrapper">
      <form>
        <div className="usernamePasswordDiv">
          <input
            placeholder="username"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          ></input>

          <input
            placeholder="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div className="buttonsDiv">
          <input
            type="submit"
            value="Log in"
            id="loginBtn"
            onClick={userLogin}
          />
          <input type="submit" value="Sign Up" id="signUpButton" />
        </div>
      </form>
    </div>
  );
}

export default Login;
