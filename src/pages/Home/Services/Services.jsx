import React, { useEffect } from 'react';
import "aos/dist/aos.css";


import AOS from "aos";


const Services = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className='container mx-auto'>  
            <h1 className='text-4xl font-bold text-[#294090] text-center my-10'>Services</h1>
            <div data-aos="fade-right" data-aos-delay="600" data-aos-once="false" data-aos-easing="linear" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-4 gap-3 place-content-center'>
                <div className='p-5 flex flex-col shadow-md rounded-lg justify-center items-center'>
                    <div className='w-32 h-32'>
                        <img className='w-full' src="https://i.ibb.co/Fzrj4L7/delivery.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-lg text-center font-bold text-cyan-600'>Fastest Delivery</h1>
                        <p className='text-gray-400 text-center'>Unbelievable fast within 30 minutes</p>
                        <div className='my-4'>
                            <div className="badge border-cyan-500 font-medium badge-outline">Top Rated</div>
                        </div>
                    </div>

                </div>
                <div className='p-5 flex flex-col shadow-md rounded-lg justify-center items-center'>
                    <div className='w-32 h-32'>
                        <img className='w-full' src="https://i.ibb.co/0rfnZPN/shelf.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-lg text-center font-bold text-cyan-600'>Wide Category</h1>
                        <p className='text-gray-400 text-center'>15+ Categories are available</p>
                        <div className='my-4'>
                            <div className="badge border-cyan-500 font-medium badge-outline">Satisfied</div>
                        </div>
                    </div>

                </div>
                <div className='p-5 flex flex-col shadow-md rounded-lg justify-center items-center'>
                    <div className='w-32 h-32'>
                        <img className='w-full' src="https://i.ibb.co/NS91TSg/products.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-lg text-center font-bold text-cyan-600'>Huge Products</h1>
                        <p className='text-gray-400 text-center'>150k+ Products are available</p>
                        <div className='my-4'>
                            <div className="badge border-cyan-500 font-medium badge-outline">Popular</div>
                        </div>
                    </div>

                </div>
                <div className='p-5 flex flex-col shadow-md rounded-lg justify-center items-center'>
                    <div className='w-32 h-32'>
                        <img className='w-full' src="https://i.ibb.co/fdkMPPw/man.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-lg text-center font-bold text-cyan-600'>Satisfaction</h1>
                        <p className='text-gray-400 text-center'>100% satisfied customer</p>
                        <div className='my-4'>
                            <div className="badge border-cyan-500 font-medium badge-outline">Top Rated</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Services;