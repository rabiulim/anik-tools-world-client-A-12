import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {

    const { _id, name, img, price, description } = tool;

    const navigate = useNavigate();

    const navigateBuyPage = (id) => {
        navigate(`/tool/${id}`);
    }

    return (
        <div class="card w-84 bg-base-200 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-xl'>Minimum Order:{tool?.minimumOrder}</p>
                <p className='text-xl'>Available Quantity:{tool?.availableQuantity}</p>
                <p className='text-xl'>Price:{price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary w-full px-10" onClick={() => navigateBuyPage(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;