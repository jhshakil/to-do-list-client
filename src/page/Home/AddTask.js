import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddTask = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const info = {
            task: data.task,
            description: data.description,
            email: user.email
        }
        const url = 'https://radiant-beyond-47684.herokuapp.com/item'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                alert('Item add');
                window.location.reload(false);
            })
    };
    return (
        <div className='w-3/4 block m-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 mx-4 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Task Name' {...register("task", { required: true })} />
                <input className='border-2 mx-4 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Task Description' {...register("description", { required: true })} />
                <input className='border-2 mx-4 border-solid border-black mt-4 rounded p-2 text-white bg-gray-500 w-32 m-auto' type="submit" value='Add Task' />
            </form>
        </div>
    );
};

export default AddTask;