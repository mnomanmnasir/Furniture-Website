import React, { useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'
import serviceData from '../assets/data/serviceData'
import { motion } from 'framer-motion'
import './service.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Service = () => {


    useEffect(() => {
        AOS.init({ duration: 950 });
    })


    return (

        <section className="service">

            <Container>

                <Row>
                    {
                        serviceData.map((item, index) => (

                            <Col lg='3' md='4' key={index}>
                                <motion.div whileHover={{scale: 1.1}} data-aos="flip-up" className="service_item" style={{background: `${item.bg}`}}>

                                    <span data-aos="flip-up" data-aos-delay="800"><i class={item.icon}></i></span>

                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </motion.div>

                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Service;