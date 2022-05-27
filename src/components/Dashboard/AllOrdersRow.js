import React from 'react';

const AllOrdersRow = ({ order, index }) => {
    const { email } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button className='btn btn-xs'>unpaid</button></td>
            <td><button className='btn btn-xs'>Remove Order</button></td>
        </tr>
    );
};

export default AllOrdersRow;