import React from 'react'


const SearchForm = () => {
  return (
    <form className="top-search-form" action="" method="get">
      <input type="text" name="q" className="form-control" placeholder="Type &amp; Hit Enter.." autoComplete="off" defaultValue="" />
    </form>
  )
}

export default SearchForm