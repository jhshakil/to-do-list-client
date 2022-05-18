import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-5xl text-bold my-8'>Welcome to To Do List</h1>
            <div className='flex justify-center'>
                <input type="text" placeholder="Task Name" class="input mx-4 input-bordered w-full max-w-xs" />
                <input type="textarea" placeholder="Task Description" class="input mx-4 input-bordered w-full max-w-xs" />
                <button class="btn">Add Tusk</button>
            </div>
        </div>
    );
};

export default Home;