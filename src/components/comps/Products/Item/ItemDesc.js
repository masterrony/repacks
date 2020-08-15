import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const ItemDesc = ({ _id, title, detail }) => {
  return (
    <div className="portfolio-desc">
      <h3>{ _id ? <Link to={`repack/${_id}`}>{title}</Link> : <Skeleton />}</h3>
      <span>{ detail || <Skeleton /> }</span>
    </div>
  )
}

export default ItemDesc