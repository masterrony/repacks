import React from 'react'
import { Link } from 'react-router-dom'

const OpenLink = ({ id }) => {
  return (
      <Link to={`product/${id}`} 
        className="overlay-trigger-icon bg-light text-dark" 
        data-hover-animate="fadeInDownSmall" 
        data-hover-animate-out="fadeOutUpSmall" 
        data-hover-speed="350"
      >
        <i className="icon-line-ellipsis"></i>
      </Link>
  )
}

export default OpenLink