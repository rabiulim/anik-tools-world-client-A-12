import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ToolBuy = () => {
    const { toolId } = useParams();

    const [user] = useAuthState(auth)

    const [tool, setTool] = useState({})

    // const [disabled, setDisabled] = useState(true)

    const [quantityInput, setQuantityInput] = useState(50)

    const [error, setError] = useState('')
    console.log(quantityInput);

    const minimumQuantity = parseInt(tool?.minimumOrder);
    const availableQuantity = parseInt(tool?.availableQuantity);
    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    const handleInputQuantity = (e) => {
        setQuantityInput(e.target.value)



        // if (quantityInput < minimumQuantity) {
        //     // setDisabled(true);
        //     setError('This is error')
        // }
        // // else if (quantityInput === 0) {
        // //     setError('')
        // // }
        // else {
        //     // setDisabled(false);

        //     setError('')
        // }
    }






    const handleBuyNow = event => {
        event.preventDefault();
        const orderQuantity = parseInt(event.target.quantity.value);
        // if (orderQuantity < minimumQuantity || orderQuantity > availableQuantity) {
        //     setDisabled(true)
        //     toast(`plz Minimum Quantity:${minimumQuantity}  available Quantity:${availableQuantity}`)
        //     event.reset();
        //     return
        // }

        const product = tool.name;
        const price = tool.price;
        const userName = user.displayName;
        const email = user.email;
        const orderInfo = { userName, email, orderQuantity, product, price }
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
        <div class="card mx-auto w-96 bg-base-200 my-12 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <p className='text-xl font-bold'>Available Quantity:{tool?.availableQuantity}</p>
                <p className='text-xl font-bold'>Minimum Order Quantity:{tool?.minimumOrder}</p>

                <form onSubmit={handleBuyNow} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" placeholder={user.displayName} class="input input-bordered input-primary w-full max-w-xs" readOnly />
                    <input type="number" name='quantity' placeholder=" Enter Order Quantity " class="input input-bordered input-primary w-full max-w-xs" onChange={handleInputQuantity} />

                    <p className='text-red-400'>{quantityInput < minimumQuantity ? `Please give a minimum ${minimumQuantity}` : ""}</p>
                    <p className='text-red-400'>{quantityInput > availableQuantity ? `Please give a maximum ${availableQuantity}` : ""}</p>

                    <input type="submit" value="Buy Now" className="btn btn-secondary w-full max-w-xs" disabled={quantityInput < minimumQuantity || quantityInput > availableQuantity ? true : false} />

                </form>
            </div>
        </div>
    );
};

export default ToolBuy;