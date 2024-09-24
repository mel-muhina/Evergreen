import { Outlet, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from '../../assets/cart.svg'
import person from '../../assets/person.svg'
import search from '../../assets/search.svg'
import './Nav.css'

export default function Navigation() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="custom-container">
      <Navbar.Brand href="#" className='nav-title'>Evergreen</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Women" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#tops">Tops</NavDropdown.Item>
            <NavDropdown.Item href="#dresses">Dresses</NavDropdown.Item>
            <NavDropdown.Item href="#activewear">Bottoms</NavDropdown.Item>
            <NavDropdown.Item href="#outerwear">Outerwear</NavDropdown.Item>
            <NavDropdown.Item href="#accessories">Accessories</NavDropdown.Item>

            </NavDropdown>


            <NavDropdown title="Men" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#shirts">Tops</NavDropdown.Item>
            <NavDropdown.Item href="#jeans">Bottoms</NavDropdown.Item>
            <NavDropdown.Item href="#footwear">Footwear</NavDropdown.Item>
            <NavDropdown.Item href="#jackets">Outwear</NavDropdown.Item>
            <NavDropdown.Item href="#watches">Accessories</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Stories</Nav.Link>
          
         
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            <img src={search} className='nav-icon' alt="Logo" width="20" />
            <img src={person} className='nav-icon' alt="Logo" width="25" />
            <img src={cart} className='nav-icon' alt="Logo" width="20" />
          </Form>
       
        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>

    
    </>
  )
}
