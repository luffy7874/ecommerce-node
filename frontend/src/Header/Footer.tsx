import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCopyright } from "react-icons/fa";

const Footer: React.FC = () =>{
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={3} xs={12}>
                        <img src="/assets/images/logo.png" width="30%" className="mb-2" alt="" />
                        <p>Quis nostrud exercitatin ullamc boris nisi ut aliquip ex ea commodo coetur adipisici ng elit, sed do eiusmod tempor</p>
                        <div className="footer-social-media">
                            <a href="#" className='facebook'><FaFacebookF /></a>
                            <a href="#" className='instagram'><FaInstagram /></a>
                            <a href="#" className='twitter'><FaTwitter /></a>
                            <a href="#" className='linkedin'><FaLinkedin /></a>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="left-spacing address">
                        <h4 className="mb-4">Address</h4>
                        <Row>
                            <Col md={1} xs={1}><FaMapMarkerAlt /></Col>
                            <Col md={8} xs={10}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="fs-15">20, Awesome Road, New York, Usa 4D BS3</a>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={1} xs={1}><FaPhoneAlt /></Col>
                            <Col md={8} xs={10}>
                                <a href="tel:+123 456 7890" className="fs-15">+123 456 7890</a>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={1} xs={1}><FaEnvelope /></Col>
                            <Col md={8} xs={10}>
                                <a href="mailto:info@nofaceitsolution.in" className="fs-15">info@nofaceitsolution.in</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} xs={6} className="left-spacing">
                        <h4 className="mb-4">Useful Links</h4>
                        <ul className="useful-links">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Faqs</a>
                            </li>
                            <li>
                                <a href="#">Team & conditions</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} xs={6} className="left-spacing">
                        <h4 className="mb-4">Categories</h4>
                        <ul className="useful-links">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Faqs</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className="bottom-footer border-top pt-5">
                    <Row>
                        <Col md={6} xs={12}>
                            <p className="copyright">All rights reserved &nbsp; <b>Ulina</b> &nbsp; <FaCopyright /> &nbsp; 2022</p>
                        </Col>
                        <Col md={6}>
                            <div className="company-links">
                                <a href="#">Terms & Condition</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Legal</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;