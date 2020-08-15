import React, { useEffect } from 'react'
import Header from '../Utils/Header'
import Description from './Description'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../redux/actions'

const SingleProduct = ({ id }) => {
  const dispatch = useDispatch()
  const repack = useSelector(state => state.app.repack)

  useEffect(() => {
    actions.getRepack(id, dispatch)
  }, [])

  return <>
          <Header title={repack.title} />
          <Description {...repack} />
        </>
}
    
export default SingleProduct