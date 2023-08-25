import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../productMaterial/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { cartActions } from '../redux/slices/cartSlices'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (

        <Helmet title="Cart">
            <Header />

            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? <h2 className='fs-4 text-center'>No item added to the cart</h2> :
                                    <table className='table bordered'>


                                        <thead>

                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                            }
                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>
                                    Subtotal
                                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                                </h6>
                            </div>
                            <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>

                            <div>
                                <button className="buy_btn w-100">
                                    <Link to='/checkout '>
                                        Checkout
                                    </Link>
                                </button>
                                <button className="buy_btn w-100 mt-3">
                                    <Link to='/shop'>
                                        Continue Shopping
                                    </Link>
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

const Tr = ({ item }) => {

    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return <tr>
        <td>
            <img src={item.imgUrl} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>{item.price}</td>
        <td>{item.quantity}pcs</td>
        <td><motion.i whileTap={{ scale: 1.2 }} className="ri-delete-bin-line" onClick={deleteProduct}></motion.i></td>
    </tr>

}
export default Cart;