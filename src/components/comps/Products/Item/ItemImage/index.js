import React from 'react'
import Overlay from './Overlay'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

const ItemImage = ({ _id, image, file, title }) => {
  const imageUrl = useSelector(state => state.app.imageUrl)

  return (
    <div className="portfolio-image">
      <a href="#">
        {
          image ? <img src={`${imageUrl}${image}`} alt={title} />
            : <Skeleton />
        }
      </a>
      <Overlay 
        id={_id} 
        file={file}  
      />
    </div>
  )
}

export default ItemImage