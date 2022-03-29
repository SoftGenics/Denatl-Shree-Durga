import React,{useState} from 'react'
import { Navbar, Nav, Container, Button,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css'
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [size, setsize] = useState(false)
  const changeSize = () => {
      if(window.scrollY >= 90) {
          setsize(true)
      } else {
          setsize(false)
      }
  }
  window.addEventListener("scroll", changeSize)
  return (
        <>
            <Navbar collapseOnSelect expand="lg"  className='top-navbar' fixed='top'>
            <Container fluid>
            <Navbar.Brand className={size ? "top-navbar-logo img top-navbar-logo-size img" : "top-navbar-logo img"}><Link to="/"><img src='images/logo4.png' alt='navbar logo'/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'white',transform:'Scale(1.3)'}}/></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto mb-2 mb-lg-0 top-navbar-links">
                <Nav.Link as={Link} to="/"  eventKey={2}  onClick={closeMobileMenu}><i className="fas fa-home" />&nbsp;HOME</Nav.Link>
                <Nav.Link as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>GENERAL DENTISTRY</Nav.Link>
                <Nav.Link as={Link} to="/cosmetic"  eventKey={2}  >COSMETIC DENTISTRY</Nav.Link>
                <Nav.Link as={Link} to="/"  eventKey={2} onClick={closeMobileMenu} >SURGICAL DENTISTRY</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown" >onClick={closeMobileMenu}
                <NavDropdown.Item href="#doctor"  eventKey={2} >About Doctors</NavDropdown.Item>
                <NavDropdown.Item href="#about"  eventKey={2} >About Clinic</NavDropdown.Item>
                <NavDropdown.Item ><Link to='/photo-gallery'  eventKey={2} >Photo Gallery</Link></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/video-gallery' eventKey={2} >Video Gallery</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/book-now"  eventKey={2} onClick={closeMobileMenu}><button type="button" className="booknowbtn"style={{backgroundColor:'FE2AA2'}}>BOOK NOW</button></Nav.Link>
  
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
  )
}

export default NavBar;