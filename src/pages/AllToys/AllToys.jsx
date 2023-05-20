import React, { useEffect, useState } from 'react';
import './AllToys.css'
import { useLoaderData } from 'react-router-dom';
import SingleAllToyCard from '../SingleAllToyCard/SingleAllToyCard';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

const AllToys = () => {

    const allToy = useLoaderData();
    // console.log(allToys);
    const [allToys, setAllToys] = useState(allToy);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(error => toast.error(error.message))
    }, [searchText])

    return (
        <div className='p-4 md:p-0 inset-shadow'>
            <h1 className='text-center font-bold text-[#294090] text-5xl py-10'>BooM Toy Collections</h1>

            <div className='flex justify-center'>
                <div className='w-full lg:w-1/2 flex items-center relative'>
                    <input onChange={(e) => setSearchText(e.target.value)} className='text-lg py-2 w-full px-3 border outline-none border-[#1ba7e8] rounded-lg' type="text" />
                    <span className='absolute text-2xl text-[#1ba7e8] right-3 cursor-pointer'><FaSearch /></span>
                </div>

            </div>


            <div className="overflow-x-auto py-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-[#294090] text-center relative font-bold lg:text-xl'>Seller Name</th>
                            <th className='text-[#294090] text-center font-bold lg:text-xl'>Toy Name</th>
                            <th className='text-[#294090] text-center font-bold lg:text-xl'>Sub Category</th>
                            <th className='text-[#294090] text-center font-bold lg:text-xl'>Price</th>
                            <th className='text-[#294090] text-center font-bold lg:text-xl'>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            allToys.map(toy => <SingleAllToyCard
                                toy={toy}
                                key={toy._id}
                            ></SingleAllToyCard>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;