// import React from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const [user, setUser] = useState(null);
    const emailRef = useRef();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn, googleSignIn, passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const userEmailPass = res.user;
                setUser(userEmailPass);
                toast.success('Successfully Login')
                console.log(userEmailPass);
                navigate(from, { replace: true });
            })
            .catch(error => toast.error(error.message))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const signedUser = result.user;
                setUser(signedUser);
                navigate(from, { replace: true });
                toast.success('Successfully Login')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handlePasswordReset = (e) => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error('please provide email');
        }
        passwordReset(email)
            .then(() => {
                toast.success('a reset mail has been sent to your mail');
            })
            .catch(error => toast.error(error.message))
    }
    return (
        <div className="flex justify-center items-center h-screen background-style">
            <div>

            </div>
            <div>
                <form onSubmit={handleSignIn} className='flex flex-col shadow-md p-10 items-center '>

                    <input className='py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' ref={emailRef} type="email" name='email' id='email' placeholder='Enter email' required />
                    <input className='my-5 py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="password" name='password' id='password' placeholder='Enter password' required />


                    <input className='py-2 px-3 cursor-pointer border rounded-md' type="submit" value='SignIn' />


                    <p><small>Forget Password? <button onClick={handlePasswordReset} className="hover:border-b-2 hover:border-slate-500 border-b-2 border-transparent transition-all duration-500">Reset</button></small></p>
                    <p><small>No account? <Link className="hover:border-b-2 hover:border-slate-500 border-b-2 border-transparent transition-all duration-500" to='/register'>SignUp</Link></small></p>

                    <div className='mt-5'>
                        <button onClick={handleGoogleSignIn} className='rounded-md py-2 px-3 border mr-5' ><FaGoogle className="inline mr-2" />Sign in with Google</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;