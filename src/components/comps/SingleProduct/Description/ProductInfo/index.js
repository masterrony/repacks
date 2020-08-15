import React from 'react'
import ProductTitle from './ProductTitle'
import InfoList from './InfoList'

const ProductInfo = ({ title, detail, file, date }) => 
  <>
    <ProductTitle 
      title={title}
      detail={detail}
    />
    <div className="line"></div>
    <InfoList 
      file={file}
      date={date}
    />
  </>


export default ProductInfo