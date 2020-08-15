import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import SignIn from './pages/SingIn'
import Dashboard from './pages/Dashboard'


const App = () => {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repack/:id" component={Product} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </>
}

export default App ;