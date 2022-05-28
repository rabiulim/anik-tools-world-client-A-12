import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrdersRow from './AllOrdersRow';

const AllOrders = () => {
    const { data: allorders, isLoading } = useQuery('allOrders', () => fetch('https://anik-parts-world.herokuapp.com/allorder', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='min-h-full'>
            <h1 className='text-4xl text-center mb-6'>All orders:{allorders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Order Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map((order, index) => <AllOrdersRow key={order._id}
                                index={index}
                                order={order}
                            ></AllOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;


/**
 * If an admin logs in, they will not see the options that a user sees except My Profile. This means an admin will not see my orders and add a review link. Instead, an admin will see My Profile, Manage All Orders, Add A Product, Make Admin, Manage Products. Based on your website idea, you can change the name of these menu names. Manage products will be described in the bonus section.
 */