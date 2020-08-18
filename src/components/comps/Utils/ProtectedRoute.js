import React, { useEffect, Component } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'



const ProtectedRoute = ({ path, component: Component }) => {
  const authenticated = useSelector(state => state.app.authenticated)

  if(!authenticated)
    return <Redirect to='/signin' />

  return <Component />
}

export default ProtectedRoute