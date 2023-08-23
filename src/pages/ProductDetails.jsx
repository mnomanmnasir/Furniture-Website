import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../productMaterial/CommonSection'
import '../styles/product-details.css'
import { motion } from 'framer-motion'
import ProductList from '../productMaterial/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlices'
import { toast } from 'react-toastify';



const ProductDetails = () => {
    const [tab, setTab] = useState('desc')
    const dispatch = useDispatch();
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const [rating, setRating] = useState(null);
    const { id } = useParams();
    const product = products.find((item) => item.id === id);
    const { imgUrl, productName, price, avgRating, reviews, shortDesc, category, description } = product;

    const relatedProducts = products.filter(item => item.category === category)

    const submitHandler = (e) => {
        e.parentDefault();
        const reviewUserName = reviewUser.current.value

        const reviewUserMsg = reviewMsg.current.value
    }

    const addToCart = () => {
        dispatch (
            cartActions.addItem({
                id,
                image: imgUrl,
                productName,
                price
            })
        )
        toast.success("Product added Succesfully")
    }
    return (

        <Helmet title={productName}>
            <CommonSection title={productName} />
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg="6">
                            <div className="product_details">
                                <h2>{productName}</h2>
                                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                                    <div>
                                        <span onClick={() => setRating(1)}>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={() => setRating(2)}>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={() => setRating(3)}>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={() => setRating(4)}>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={() => setRating(5)}>
                                            <i className="ri-star-half-s-line"></i>
                                        </span>
                                    </div>
                                    <p>(<span>{avgRating}</span>ratings)</p>
                                </div>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product_price'>${price}</span>
                                    <span>Category : {category.toUpperCase()}</span>
                                </div>
                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>
                                    Add to Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="12">

                            <div className="tab_wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? "active_tab" : " "}`}
                                    onClick={() => setTab('desc')}
                                >
                                    Description
                                </h6>
                                <h6 className={`${tab === 'rev' ? "active_tab" : " "}`}
                                    onClick={() => setTab('rev')}
                                >
                                    Reviews ({reviews.length})
                                </h6>
                            </div>

                            {
                                tab === 'desc' ? (
                                    <div className="tab_content mt-5">
                                        <p>{description}</p>
                                    </div>) : (<div className='product_review mt-5'>
                                        <div className="review_wrapper">
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li key={index} className='mb-4'>
                                                            <h6>Noman Nasir</h6>
                                                            <span>{item.rating} ( rating )</span>
                                                            <p>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="review_form">
                                                <h4>Leave Your Experience</h4>
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form_group">

                                                        <input type="text" placeholder='Enter your name' ref={reviewUser} />
                                                    </div>
                                                    <div className="form_group d-flex align-items-center gap-5">
                                                        <span>1<i className="ri-star-s-fill"></i></span>
                                                        <span>2<i className="ri-star-s-fill"></i></span>
                                                        <span>3<i className="ri-star-s-fill"></i></span>
                                                        <span>4<i className="ri-star-s-fill"></i></span>
                                                        <span>5<i className="ri-star-s-fill"></i></span>
                                                    </div>
                                                    <div className="form_group">
                                                        <textarea ref={reviewMsg} rows={4} type="text" placeholder='Review Message ....' />
                                                    </div>
                                                    <button type='submit' className="buy_btn">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </Col>
                        <Col lg='12' className='mt-5'>
                            <h2 className="related_title">
                                You might also like
                            </h2>
                        </Col>
                        <ProductList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails;