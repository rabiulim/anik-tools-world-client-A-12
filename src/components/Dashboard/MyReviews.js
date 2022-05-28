import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyReviews = () => {

    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const description = event.target.description.value;
        const ratings = event.target.ratings.value;
        const userName = user.displayName;
        console.log(userName)
        const reviews = { userName, description, ratings }

        fetch('https://anik-parts-world.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('review  successfully added')
                event.target.reset();
            })

    }

    return (
        <div>
            <div class="card mx-auto w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Give Us Ratings</h2>
                    <p></p>
                    <form onSubmit={handleAddReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <textarea name='description' class="textarea textarea-accent w-full" placeholder="Description"></textarea>
                        <div className='flex items-center'>
                            <input type="number" name='ratings' placeholder="Plz Enter Ratings" class="input input-bordered input-primary w-20 max-w-xs" />
                            <div class="rating rating-lg">
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />

                            </div>
                        </div>
                        <input type="submit" value="Add Review" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;