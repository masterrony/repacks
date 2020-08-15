import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'
import actions from '../../../redux/actions'

const Products = () => {
  const dispatch = useDispatch()
  const repacks = useSelector(state => state.app.repacks)

  useEffect(() => {
    actions.getRepacks(dispatch)
  }, [])

  const renderRepacks = () => {
    if(!repacks || repacks.length <= 0)
      return
    
    return repacks.map(repack => <Item key={repack._id} {...repack}/>)
  }

  return (
    <section id="content">
      <div className="content-wrap">
        <div className="container clearfix">
          <div id="portfolio" className="portfolio row grid-container gutter-10 desc-sm" data-layout="fitRows">
            {renderRepacks()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products