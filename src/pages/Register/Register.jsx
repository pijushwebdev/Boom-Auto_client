// import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';



const Register = () => {
    return (
        <div className='my-6 flex justify-center'>
            <div className='shadow-md my-10 p-5 lg:w-1/2 w-full'>
                <form  className='flex flex-col items-center'>
                    
                    <input className='py-1 mb-5 px-3 rounded-md bg-cyan-800 text-white outline-none' type="text" name='name' id='name' placeholder='Enter name' required />
                    <input className='py-1 mb-5 px-3 rounded-md bg-cyan-800 text-white outline-none' name='photo' id='photo' placeholder='photo url (optional)' type="text" />
                    <input className='py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="email" name='email' id='email' placeholder='Enter email' required />
                    <input className='my-5 py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="password" name='password' id='password' placeholder='Enter password' required />
                    
                    
                    <input className='py-2 px-3 my-4 w-full   cursor-pointer border rounded-md' type="submit" value='SignUp' />

                    <p><small>Already have an account? <Link to='/login'>SignIn</Link></small></p>
                </form>
            </div>

        </div>
    );
};

export default Register;