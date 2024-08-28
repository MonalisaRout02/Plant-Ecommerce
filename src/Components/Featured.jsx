import React, { useRef } from 'react'
import products from '../Products/products'
import FeaturedCard from './FeaturedCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Featured = () => {
  const carouselRef = useRef(null); 

  const items = products.map((product) => (
    <FeaturedCard
      key={product.id}
      ProductName={product.name}
      Price={product.price}
      imgUrl={product.imgUrl}
    />
  ));

  const responsive = {
    0: { items: 1.2 },
    568: { items: 3 },
    1024: {
      items: 4.5,
      itemsFit: 'contain',
    },
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  return (
    <div className='flex justify-center' style={{marginBottom:'150px'}}>
      <div className=' lg:w-3/4 w-full px-5 md:w-3/4'>
        <div>
          <h4 className='Text' id='sideHeading'>Discover</h4>
          <h1 className='Text' id='subHeading'>Featured</h1>
        </div>
        <div>
          <div className='relative pr-2 pl-2 mt-10'>
            <AliceCarousel
              ref={carouselRef} 
              items={items}
              autoPlay
              autoPlayInterval={2000}
              responsive={responsive}
              disableButtonsControls
              disableDotsControls
            />
            <Button
              variant="text"
              className='ml-2'
              onClick={slideNext}
              sx={{
                position: "absolute",
                top: '7rem',
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                
              }}
              aria-label='next'
            >
              <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
            </Button>

            <Button
              variant="text"
              className='ml-2'
              onClick={slidePrev}
              sx={{
                position: "absolute",
                top: '7rem',
                left: "0rem",
                transform: "translateX(-50%) rotate(-90deg)",
                
              }}
              aria-label='prev'
            >
              <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
