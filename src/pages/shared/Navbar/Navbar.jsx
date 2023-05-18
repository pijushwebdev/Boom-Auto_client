// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-slate-100">
            <div className="navbar bg-base-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li tabIndex={0}><Link to='all-toys'>All Toys</Link></li>
                            <li><Link to='my-toys'>My Toys</Link></li>
                            <li><Link to='add-toy'>Add a Toy</Link></li>
                            <li><Link to='my-toys'>profile</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="w-32 h-16 rounded-lg"><img className="w-full h-full rounded-lg" src="https://i.ibb.co/0jNTwzm/logocar.png" alt="logo" title="logo" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li tabIndex={0}><Link to='all-toys'>All Toys</Link></li>
                        <li><Link to='/my-toys'>My Toys</Link></li>
                        <li><Link to='/add-toy'>Add a Toy</Link></li>
                        <li><Link to='/'>profile</Link></li>
                        <li><Link to='/login'>Login</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;