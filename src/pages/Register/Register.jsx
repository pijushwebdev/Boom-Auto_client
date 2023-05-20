import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';



const Register = () => {

    const { createUser, user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photoURL = form.photo.value;

        createUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                // console.log(loggedUser);
                form.reset();
                updateUserProfile(loggedUser, name, photoURL)
                toast.success("Successfully created user");
                logOut();
                navigate('/login');
            })

        const updateUserProfile = (user, name, photoURL) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            })
                .then(() => { })
                .catch(err => toast.error(err.message))
        }

    }
    return (

        <div className="inset-shadow grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className='p-10 order-2 md:order-1 inset-shadow hover:shadow-xl'>
                <img className='hover:shadow-lg' src="https://i.ibb.co/Ldb8ZC8/4957412-Mobile-login-Cristina.jpg" alt="" />
            </div>
            <div className='inset-shadow order-1 md:order-2 hover:shadow-xl'>
                <form onSubmit={handleRegister} className='hover:shadow-xl flex h-full flex-col shadow-md p-10 justify-center items-center '>

                    <input className='py-2 w-1/2 px-3 font-bold rounded-md bg-[#107aa7] text-[#dfe2ec] outline-none' type="text" name='name' id='name' placeholder='Enter Name' required />
                    <input className='my-5 py-2 w-1/2 px-3 font-bold rounded-md bg-[#107aa7] text-[#dfe2ec] outline-none' type="url" name='photo' id='photo' placeholder='Photo Url (optional)' />

                    <input className='py-2 w-1/2  px-3 font-bold rounded-md bg-[#107aa7] text-[#dfe2ec] outline-none' type="email" name='email' id='email' placeholder='Enter email' required />
                    <input className='my-5 py-2 w-1/2 px-3 font-bold rounded-md bg-[#107aa7] text-[#dfe2ec] outline-none' type="password" name='password' id='password' placeholder='Enter password' required />



                    <input className=' font-bold text-lg mb-10 py-2 px-3 w-1/2 border-[#03a3e6] cursor-pointer border rounded-md' type="submit" value='Sign Up' />

                    <p><small>Already Have an Account? <Link className="hover:border-b-2 border-[#03a3e6] hover:border-slate-500 border-b-2 border-transparent transition-all duration-500" to='/login'>Sign In</Link></small></p>



                </form>
            </div>
        </div>
        // <div className='my-6 flex justify-center'>
        //     <div className='shadow-md my-10 p-5'>
        //         <form onSubmit={handleRegister} className='flex flex-col items-center'>

        //             <input className='py-1 mb-5 px-3 rounded-md bg-cyan-800 text-white outline-none' type="text" name='name' id='name' placeholder='Enter name' required />
        //             <input className='py-1 mb-5 px-3 rounded-md bg-cyan-800 text-white outline-none' name='photo' id='photo' placeholder='photo url (optional)' type="text" />
        //             <input className='py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="email" name='email' id='email' placeholder='Enter email' required />
        //             <input className='my-5 py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="password" name='password' id='password' placeholder='Enter password' required />


        //             <input className='py-2 px-3 my-4 w-full   cursor-pointer border rounded-md' type="submit" value='SignUp' />

        //             <p><small>Already have an account? <Link to='/login'>SignIn</Link></small></p>
        //         </form>
        //     </div>

        // </div>
    );
};

export default Register;