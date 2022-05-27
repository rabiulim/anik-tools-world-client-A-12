import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const minimumOrder = e.target.minimumquantity.value;
        const availableQuantity = e.target.availablequantity.value;
        const price = e.target.price.value;
        const img = e.target.img.value;
        const product = { name, img, price, minimumOrder, availableQuantity, description }
        console.log(product)
        const url = 'http://localhost:5000/tool'
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast.success('Product  successfully added')
                e.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-4xl'>Add a new Product</h1>
            <div class="card mx-auto w-96 bg-base-200 my-12 shadow-xl">

                <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name='name' placeholder="Product name" class="input input-bordered input-primary w-full max-w-xs mt-12" required />
                    <input type="text" name='description' placeholder="Description" class="input input-bordered input-primary h-16 w-full max-w-xs " required />

                    <input type="number" name='minimumquantity' placeholder=" Minimum Quantity " class="input input-bordered input-primary w-full max-w-xs" required />

                    <input type="number" name='availablequantity' placeholder=" Available Quantity " class="input input-bordered input-primary w-full max-w-xs" required />

                    <input type="number" name='price' placeholder=" price " class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='img' placeholder="product image url " class="input input-bordered input-primary w-full max-w-xs" required />

                    <input type="submit" value="Add Product" className="btn btn-secondary w-full max-w-xs mb-12" required />

                </form>
            </div>
        </div>
    )
};

export default AddProduct;