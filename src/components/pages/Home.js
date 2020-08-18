import React from 'react'
import Menu from '../comps/Menu'
import Products from '../comps/Products'
import { useSelector } from 'react-redux';
import Hero from '../comps/Utils/Hero';

const Home = () => {
  const searchMode = useSelector(state => state.app.searchMode)

  return <>
    <div>
      <header>
        <Menu block={!!searchMode} />
        { !searchMode && <Hero /> }
      </header>
    </div>
    <Products />
  </>
}

export default Home