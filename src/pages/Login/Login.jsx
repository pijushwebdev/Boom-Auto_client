// import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen background-style">
            <div>

            </div>
            <div>
                <form className='flex flex-col shadow-md p-10 items-center '>

                    <input className='py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="email" name='email' id='email' placeholder='Enter email' required />
                    <input className='my-5 py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="password" name='password' id='password' placeholder='Enter password' required />


                    <input className='py-2 px-3 cursor-pointer border rounded-md' type="submit" value='SignIn' />


                    <p><small>Forget Password? <button className="hover:border-b-2 hover:border-slate-500 border-b-2 border-transparent transition-all duration-500">Reset</button></small></p>
                    <p><small>No account? <Link className="hover:border-b-2 hover:border-slate-500 border-b-2 border-transparent transition-all duration-500" to='/register'>SignUp</Link></small></p>

                    <div className='mt-5'>
                        <button className='rounded-md py-2 px-3 border mr-5' ><FaGoogle className="inline mr-2" />Sign in with Google</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;