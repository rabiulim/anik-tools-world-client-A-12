import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ToolBuy = () => {
    const { toolId } = useParams();

    const [user] = useAuthState(auth)

    const [tool, setTool] = useState({})

    const [isDisabled, setDisabled] = useState(false);




    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    const handleBuyNow = event => {
        event.preventDefault();
        const minimumQuantity = tool.minimumOrder;
        const availableQuantity = tool.availableQuantity;
        const orderQuantity = parseInt(event.target.quantity.value);
        if (orderQuantity < minimumQuantity || orderQuantity > availableQuantity) {
            setDisabled(true)
            alert(`plz Minimum Quantity:${minimumQuantity}  available Quantity:${availableQuantity}`)
            return
        }
        const updateQuantity = minimumQuantity + orderQuantity
        const product = tool.name;
        const price = tool.price;
        const userName = user.displayName;
        const userEmail = user.email;
        const phoneNumber = event.target.phoneNumber.value;
        const orderInfo = { userName, userEmail, phoneNumber, orderQuantity, product, price }
        const url = 'http://localhost:5000/order'
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('orders  successfully added')
                event.target.reset();
            })
    }

    return (
        <div class="card mx-auto w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <p className='text-xl font-bold'>Available Quantity:{tool?.availableQuantity}</p>
                <p className='text-xl font-bold'>Minimum Order Quantity:{tool?.minimumOrder}</p>
                <p>{user.displayName}</p>
                <form onSubmit={handleBuyNow} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="number" name='phoneNumber' placeholder="Plz Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="number" name='quantity' placeholder="Plz Enter Quantity" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="submit" value="Buy Now" className="btn btn-secondary w-full max-w-xs" disabled={isDisabled} />

                </form>
            </div>
        </div>
    );
};

export default ToolBuy;