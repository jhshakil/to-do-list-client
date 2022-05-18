import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">

                <a class="btn btn-ghost normal-case text-2xl">To Do List</a>
            </div>
            <div class="navbar-end">
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='login'>LogIn</Link></li>
                        <li><Link to='signout'>SignOut</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;