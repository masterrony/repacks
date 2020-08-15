import React from 'react'
import Logo from './Logo'
import SearchTrigger from './Triggers/SearchTrigger'
import MenuTrigger from './Triggers/MenuTrigger'
import MenuBar from './MenuBar'
import SearchForm from './SearchForm'



const Menu = () => {
  return (
    <header id="header">
      <div id="header-wrap">
        <div className="container">
          <div className="header-row">
            <Logo />
            <SearchTrigger />
            <MenuTrigger />
            <MenuBar />
            <SearchForm />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menu