import React from 'react'
import Menu from '../comps/Menu'
import Products from '../comps/Products'
import Header from '../comps/Utils/Header'


const Home = () => {
  return <>
    <Menu />
    <Header 
      title="All repacks"
      detail="Browse and download all of our repacked games" 
    />
    <Products />
  </>
}

export default Home