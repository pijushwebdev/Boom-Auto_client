import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyToyUpdate = () => {

    const myToy = useLoaderData();
    // console.log(myToy);

    const {
        availableQuantity,
        detailsDescription,
        price,
        sellerEmail,
        _id } = myToy;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const availableQuantity = form.available_quantity.value;
        const detailsDescription = form.details_description.value;

        const updatedToy = {
            sellerEmail, 
            price,
            availableQuantity,
            detailsDescription
        };

        fetch(`http://localhost:5000/myToys/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Update toy successfully');
                form.reset();
            }
        })
        .catch(error => toast.error(error.message))

    }

    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit} className='m-5 md:m-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="seller_email">Seller Email</label>
                        <input defaultValue={sellerEmail} readOnly className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="email" name='seller_email' id='seller-email' placeholder='Seller Email' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="price">Price</label>
                        <input defaultValue={price} className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='price' id='price' placeholder='Price' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="available_quantity">Available Quantity</label>
                        <input defaultValue={availableQuantity} className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='available_quantity' id='available-quantity' placeholder='Available Quantity' required />
                    </div>
                </div>


                <div className='flex flex-col mt-8'>
                    <label className='my-3' htmlFor="details_description">Toy Details Description</label>
                    <textarea defaultValue={detailsDescription} className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' name="details_description" id="details-description" cols="30" rows="5" required></textarea>
                </div>

                <div className='flex justify-center'>
                    <input className='text-center text-indigo-100 cursor-pointer hover:bg-gradient-to-l duration-500 transition-all border-orange-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md font-bold w-full md:w-1/2 flex justify-center py-2 px-3 border outline-none my-10' type="submit" value='Update Toy' />
                </div>


            </form>
        </div>
    );
};

export default MyToyUpdate;