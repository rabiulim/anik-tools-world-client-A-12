import React from 'react';

const AllOrdersRow = ({ order }) => {
    const { email } = order;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
            <td><button className='btn btn-xs'>Remove Order</button></td>
        </tr>
    );
};

export default AllOrdersRow;