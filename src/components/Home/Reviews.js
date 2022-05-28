import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://anik-parts-world.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-center text-primary'>Our Clients Reviews !!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-6'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;