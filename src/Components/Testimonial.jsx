import React, {useState} from 'react';
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import testimonials from '../TestimonialData/TestimonialData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import './Testimonial.css';

const Testimonial = () => {

    const [imageIndex, setImageIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div className='lg:w-3/4 md:3/4 mx-auto relative' style={{marginBottom:'100px' }}>
            <div><h4 className='Text text-center' id='sideHeading'>Transform</h4></div>
            <div> <h1 className='Text my-4 text-center'id='subHeading'>What Our Client say</h1></div>
            <Slider {...settings}>
                {testimonials.map((testimonial, idx) => (
                    <div 
                        className={idx === imageIndex ? "slide activeSlide" : "slide"} 
                        key={testimonial.id}
                    >
                        <TestimonialCard 
                            name={testimonial.name} 
                            image={testimonial.imgUrl} 
                            rating={testimonial.rating} 
                            text={testimonial.text}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
