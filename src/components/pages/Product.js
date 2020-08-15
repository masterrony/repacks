import React from 'react'
import Menu from '../comps/Menu'
import SingleProduct from '../comps/SingleProduct'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return <>
    <Menu />
    <SingleProduct id={id} />
  </>
}

export default Product