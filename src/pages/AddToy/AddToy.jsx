import React from 'react';
import { useContext } from 'react';
import './AddToy.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const AddToy = () => {

    const {user} = useContext(AuthContext);
    // console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const toyName = form.toy_name.value;
        const photoURL = form.toy_photo.value;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const subCategory = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.available_quantity.value;
        const detailsDescription = form.details_description.value;

        const toy = {
            toyName,
            sellerName,
            sellerEmail, subCategory,
            price,
            rating,
            availableQuantity,
            detailsDescription,
            photoURL
        };
        console.log(toy);

        fetch('http://localhost:5000/toys', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('add toy successfully');
                form.reset();
            }
        })

    }

    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit} className='m-5 md:m-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="toy_name">Toy Name</label>
                        <input className='py-2 px-3 outline-none border border-pink-500 rounded-md focus:shadow-md' type="text" name='toy_name' id='toy-name' placeholder='Toy Name' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="toy_photo">Toy Photo</label>
                        <input className='py-2 px-3 outline-none border border-pink-500 rounded-md focus:shadow-md' type="text" name='toy_photo' id='toy-photo' placeholder='Toy photo Url' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="seller_name">Seller Name</label>
                        <input defaultValue={user?.displayName} className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='seller_name' id='seller-name' placeholder='Seller Name' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="seller_email">Seller Email</label>
                        <input defaultValue={user?.email} className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="email" name='seller_email' id='seller-email' placeholder='Seller Email' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="sub_category">Sub Category</label>
                        <input className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='sub_category' id='sub-category' placeholder='Sub Category' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="price">Price</label>
                        <input className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='price' id='price' placeholder='Price' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="rating">Rating</label>
                        <input className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='rating' id='rating' placeholder='Rating' required />
                    </div>

                    <div className='flex flex-col'>
                        <label className='my-3' htmlFor="available_quantity">Available Quantity</label>
                        <input className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' type="text" name='available_quantity' id='available-quantity' placeholder='Available Quantity' required />
                    </div>
                </div>


                <div className='flex flex-col mt-8'>
                    <label className='my-3' htmlFor="details_description">Toy Details Description</label>
                    <textarea className='py-2 px-3 border-pink-500 outline-none border rounded-md focus:shadow-md' name="details_description" id="details-description" cols="30" rows="5" required></textarea>
                </div>

                <div className='flex justify-center'>
                    <input className='text-center text-indigo-100 cursor-pointer hover:bg-gradient-to-l duration-500 transition-all border-orange-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md font-bold w-full md:w-1/2 flex justify-center py-2 px-3 border outline-none my-10' type="submit" value='Add Toy' />
                </div>


            </form>
        </div>
    );
};

export default AddToy;