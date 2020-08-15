import React from 'react'

const Header = ({ title, detail }) => 
  <section id="page-title">

    <div className="container clearfix">
      <h1>{title}</h1>
      <span>{detail}</span>
    </div>

  </section>

export default Header