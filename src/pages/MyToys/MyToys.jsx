import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyCard from './MyToyCard';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyToys(data);
            })
    }, [user])


    return (
        <div className='p-4 md:p-0'>
            <h1 className='text-center font-bold text-[#294090] text-5xl my-10'>My Toys</h1>

            <div className='flex justify-center'>
                <input className='text-lg py-2 w-full lg:w-1/2 px-3 border outline-none border-[#1ba7e8] rounded-lg' type="search" />
            </div>


            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Toy</th>
                            <th className='text-[#294090] text-center relative font-bold lg:text-lg'>Seller</th>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Seller Email</th>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Toy Name</th>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Sub Category</th>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Price</th>

                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Rating</th>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'></th>
                            <th className='text-[#294090] text-center font-bold lg:text-lg'>Description</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myToys.map(myToy => <MyToyCard
                                key={myToy._id}
                                myToy={myToy}
                            ></MyToyCard>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;