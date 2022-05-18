import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">

                <Link to='/' class="btn btn-ghost normal-case text-2xl">To Do List</Link>
            </div>
            <div class="navbar-end">
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {
                            user ? <li><Link onClick={handleSignOut} to='/login'>SignOut</Link></li> : <li><Link to='/login'>LogIn</Link></li>
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;