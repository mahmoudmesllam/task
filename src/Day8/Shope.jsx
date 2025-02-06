import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import './section.css'
function ColorSchemesExample() {
  return (
    <div className="div1">
        <div className="logo">
            <h2><span>E</span>-Shope</h2>
        </div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontSize:"20px", marginLeft:"20px",marginRight:"20px"}}>Home</Nav.Link>
            <Nav.Link href="#home" style={{fontSize:"20px", marginRight:"20px",marginLeft:"20px"}}>Product</Nav.Link>
            <Nav.Link href="#features" style={{fontSize:"20px", marginLeft:"20px",marginRight:"20px"}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{fontSize:"20px" , marginLeft:"20px",marginRight:"20px"}}>Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="icon">
        <div className="search">
        <CiSearch />
        </div>
        <div className="heart">
        <FaHeart />
        </div>
        <div className="cart">
        <CiShoppingCart />
        </div>
        </div>
    </div>
  );
}

export default ColorSchemesExample;