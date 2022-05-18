import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (loading) {
        if (loading) {
            return <p>Loading...</p>
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignUp = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-full md:w-3/4 m-auto'>
            <h1 className='text-3xl font-bold text-center mt-8'>Sign Up</h1>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleSignUp} className='p-8'>
                <input ref={emailRef} className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="email" placeholder='Enter Your Email' />
                <input ref={passwordRef} className='block m-auto bg-gray-300 w-1/2 mt-4 p-2' type="password" placeholder='Enter Your Password' />
                <input className='block m-auto btn w-1/2 md:w-1/4 mt-4 p-2' type="submit" value="Sign Up" />
            </form>
            <div className='text-center'>
                <p>Have an Account Please <Link className='text-red-600 font-bold' to='/login'>Log In</Link></p>
            </div>

        </div>
    );
};

export default SignUp;