import React from 'react';
import { Link } from 'react-router-dom';
import { FaEraser, FaPenNib, FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyToyCard = ({myToy,setMyToys,myToys}) => {

    const { availableQuantity,
        detailsDescription,
        photoURL,
        price,
        rating,
        sellerEmail,
        sellerName,
        subCategory,
        toyName,
        _id } = myToy || {};

        const handleDelete = (_id) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`http://localhost:5000/deleteToy/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                const remainingToys = myToys.filter(toy => toy._id !== _id);
                                setMyToys(remainingToys);
                            }
                        })
                }
            })
        }
    return (
        <tr className='hover:shadow-lg rounded-md border-0'>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'><img className='rounded-md w-24 h-24' src={photoURL} alt="toy" /></td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{sellerName}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-base'>{sellerEmail}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{toyName}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{subCategory}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{price}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{rating}</td>
            <td className='text-[#03a3e6] font-bold text-center text-base lg:text-lg'>{availableQuantity}</td>
            <td className='text-[#03a3e6] whitespace-normal text-center'>{detailsDescription}</td>
            <td className='text-[#03a3e6] font-bold whitespace-normal text-center text-base lg:text-lg'>
                <span className='flex flex-col'>
                <Link title='Edit' className='mb-3' to={`/updateMyToys/${_id}`}><button className='px-3 py-2 hover:bg-[#294090] hover:shadow-lg transition-all duration-700 hover:text-[#03a3e6] rounded-md font-bold text-[#294090] border border-[#03a3e6]'><span><FaPenNib/></span></button></Link>
                
                <button onClick={() => handleDelete(_id)} className='px-3 py-2 hover:bg-[#294090] hover:shadow-lg transition-all duration-700 hover:text-[#03a3e6] rounded-md font-bold text-[#294090] border border-[#03a3e6]'><span><FaRegTrashAlt/></span></button>
                </span>
                </td>
        </tr>
    );
};

export default MyToyCard;