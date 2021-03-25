import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import MainPage from './components/Main/MainPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export default function App() {
   
  return (
      <Switch>
        <PrivateRoute exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
      </Switch>
  );
}

 