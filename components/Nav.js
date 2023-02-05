import Link from 'next/link';
import React from 'react';

const Nav = () => {
    const menuItems = <React.Fragment>
        <li><Link className='btn btn-ghost rounded' href='/' >Home</Link></li>
        <li><Link className='btn btn-ghost rounded' href='/'>Program</Link></li>
        <li><Link className='btn btn-ghost rounded' href='/'>Blog</Link></li>
        <li><Link className='btn btn-ghost rounded' href='/'>About us</Link></li>
        <li><Link className='btn bg-indigo-900 text-white rounded-xl' href='/'>Log In</Link></li>
    </React.Fragment>
    return (
        <div className='bg-white lg:bg-gradient-to-b from-fuchsia-50 to-fuchsia-100 px-5'>
            <div className="navbar justify-between">
                <div className="w-full lg:w-1/2 flex justify-between lg:justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 dark:bg-slate-900 dark:text-white shadow rounded-box w-40">
                            {menuItems}
                        </ul>
                    </div>
                    <p className="text-xl flex items-center"><span className='bg-indigo-900 rounded-lg px-3 py-1 text-white'>Gym</span> <span className='text-indigo-900 ml-2'>baran</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;