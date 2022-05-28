import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/payment/${id}`

    const { data: order, isLoading, refetch } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='card w-50 max-w-md bg-base-200 shadow-xl my-12'>
                <div className='card-body'>
                    <h2 className='card-title'>
                        Pay for {order.product}
                    </h2>
                    <p>{order.description}</p>
                    <p className='text-xl'>Your Price: ${order.price}</p>
                </div>
            </div>
            <div className='card w-50 max-w-md bg-base-200 shadow-xl'>
                <div className='card-body '>
                    <button className='btn btn-sm'>Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;