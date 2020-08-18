import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { verify } from "jsonwebtoken";
import Home from './pages/Home'
import Product from './pages/Product'
import SignIn from './pages/SingIn'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './comps/Utils/ProtectedRoute'
import { AppKey } from '../config'
import types from '../redux/actions/types'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './index.css'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!!token) {
      try {
        if(!!verify(token, AppKey))
          dispatch({ type: types.AUTH_USER })
      } catch (err) {}
    }
  }, [])

  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repack/:id" component={Product} />
        <Route path="/signin" component={SignIn} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </>
}

export default App ;