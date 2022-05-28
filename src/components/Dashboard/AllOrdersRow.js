import React from 'react';

const AllOrdersRow = ({ order, index }) => {
    const { orderQuantity, product } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td><button className='btn btn-xs'>unpaid</button></td>
            <td><button className='btn btn-xs'>Remove Order</button></td>
        </tr>
    );
};

export default AllOrdersRow;