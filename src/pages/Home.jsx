import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Service from '../services/Service';
import ProductList from '../productMaterial/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../productMaterial/Clock';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(() => {
        AOS.init({ duration: 950 });
        const filteredTrendingProducts = products.filter(
            (item) => item.category === 'chair'
        );
        const filteredBestSalesProducts = products.filter(
            (item) => item.category === 'sofa'
        );
        const filteredMobileProducts = products.filter(
            (item) => item.category === 'mobile'
        );
        const filteredWirelessProducts = products.filter(
            (item) => item.category === 'wireless'
        );
        setTrendingProducts(filteredTrendingProducts)
        setBestSalesProducts(filteredBestSalesProducts)
        setMobileProducts(filteredMobileProducts)
        setWirelessProducts(filteredWirelessProducts)
    }, [])

    return (

        <>
            <Helmet title={'Home'}>

                <section className="hero_section">
                    <Container>
                        <Row>

                            <Col lg='6' md='6'>


                                <div data-aos="fade-right" data-aos-delay="300" className="hero_content">
                                    <p className="hero_subtitle">
                                        Trending product in {year}
                                    </p>
                                    <h2>Make Your Interior More Minimalistic & Modern</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi vitae. Unde ullam molestiae pariatur exercitationem rerum delectus recusandae, doloremque culpa. Eligendi dolorem vitae minima in porro ut consectetur odit?</p>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                                        <Link to='/shop'>SHOP NOW</Link>
                                    </motion.button>
                                </div>
                            </Col>
                            <Col log='6' md='6'>

                                <div data-aos="zoom-in" data-aos-delay="300" className="hero_img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Service />
                <section className="trending_products">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 data-aos="zoom-in" data-aos-delay="300" className="section_title">
                                    Trending Products
                                </h2>
                            </Col>
                            <ProductList data={trendingProducts} />
                        </Row>
                    </Container>
                </section>
                <section className="best_sales">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 data-aos="zoom-in" data-aos-delay="300" className="section_title">
                                    Best Sales
                                </h2>
                            </Col>

                            <ProductList data={bestSalesProducts} />
                        </Row>
                    </Container>
                </section>

                <section className="timer_count">


                    <Container>

                        <Row>
                            <Col data-aos="fade-right" data-aos-delay="300" lg='6' md='6'>
                                <div className="clock_top-content">
                                    <h4 className="text-white fs-6 mb-2">Limited offer</h4>
                                    <h3 className="text-white fs-5 mb-3">Limited offer</h3>
                                </div>
                                <Clock />

                                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                                    <Link to='/shop'>Vist Store</Link>
                                </motion.button>
                            </Col>
                            <Col lg='6' md='6' className='text-end'>
                                <img data-aos="fade-left" data-aos-delay="300" src={counterImg} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='new_arrivals'>

                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className="section_title">
                                    New Arrivals
                                </h2>
                            </Col>
                    
                            <ProductList data={mobileProducts} />
                    
                            <ProductList data={wirelessProducts} />
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}


export default Home;