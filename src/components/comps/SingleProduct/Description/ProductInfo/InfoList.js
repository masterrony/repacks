import React from 'react'
import { useSelector } from 'react-redux'

const InfoList = ({ date, file }) => {
  const downloadUrl = useSelector(state => state.app.downloadUrl)

  return <ul className="portfolio-meta bottommargin">
        <li><span><i className="icon-calendar3"></i>Repacked on:</span> {date}</li>
        <li><span><i className="icon-link"></i>Download:</span> <a href={`${downloadUrl}${file}`} target="_blank">Click Here</a></li>
      </ul>
}

export default InfoList