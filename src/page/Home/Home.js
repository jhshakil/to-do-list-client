import React from 'react';
import AddTask from './AddTask';
import ShowTask from './ShowTask';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-5xl text-bold my-8'>Welcome to To Do List</h1>
            <AddTask></AddTask>
            <ShowTask></ShowTask>
        </div>
    );
};

export default Home;