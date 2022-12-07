import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link , NavLink} from 'react-router-dom';

const NavBar = () =>  {
    return (
        <Navbar expand="lg">
            <Container>
                <Link className='btn btn-outline-success' to='/'> E C </Link>
                <Link to='/cart'>
                    <CartWidget numero='(1)' />   
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to= '/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to= '/'>Nosotros</Link>
                        </Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item /*href="#action/3.1"*/>
                                <NavLink to="/category/Box Temática">Box Temáticas</NavLink> 
                            </NavDropdown.Item>
                            <NavDropdown.Item /*href="#action/3.2"*/>
                                <NavLink to="/category/Box Happy">Box Happy</NavLink> 
                            </NavDropdown.Item>
                            <NavDropdown.Item /*href="#action/3.3"*/>
                                <NavLink to="/category/Accesorios Festejo">Accesorios Festejos</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item /*href="#action/3.4"*/>
                                Sale
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link to= '/'>Info</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to= '/'>Contacto</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>                    
            </Container>
        </Navbar>
    );
}

export default NavBar;
