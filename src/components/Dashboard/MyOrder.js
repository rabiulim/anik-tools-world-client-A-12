import React, { useEffect, useState } from 'react';


const MyOrder = () => {

    const [orders, setOrders] = useState([])

    console.log(orders)

    useEffect(() => {
        const url = 'http://localhost:5000/order'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const handleOrderDelete = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div class="overflow-x-auto w-full  w-full">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
                            <th>Delet</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <tr key={order._id}>
                                <th>1</th>
                                <td>{order.userName}</td>
                                <td>{order.product}</td>
                                <td>{order.price}</td>
                                <td>{order.orderQuantity}</td>
                                <td><button className='btn btn-sm'>Pay Now</button></td>
                                <td><button onClick={() => handleOrderDelete(order._id)} className='btn btn-sm'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;