import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsRow = ({ product, index, refetch }) => {
    const { _id, name, price } = product;
    const handleProductDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://anik-parts-world.herokuapp.com/tool/${id}`, {
                method: 'Delete',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 403) {
                        toast.error('Failed to Delete')
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Successfully Delete')
                    }
                })
        }
        fetch(`https://anik-parts-world.herokuapp.com/tool/${id}`, {
            method: 'Delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Delete')
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Successfully Delete')
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={() => handleProductDelete(_id)} className='btn btn-xs'>Delete</button></td>
        </tr>
    );
};

export default ManageProductsRow;