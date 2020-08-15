import React from 'react'
import DownloadLink from './DownloadLink'
import OpenLink from './OpenLink'

const Overlay = ({ id, file }) => {
  return (
    <div className="bg-overlay">
      <div className="bg-overlay-content dark" data-hover-animate="fadeIn">
        <DownloadLink file={file} />
        <OpenLink id={id} />
      </div>
      <div className="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
    </div>
  )
}

export default Overlay