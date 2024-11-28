import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/categories'}>Categories</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
    </>
    return (
        <div className='bg-[#576CBC]'>
            <div className="navbar md:px-7 px-2">
            <div className="navbar-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-[#A5D7E8]'>EliteHavenX</h1>
            </div>
            <div className="navbar-end">
                <Link to={'/login '}><button className='bg-[#19376D] px-5 py-2 rounded-xl font-semibold'>Login</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;