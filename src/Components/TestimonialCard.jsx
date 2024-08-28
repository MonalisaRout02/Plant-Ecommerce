import React from 'react';

const TestimonialCard = ({ image, name, rating, text }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <img 
                        key={i} 
                        src='./assets/star-fill.svg' 
                        alt='filled-star' 
                        className='h-4 w-4' 
                    />
                );
            } else {
                stars.push(
                    <img 
                        key={i} 
                        src='./assets/star.svg' 
                        alt='unfilled-star' 
                        className='h-4 w-4' 
                    />
                );
            }
        }
        return stars;
    };

    return (
        <div className=' testmonial card flex justify-center m-10 ' >
            <div className='flex flex-col p-3.5 rounded-lg' style={{ minWidth: '270px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <div className='flex flex-row items-center'>
                    <img className='h-12 w-12 rounded-full' src={image} alt='pic' />
                    <div className='flex flex-col pl-4'>
                        <p className='font-semibold Text'>{name}</p>
                        <div className='flex items-center'>
                            <p className='font-semibold mr-1 -mb-0.5 Text'>{rating}</p>
                            <div className='flex space-x-1'>
                                {renderStars(rating)}
                            </div>
                        </div>
                    </div>
                    <img src='./assets/Vector.svg' alt='quotes' className='ml-7  h-10 w-10' />
                </div>
                <div className='mt-3'>
                    <p  className='BodyText'>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
