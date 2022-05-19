import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ShowTask = () => {
    const [user] = useAuthState(auth);
    const [acknowledged, setAcknowledge] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://radiant-beyond-47684.herokuapp.com/item?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [acknowledged])

    const handleDelete = id => {
        const proceed = window.confirm('Delete This Item')
        let newCount = false;
        setAcknowledge(newCount)
        if (proceed) {
            const url = `https://radiant-beyond-47684.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setAcknowledge(data.acknowledge)
                    alert('Delete Item');
                })
        }
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-24'>Your Task : {items?.length}</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    items?.map(item =>
                        <div key={item._id} class="card w-full bg-gray-200 shadow-xl">
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{item.task}</h2>
                                <p>{item.description}</p>
                                <div class="card-actions">
                                    <button class="btn btn-xs btn-primary">Complete</button>
                                    <button onClick={() => handleDelete(item._id)} class="btn btn-xs btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowTask;