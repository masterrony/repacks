import React, { useEffect } from 'react'
import {
  MDBContainer,
  MDBRow
} from 'mdbreact'
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
      return (
        <>
        <Item />
        <Item />
        <Item />
        <Item />
        </>
      )
    
    return repacks.map(repack => <Item key={repack._id} {...repack}/>)
  }

  return (
    <MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h1-responsive font-weight-bold my-5'>Explore all repacked games</h2>
        <p className='grey-text w-responsive mx-auto mb-5'>
          here we have lots of repacked games. please download anything you like
        </p>
        <MDBRow>
          {renderRepacks()}          
        </MDBRow>
      </section>
    </MDBContainer>
  )
}

export default Products