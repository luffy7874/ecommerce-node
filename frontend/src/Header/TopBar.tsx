import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function TopBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='pb-0'>
        <Container className='d-block border-bottom'>
            <Row>
                <Col md={6} sm={12}>
                    <p className='offer-text'>30% off on women’s latest tops</p>
                </Col>
                <Col md={6} sm={12}>
                    <div className="social-media float-end">
                        <a href="#" className='facebook'><FaFacebookF /></a>
                        <a href="#" className='instagram'><FaInstagram /></a>
                        <a href="#" className='twitter'><FaTwitter /></a>
                        <a href="#" className='linkedin'><FaLinkedin /></a>
                    </div>
                </Col>
            </Row>            
        </Container>
    </Navbar>
  );
}

export default TopBar;