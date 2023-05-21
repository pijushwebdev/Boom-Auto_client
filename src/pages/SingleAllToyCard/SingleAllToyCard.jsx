import React from 'react';
import { Link } from 'react-router-dom';

const SingleAllToyCard = ({ toy }) => {

    const { availableQuantity,
        detailsDescription,
        photoURL,
        price,
        rating,
        sellerEmail,
        sellerName,
        subCategory,
        toyName,
        _id } = toy || {};


    return (
        <tr className='hover:shadow-lg rounded-md border-0'>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{sellerName}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{toyName}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{subCategory}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>$ {price}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{availableQuantity}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'><Link to={`/all-toys/${_id}`}><button className='px-3 py-2 hover:bg-[#294090] hover:shadow-lg transition-all duration-700 hover:text-[#03a3e6] rounded-md font-bold text-[#294090] border border-[#03a3e6]'>View Details</button></Link></td>
        </tr>
    );
};

export default SingleAllToyCard;