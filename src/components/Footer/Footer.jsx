import React from 'react'
import './footer.css'
import footerImg from '../../assets/images/eco-logo.png'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

    const year = new Date().getFullYear();
    return (

        <footer className="footer">

            <Container>
                <Row>
                    <Col lg="4" className='mb-4' md='6'>
                        <div className="footerImg">
                            <img src={footerImg} alt="logo" />

                        </div>
                        <p className="footer_text mt-2">

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga animi id dolore mollitia suscipit magni nostrum aperiam a natus numquam, rerum aliquam libero cum nisi. Doloribus numquam ipsa molestiae omnis.
                        </p>
                    </Col>
                    <Col lg='3' md='3' className='mb-4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">
                                Top Categories
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#"> Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#"> Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#"> Arm Chairs</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#"> Smart Watches</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className='mb-4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">
                                Usefull Links
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/shop"> Shop </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/cart"> Cart </Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/login"> Login </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#"> Privacy Policy</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">
                                Contact
                            </h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>Jamshed Road near by Dawood University Karachi.</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-phone-line"></i></span>

                                    <p>+92332XXXXXXX</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>m.noman.m.nasir@gmail.com</p>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className="footer_copyright">
                            Copyright {year} developed by Noman Nasir. All Right reserved
                        </p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;