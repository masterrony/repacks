import React from 'react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

const Header = ({ title, detail, image, file, date }) => 
  <section id="content">
    <div className="content-wrap">
      <div className="container clearfix">
        <div className="row">
          <ProductImage image={image} />
          <ProductInfo 
            title={title}
            detail={detail}
            file={file}
            date={date}
          />
        </div>
      </div>
    </div>
  </section>


export default Header