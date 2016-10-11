import React from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import Login from '../components/Login';
import Posts from '../components/Posts';

function checkIfUserLoggedIn({ location: { pathname }}, replace) {
  let username;
  if (typeof localStorage['ReactTabularApp:username'] !== 'undefined') {
    username = JSON.parse(localStorage['ReactTabularApp:username']);
  }
  if ((pathname === '/' || pathname === '/posts') && !username) {
    replace('/login');
  }
}

export default (
  <Route path="/" component={App} onEnter={checkIfUserLoggedIn}>
    <Route path="login" component={Login} />
    <Route path="posts" component={Posts} onEnter={checkIfUserLoggedIn} />
  </Route>
);
