import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import CommonSection from '../productMaterial/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'



const Checkout = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const totalAmount = useSelector((state) => state.cart.totalAmount);


    return (

        <Helmet title="Checkout">
            <Header />
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className='mb-4 fw-bold'>Billing Information</h6>
                            <Form className='billing_form w-100'>
                                <FormGroup className='form_group'>
                                    <input type="text" placeholder='Enter Your Name' />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input type="email" placeholder='Enter Your Email' />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input type="number" placeholder='Enter Your Number' />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input type="text" placeholder='Street Address' />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input type="text" placeholder='City' />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input type="text" placeholder='Postal Code' />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input type="text" placeholder='Country' />
                                </FormGroup>

                            </Form>


                        </Col>
                        <Col lg="4">
                            <div className="checkout_cart">

                                <h6>Total Qty : <span>{totalQuantity}</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6><span>Shipping : <br /> Free Shipping</span> <span>$0</span></h6>
                                {/* <h6>Free Shipping</h6> */}
                                <h4>Total cost : <span>${totalAmount}</span></h4>
                                <button className='buy_btn auth_btn w-100'>
                                    Place an Order
                                </button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <Footer />
       
        </Helmet>
    )
}

export default Checkout;