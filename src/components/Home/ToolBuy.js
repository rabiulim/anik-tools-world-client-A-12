import React from 'react';
import { useParams } from 'react-router-dom';

const ToolBuy = () => {
    const { toolId } = useParams();

    const handlePayment = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity)
    }

    return (
        <div class="card mx-auto w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <form onSubmit={handlePayment} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="number" name='quantity' placeholder="Plz Enter Quantity" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="submit" value="Pay Now" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default ToolBuy;