import React from 'react'
import Menu from '../comps/Menu'
import Products from '../comps/Products'
import { useSelector } from 'react-redux';
import Hero from '../comps/Utils/Hero';

const Home = () => {
  return <>
    <div>
      <header>
        <Menu />
        <Hero />
      </header>
    </div>
    <Products />
  </>
}

export default Home