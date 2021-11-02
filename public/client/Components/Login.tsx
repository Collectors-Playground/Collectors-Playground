import React, { useState } from 'react';
import '../scss/LoginPage.scss';
import { LoginProps } from '../../Types/interfaces';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  UPDATE_USERNAME,
  POPULATE_PORTFOLIO,
  UPDATE_BALANCE,
  POPULATE_LEADERBOARD,
} from '../constants/actionTypes';

function Login(props: LoginProps) {
  const {
    updateUsernameDispatch,
    updatePortfolioListDispatch,
    updateBalanceDispatch,
    populateLeaderboardDispatch,
  } = props;
  const [username, setUsername]: [string, (value: string) => void] =
    useState('');
  const [password, setPassword]: [string, (value: string) => void] =
    useState('');
  const history = useHistory();

  const userLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // fetch('/api/userLogin', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response: Response) => response.json())
    //   .then((results) => {
    //     usernameDispatch(username);
    //   });
    updateUsernameDispatch(username);
    history.replace('/dashboard');
  };

  const userSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/userSignUp', {
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
          <input
            type="submit"
            value="Sign Up"
            id="signUpButton"
            onClick={userSignUp}
          />
        </div>
      </form>
    </div>
  );
}

export default connect(null, (dispatch) => ({
  updateUsernameDispatch: (username: string) =>
    dispatch({ type: UPDATE_USERNAME, payload: username }),
  updatePortfolioListDispatch: (portfolioList: string) =>
    dispatch({ type: POPULATE_PORTFOLIO, payload: portfolioList }),
  updateBalanceDispatch: (balance: number) =>
    dispatch({ type: UPDATE_BALANCE, payload: balance }),
  populateLeaderboardDispatch: (leaderboard: string) =>
    dispatch({ type: POPULATE_LEADERBOARD, payload: leaderboard }),
}))(Login);
