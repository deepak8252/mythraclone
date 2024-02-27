import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../util/constant';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbars = () => {
  const cartproduct=useSelector((state)=>state.cart.cartitem)
  return (
    <div className='bg-white shadow-lg sticky top-0 z-30 '>
    
      <Navbar expand="lg" className="capitalize font-sans font-semibold">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ width: '50px' }} />
          </Navbar.Brand>
         
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className='capitalize font-sans font-semibold px-3 ' as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link className='capitalize font-sans font-semibold pr-3 ' as={NavLink} to="/men" >mens</Nav.Link>
              <Nav.Link className='capitalize font-sans font-semibold pr-3 ' as={NavLink} to="/women" >womens</Nav.Link>
              <Nav.Link className='capitalize font-sans font-semibold pr-3 ' as={NavLink} to="/kids" >kidss</Nav.Link>
              <Nav.Link className='capitalize font-sans font-semibold pr-3 ' as={NavLink} to="/homeliving" >mens</Nav.Link>
               <div className='flex items-center ml-4'>
                <input type="text" placeholder='search item ' className='border p-2 rounded-lg'/>
               </div>
            </Nav>
          </Navbar.Collapse>
         <div className='flex gap-10 capitalize font-sans font-semibold'>
         <Nav.Link as={NavLink} to="/men" >profile</Nav.Link>
          <Nav.Link as={NavLink} to="/men" >wishlist</Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
      Cart: {cartproduct.length}
    </Nav.Link>
         </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars