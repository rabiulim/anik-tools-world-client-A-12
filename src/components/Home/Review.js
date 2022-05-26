import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-84 bg-accent text-primary-content">
            <div class="card-body">
                <h2 class="card-title">{review.userName}</h2>
                <p className='text-xl'>{review.description}</p>
                <p className='text-2xl'>Ratings: <span className='text-bold text-4xl'>{review.ratings}</span> <div class="rating rating-lg">
                    <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
                </div></p>
            </div>
        </div>
    );
};

export default Review;