import React from 'react'
import { useSelector } from 'react-redux'

const DownloadLink = ({ file }) => {
  const downloadUrl = useSelector(state => state.app.downloadUrl)

  return (
    <a href={`${downloadUrl}${file}`} 
      className="overlay-trigger-icon bg-light text-dark" 
      data-hover-animate="fadeInDownSmall" 
      data-hover-animate-out="fadeOutUpSmall" 
      data-hover-speed="350" 
      title="download"
    >
      <i className="icon-download"></i>
    </a>
  )
}

export default DownloadLink