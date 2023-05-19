import React, { useState } from 'react';
import './ToyDetails.css'
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ToysDetails = () => {

    const [isDisabled, setIsDisabled] = useState(false);


    const toyData = useLoaderData();
    // console.log(toyData);

    const { availableQuantity,
        detailsDescription,
        photoURL,
        price,
        rating,
        sellerEmail,
        sellerName,
        subCategory,
        toyName,
        _id } = toyData;


    const handleBuyNow = () => {
        toast.success('Order Placed');
        setIsDisabled(!isDisabled)
    }


    return (
        <div className='shadow-md inset-shadow p-10'>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-10">
                <div className='inset-shadow transition-all duration-1000 p-5 hover:shadow-md hover:shadow-[#294090] rounded-xl'>
                    <figure>
                        <img src={photoURL} alt="toy" className='w-full rounded-xl p-5 hover:shadow-md hover:shadow-[#294090]' />
                    </figure>
                </div>

                <div className="inset-shadow p-5 hover:shadow-md hover:shadow-[#294090] rounded-xl flex flex-col justify-center items-center">

                    <h1 className='text-xl my-3 font-bold'>Toy Name: {toyName}</h1>
                    <h3 className='text-lg mb-3 font-semibold'>Seller: {sellerName}</h3>
                    <h3 className='font-semibold mb-3'>Seller Email: {sellerEmail}</h3>
                    <h3 className='font-semibold'>Available Quantity: {availableQuantity}</h3>
                    <div className='flex my-5'>
                        <div className="badge mr-5 badge-outline">$ {price}</div>
                        <div className="badge badge-outline"><span className='mr-3'><FaHeart /></span> {rating}</div>
                    </div>

                    <h3><span className='font-semibold'>Description:</span>  {detailsDescription}</h3>

                    <input onClick={handleBuyNow} disabled={isDisabled} className='py-2 px-3 text-bold hover:bg-white bg-[#294090] hover:shadow-lg transition-all duration-700 text-[#03a3e6]  font-bold hover:text-[#294090] border border-[#03a3e6] mt-10 rounded-xl' type="button" value='Buy Now' />

                </div>
            </div>
        </div>
    );
};

export default ToysDetails;