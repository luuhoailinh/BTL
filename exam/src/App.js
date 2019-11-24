import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'
import Register from './components/Register';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from './components/mainpage/HomePage';

function App() {
  let message = "abc";
  return (
    <Router>
      <Route path='/signin'>
        <Register></Register>
      </Route>

      <Route path='/home'>
        <HomePage></HomePage>
      </Route>

      <Redirect exact from="/" to="/signin" />
    </Router>
  );
}

export default App;