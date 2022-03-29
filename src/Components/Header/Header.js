import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
    <Navbar className='top-header' fixed='top'>
        <Container fluid>
            <Navbar.Brand ><Link to="/notification"><img src='images/event.gif' alt='notify'></img></Link><span className='offer-text'>Check Offers click <Link to="/notification"><b>Here</b></Link></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto mb-2 mb-lg-0 ">
                <Nav.Link href="#home"><i className="fab fa-whatsapp"/>&nbsp;+91 9891116408</Nav.Link>
                <Nav.Link href="#link"><i className="fas fa-phone-alt"/>&nbsp;+91 9891116408</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header