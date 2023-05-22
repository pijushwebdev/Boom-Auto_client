import React from 'react';
import Marquee from 'react-fast-marquee';

const Partner = () => {
    return (
        <div className='mt-10 mb-20'>
            <h1 className='text-4xl font-bold text-[#294090] text-center my-16'>Partners And Toys</h1>
            <Marquee pauseOnHover speed={100}>
                <div className='flex'>
                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/1Z83G3p/1.gif" alt="" />

                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/CK2djQC/2.gif" alt="" />
                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/Sx8nYnp/1-C6639340-google-logo.webp" alt="" />

                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/dBjGySg/amazon.jpg" alt="" />
                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/1Z83G3p/1.gif" alt="" />
                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/RY4vFGK/daraz.png" alt="" />
                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/q0J5K6c/unnamed.png" alt="" />
                    <img className='w-32 h-32 mr-2' src="https://i.ibb.co/2NyrTXC/channels4-profile.jpg" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Partner;





