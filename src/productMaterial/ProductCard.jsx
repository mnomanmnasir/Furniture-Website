import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProductCard = ({item}) => {



    useEffect(() => {
        AOS.init({ duration: 950 });
    })
    return (
        <Col lg='3' md='4' className='mb-2'>
            <div data-aos="zoom-in" data-aos-delay="300" className="product_item">

                <div className="product_img">
                    <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
                </div>
               <div className="p-2 product_info">
               <h3 className="product_name">
                   <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                </h3>
                <span>{item.category}</span>
               </div>
                <div className="product_card-botton d-flex align-item-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{scale : 1.2}}><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;