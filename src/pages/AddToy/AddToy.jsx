// import React from 'react';
import './AddToy.css';




const AddToy = () => {
    return (
        <div className='my-5'>
            <form className='m-5 md:m-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="toy-name">Toy Name</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="text" name='toy-name' id='toy-name' placeholder='Toy Name' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="seller-name">Seller Name</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="text" name='seller-name' id='seller-name' placeholder='Seller Name' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="seller-email">Seller Email</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="email" name='seller-email' id='seller-email' placeholder='Seller Email' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="toy-name">Sub Category</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="text" name='sub-category' id='sub-category' placeholder='Sub Category' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="price">Price</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="text" name='price' id='price' placeholder='Price' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="rating">Rating</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="text" name='rating' id='rating' placeholder='Rating' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="available-quantity">Available Quantity</label>
                        <input className='py-2 px-3 outline-none border rounded-md focus:shadow-md' type="text" name='available-quantity' id='available-quantity' placeholder='Available Quantity' required />
                    </div>
                </div>


                <div className='flex flex-col mt-8'>
                    <label className='my-3' htmlFor="details-description">Details Description</label>
                    <textarea className='py-2 px-3 outline-none border rounded-md focus:shadow-md' name="details-description" id="details-description" cols="30" rows="5" required></textarea>
                </div>
                
                <div className='flex justify-center'>
                    <input className='text-center font-bold w-full md:w-1/2 flex justify-center py-2 px-3 border outline-none my-10' type="submit" value='Add Toy' />
                </div>
                

            </form>
        </div>
    );
};

export default AddToy;