import React from 'react';
import { FaHeart } from 'react-icons/fa';

const SubCategoryCard = ({ toys }) => {

    const { availableQuantity,
        detailsDescription,
        photoURL,
        price,
        rating,
        sellerEmail,
        sellerName,
        subCategory,
        toyName,
        _id } = toys || {};

    return (
        <div className="card my-10 hover:shadow-lg glass">
            <div className='inset-shadow-2 rounded-xl'>
                <div className='inset-shadow rounded-xl p-4'>
                    <figure><img className='m-0' src={photoURL} alt="car!" /></figure>
                </div>

                <div className="card-body h-72 overflow-hidden rounded-xl p-4">
                    <h2 className="card-title text-[#294090] p-0 m-0">Toy Name: {toyName}</h2>
                    <p className='text-slate-500 p-0 m-0'>Available Quantity: {availableQuantity}</p>
                    <p className='text-slate-500 p-0 m-0'>Seller: {sellerName}</p>
                    <div className='flex items-center'>
                        <div className="badge hover:border-cyan-300 border-cyan-400 badge-outline mr-5">$ {price}</div>
                        <div className="badge hover:border-cyan-300 border-cyan-400 badge-outline"><span className='mr-2 text-[#294090]'><FaHeart /></span> {rating}</div>
                    </div>
                    <p className='text-slate-500'>Description: {detailsDescription.slice(0, 50)}...</p>


                    <div className="card-actions mt-5 justify-end">
                        <button className="py-2 w-full px-3 bg-cyan-600 hover:bg-cyan-800 text-slate-300 rounded-md">View Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SubCategoryCard;