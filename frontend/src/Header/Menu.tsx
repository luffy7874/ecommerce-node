import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { FaSearch,FaUser, FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {

    return(
        <Navbar bg="white" expand="lg" className="border-bottom pt-3 pb-3" sticky='top'>
            <Container className='d-block'>
                <Row>
                    <Col lg={2} md={12}>
                        <Navbar.Brand href="#">
                            <img src="/assets/images/logo.png" width="100%" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='float-end' />
                    </Col>

                    <Col lg={10} md={12}>
                        <Navbar.Offcanvas>
                            <Offcanvas.Header closeButton /> 
                            <Offcanvas.Body className='d-inline'>
                                <Row>
                                    <Col md={9}>
                                        <Nav className="d-flex justify-content-between align-items-center flex-grow-1 mt-2 w-100 ps-5 pe-5">
                                    
                                            <Nav>
                                                <Link to="/" className='menu-links'>Home</Link>
                                            </Nav>
                                            <Nav.Link href="#action1" className='menu-links'>Offers</Nav.Link>
                                            <Nav.Link href="#action1" className='menu-links'>About</Nav.Link>
                                            <Nav>
                                                <Link to="/products" className='menu-links'>Shop</Link>
                                            </Nav>
                                            <Nav.Link href="#action1" className='menu-links'>Blog</Nav.Link>
                                            <Nav.Link href="#action1" className='menu-links'>Contact Us</Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col md={3}>
                                        <Nav className="d-flex justify-content-between flex-grow-1 ms-5 mt-2">
                                            <Nav.Link href="#action1" className='text-center menubar-icons'>
                                                <FaSearch />
                                            </Nav.Link>
                                            <Nav.Link href="#action1" className='text-center ps-3 menubar-icons'>
                                                <FaUser />
                                            </Nav.Link>
                                            <Nav.Link href="#action1" className='text-center ps-3 menubar-icons'>
                                                <FaShoppingCart />
                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Menu;