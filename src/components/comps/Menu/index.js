import React, { useState } from 'react';
import { 
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBNavItem, 
  MDBNavLink,
  MDBFormInline,
  MDBContainer,
} from 'mdbreact';
import actions from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const Menu = ({ block }) => {

  const [collapse, setCollapse] = useState(false)
  const [isWideEnough, setIsWideEnough] = useState(false)
  const dispatch = useDispatch()

  const onClick = () => {
    setCollapse(!collapse)
  }

  const searchRepacks = e => {
    if(e.keyCode != '13')
      return

    e.preventDefault()
    return actions.getRepacks(dispatch, e.target.value)
  }

  return (
    <MDBNavbar color="secondary-color" fixed="top" dark expand="md" scrolling transparent={!block}>
      <MDBContainer>
      <MDBNavbarBrand href="/">
        <strong>Repacks</strong>
      </MDBNavbarBrand>
      {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
      <MDBCollapse isOpen={collapse} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onKeyDown={searchRepacks} />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <MDBNavLink to="/">All games</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Menu;