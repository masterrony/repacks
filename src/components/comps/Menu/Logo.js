import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Logo = () => {
  const serverUrl = useSelector(state => state.app.serverUrl)

  return (
    <div id="logo">
      <Link to="/" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src={`${serverUrl}assets/images/logo.png`} alt="Canvas Logo" /></Link>
      <Link to="/" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src={`${serverUrl}/assets/images/logo@2x.png`} alt="Canvas Logo" /></Link>
    </div>
  )
}

export default Logo