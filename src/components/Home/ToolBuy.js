import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolBuy = () => {
    const { toolId } = useParams();

    const [tool, setTool] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    const handlePayment = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
    }

    return (
        <div class="card mx-auto w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <p className='text-xl font-bold'>Available Quantity:{tool.availableQuantity}</p>
                <p className='text-xl font-bold'>Minimum Order Quantity:{tool.minimumOrder}</p>
                <form onSubmit={handlePayment} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="number" name='quantity' placeholder="Plz Enter Quantity" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="submit" value="Pay Now" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default ToolBuy;