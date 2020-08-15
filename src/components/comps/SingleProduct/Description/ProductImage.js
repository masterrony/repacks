import React from 'react'
import { useSelector } from 'react-redux'

const ProductImage = ({ image }) => {
  const imageUrl = useSelector(state => state.app.imageUrl)

  return <div className="col-lg-8 portfolio-single-image">
          <a href="#"><img src={`${imageUrl}${image}`} alt="Image" /></a>
        </div>
}

export default ProductImage