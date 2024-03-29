import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { logo } from '../util/constant';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { brand } from '../util/Hero';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Navbars = () => {
  const navigate=useNavigate()
  const [search,setSearch]=useState("");
 
  console.log(search)
  const cartproduct=useSelector((state)=>state.cart.cartitem);
  const handleSearch=(e)=>{
  e.preventDefault();
navigate(`/search/${search}`);
setSearch("")
  }
  return (
    <div className='bg-teal-500 shadow-lg sticky top-0 z-30 '>
    
      <Navbar expand="lg" className="capitalize font-sans font-semibold">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light' />
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ width: '50px' }} />
          </Navbar.Brand>
         
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className='capitalize text-light active font-sans font-semibold px-3 ' as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link className='capitalize text-light font-sans font-semibold pr-3 ' as={NavLink} to="/men" >mens</Nav.Link>
              <Nav.Link className='capitalize text-light font-sans font-semibold pr-3 ' as={NavLink} to="/women" >womens</Nav.Link>
              <Nav.Link className='capitalize text-light font-sans font-semibold pr-3 ' as={NavLink} to="/kids" >kidss</Nav.Link>
              <Nav.Link className='capitalize text-light font-sans font-semibold pr-3 ' as={NavLink} to="/homeliving" >mens</Nav.Link>
               <form className='flex items-center ml-4' onSubmit={handleSearch}>
                <input type="text" placeholder='search item ' className='border p-2 rounded-lg' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} />
               </form>
            </Nav>
          </Navbar.Collapse>
         <div className='flex gap-10 capitalize font-sans font-semibold'>
         <Nav.Link as={NavLink} to="/men" className='text-light' >
          <AccountBoxIcon/>
         </Nav.Link>
          <Nav.Link as={NavLink} to="/men" >
            <FavoriteBorderIcon className='text-light'/>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
          <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartproduct.length} className='text-light' color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton> 
    </Nav.Link>
         </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars