import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-banner flex justify-evenly items-center'>
            <div data-aos="fade-down-right" data-aos-duration="600" className='bottom-1/4 left-1/4 md:w-72 md:h-72 w-56 h-56'>
                <div className=' w-full h-full flex flex-col justify-between bottom-4 left-4 md:bottom-1/4 md:left-1/4 bg-[#241d1d7a]'>
                    <h1 className='text-center lg:text-7xl text-3xl font-bold break-words text-[#239abe]'>BooM Auto</h1>
                    <p className='text-lg font-semibold my-3 text-center text-cyan-600'>Get Exclusive Discount..</p>
                    <button className='md:py-2 md:px-3 py-1 px-2 btn-hover  bottom-10 left-12 md:left-20 text-lg font-semibold rounded-md bg-[#293f9062] text-[#68dcff]'>Shop Now</button>
                </div>
            </div>
            <div></div>

        </div>
    );
};

export default Banner;