import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user?.displayName);

    const handleLogOut = () => {
        logOut()
        toast.success('Successfully Logout');
    }


    return (
        <div className="bg-slate-100">
            <div className="navbar bg-base-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold text-[#294090]'><ActiveLink to='/'>Home</ActiveLink></li>
                            <li className='font-bold text-[#294090]'><ActiveLink to='/blogs'>Blogs</ActiveLink></li>
                            <li className='font-bold text-[#294090]' tabIndex={0}><ActiveLink to='allToys'>All Toys</ActiveLink></li>
                            {
                                user ?
                                    <>
                                        <li className='font-bold text-[#294090]'><ActiveLink to='myToys'>My Toys</ActiveLink></li>
                                        <li className='font-bold text-[#294090]'><ActiveLink to='add-toy'>Add a Toy</ActiveLink></li>
                                        {user?.photoURL && <span className="h-10 w-10 mx-3 cursor-pointer rounded-full"><img className="w-full h-full rounded-full" src={user?.photoURL} alt="image" title={user?.displayName} /></span>}
                                        <li className='font-bold text-[#294090]'><button onClick={handleLogOut}>Log Out</button></li>
                                    </> :
                                    <>
                                        <li className='font-bold text-[#294090]'><ActiveLink to='/login'>Login</ActiveLink></li>
                                    </>
                            }


                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <Link to='/' className="w-32 flex items-center h-16 rounded-lg"><img className="w-full h-full rounded-lg" src="https://i.ibb.co/mRKNg00/logobgoutf.png" alt="logo" title="logo" /></Link>
                        <span className='font-bold text-[#294090] text-xl w-full'>BOOM Auto</span>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-[#294090]'><ActiveLink to='/'>Home</ActiveLink></li>
                        <li className='font-bold text-[#294090]'><ActiveLink to='/blogs'>Blogs</ActiveLink></li>
                        <li className='font-bold text-[#294090]' tabIndex={0}><ActiveLink to='allToys'>All Toys</ActiveLink></li>

                        {
                            user ?
                                <>
                                    <li className='font-bold text-[#294090]'><ActiveLink to='myToys'>My Toys</ActiveLink></li>
                                    <li className='font-bold text-[#294090]'><ActiveLink to='add-toy'>Add a Toy</ActiveLink></li>
                                    {user?.photoURL && <span className="grid place-self-center h-10 w-10 mx-3 cursor-pointer rounded-full"><img className="w-full h-full rounded-full" referrerpolicy="no-referrer" src={user?.photoURL} alt="image" title={user?.displayName} /></span>}
                                    <li className='font-bold text-[#294090]'><button onClick={handleLogOut}>Log Out</button></li>
                                </> :
                                <>
                                    <li className='font-bold text-[#294090]'><ActiveLink to='/login'>Login</ActiveLink></li>
                                </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;