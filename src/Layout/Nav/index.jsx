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
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Men" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
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
    </Navbar>

    
    </>
  )
}
