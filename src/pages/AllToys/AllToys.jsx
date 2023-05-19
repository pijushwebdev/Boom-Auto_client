import React, { useEffect } from 'react';
import './AllToys.css'
import { useLoaderData } from 'react-router-dom';
import SingleAllToyCard from '../SingleAllToyCard/SingleAllToyCard';

const AllToys = () => {

    const allToys = useLoaderData();
    console.log(allToys);

    return (
        <>
            <h1 className='text-center font-bold text-[#294090] text-5xl my-10'>BooM Toy Collections</h1>
                
            <div className="overflow-x-auto my-10">
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
        </>
    );
};

export default AllToys;