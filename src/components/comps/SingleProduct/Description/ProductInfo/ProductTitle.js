import React from 'react'

const ProductTitle = ({ title, detail }) => 
  <>
    <div className="fancy-title title-bottom-border">
      <h2>{title}:</h2>
    </div>
    <p>{detail}</p>
  </>

export default ProductTitle