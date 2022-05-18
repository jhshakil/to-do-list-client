import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='w-full md:w-3/4 m-auto'>
            <h1 className='text-3xl font-bold text-center mt-8'>Log In</h1>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleLogin} className='p-8'>
                <input ref={emailRef} className='block m-auto bg-gray-300 rounded-lg w-1/2 mt-4 p-2' type="email" placeholder='Enter Your Email' />
                <input ref={passwordRef} className='block m-auto bg-gray-300 rounded-lg w-1/2 mt-4 p-2' type="password" placeholder='Enter Your Password' />
                <input className='block m-auto btn w-1/2 md:w-1/4 mt-4 p-2' type="submit" value="Log in" />
            </form>
            <div className='text-center'>
                <p>Do not account Please register <Link className='text-red-600 font-bold' to='/signup'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;