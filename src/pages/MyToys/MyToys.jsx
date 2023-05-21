import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyCard from './MyToyCard';
import './MyToys.css';

import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

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

    const handleAscending = () => {
        fetch(`http://localhost:5000/ascending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => toast.error(error.message))
    }

    const handleDescending = () => {
        fetch(`http://localhost:5000/descending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => toast.error(error.message))
    }

    return (
        <>
            <Helmet>
                <title>
                    My Toys | BOOM Auto
                </title>
            </Helmet>
            <div className='inset-shadow p-4 md:p-0'>
                <h1 className='text-center font-bold text-[#294090] text-5xl p-10'>My Toys</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center'>
                    <button onClick={handleAscending} className='glow-on-hover text-lg font-bold'>Ascending</button>
                    <button onClick={handleDescending} className='glow-on-hover text-lg font-bold'>Descending</button>

                </div>


                <div className="overflow-x-auto mt-10 py-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Toy Photo</th>
                                <th className='text-[#294090] text-center relative font-bold lg:text-lg'>Seller</th>
                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Seller Email</th>
                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Toy Name</th>
                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Sub Category</th>
                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Price</th>

                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Rating</th>
                                <th className='text-[#294090] text-center font-bold lg:text-lg'>Quantity</th>
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
                                    myToys={myToys}
                                    setMyToys={setMyToys}
                                ></MyToyCard>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default MyToys;