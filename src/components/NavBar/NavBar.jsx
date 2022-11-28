import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () =>  {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"> E C </Navbar.Brand>
                <CartWidget numero='(1)' />   
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Box Temáticas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Box Happy
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Accesorios Festejos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Sale
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Info</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>                    
            </Container>
        </Navbar>
    );
}

export default NavBar;

//<Navbar.Brand href="#home">
//<img
//  src="/logo.svg"
//  width="30"
//  height="30"
//  className="d-inline-block align-top"
//  alt="React Bootstrap logo"
///>
//</Navbar.Brand>