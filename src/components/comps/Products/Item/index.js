
import React from 'react'
import ItemImage from './ItemImage'
import ItemDesc from './ItemDesc'

const Item = props => {
  return (
    <article className="portfolio-item col-lg-1-5 col-md-4 col-sm-6 col-12 pf-media pf-icons">
      <div className="grid-inner">
        <ItemImage { ...props } />
        <ItemDesc { ...props } />
      </div>
    </article>
  )
}

export default Item