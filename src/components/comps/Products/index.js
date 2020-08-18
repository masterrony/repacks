import React, { useEffect } from 'react'
import {
  MDBContainer,
  MDBRow
} from 'mdbreact'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'
import Notify from "../Utils/Notify";
import actions from '../../../redux/actions'

const Products = () => {
  const dispatch = useDispatch()
  const repacks = useSelector(state => state.app.repacks)
  const searchMode = useSelector(state => state.app.searchMode)

  useEffect(() => {
    actions.getRepacks(dispatch)
  }, [])

  const renderRepacks = () => {
    if(!repacks)
      return (
        <>
        <Item />
        <Item />
        <Item />
        <Item />
        </>
      )

    if(repacks.length < 1)
      return <Notify 
        type='info'
        message='No games to display'
      />
    
    return repacks.map(repack => <Item key={repack._id} {...repack}/>)
  }

  return (
    <MDBContainer>
      <section className={`text-center my-5 ${!!searchMode && 'py-3'}`}>
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