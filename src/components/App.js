import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import SignIn from './pages/SingIn'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './comps/Utils/ProtectedRoute'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './index.css'



const App = () => {
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