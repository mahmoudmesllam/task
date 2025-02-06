import React from "react";
import './section.css'
import Nav from 'react-bootstrap/Nav';


function AlignmentExample() {
  return (
    <>
    <div className="container">
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="link">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Kides</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-2">Baby</Nav.Link>
        </Nav.Item>
      </Nav>
    <div className="item">
    <div class="sec2-info5">
                
        </div>
        <div class="sec2-info5">
                
        </div>
        <div class="sec2-info5">
                
        </div>
        <div class="sec2-info5">
                
        </div>
      </div>
    </div>
    </>
  );
}

export default AlignmentExample;