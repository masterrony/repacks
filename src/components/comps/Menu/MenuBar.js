import React from 'react'
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav className="primary-menu">

      <ul className="menu-container">
        <li className="menu-item">
          <Link className="menu-link" to="/"><div>All Products</div></Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="#"><div>Features</div></Link>
        </li>
      </ul>

    </nav>
  )
}

export default MenuBar