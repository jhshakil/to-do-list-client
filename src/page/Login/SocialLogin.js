import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

    // set location 
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='block m-auto p-3 btn rounded-lg mt-8 '>Log in with Google</button>
        </div>
    );
};

export default SocialLogin;