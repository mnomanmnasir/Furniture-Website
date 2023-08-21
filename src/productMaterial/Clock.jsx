import React, { useState, useEffect } from 'react'

import '../styles/clock.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    const countDown = () => {
        const destination = new Date('Aug 21, 2024').getTime();
        interval = setInterval(() => {

            const now = new Date().getTime();
            const different = destination - now;
            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(different % (1000 * 60) / 1000);

            if (destination < 0) clearInterval(interval.current)
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        AOS.init({ duration: 950 });
        countDown();
    });


    return (
        <div data-aos="fade-right" data-aos-delay="300" className="clock_wrapper d-flex align-item-center gap-3">

            <div className="clock_data d-flex align-item-center gap-3">
                <div className='text-center'>

                    <h3 className="text-white fs-5 mb-2">{days}</h3>
                    <h5 className="text-white fs-5">Days</h5>
                </div>
                <span className="text-white fs-3">
                    :
                </span>

            </div>
            <div className="clock_data d-flex align-item-center gap-3">
                <div className='text-center'>

                    <h3 className="text-white fs-5 mb-2">{hours}</h3>
                    <h5 className="text-white fs-5">Hours</h5>
                </div>
                <span className="text-white fs-3">
                    :
                </span>

            </div>

            <div className="clock_data d-flex align-item-center gap-3">
                <div className='text-center'>

                    <h3 className="text-white fs-5 mb-2">{minutes}</h3>
                    <h5 className="text-white fs-5">Minutes</h5>
                </div>
                <span className="text-white fs-3">
                    :
                </span>
            </div>
            <div className="clock_data d-flex align-item-center gap-3">
                <div className='text-center'>

                    <h3 className="text-white fs-5 mb-2">{seconds}</h3>
                    <h5 className="text-white fs-5">Seconds</h5>
                </div>
            </div>

        </div>

    )
}

export default Clock;