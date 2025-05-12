import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const user = useLoaderData();

    const handleUpdateUser = (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = {name,email};

        //update in DB
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)


        })
        .then( res => res.json())
        .then( (data) => {
            if(data.modifiedCount){
                alert('Updated Data');
            }

        })
    }
    return (
        <div>
            <h1>Update User</h1>
            <h3>OLD Data :</h3>
            {user.name} <br />
            {user.email} <br />

            <h3>New Data</h3>
            <div>
                <form onSubmit={handleUpdateUser}>
                    <input type="text" name='name'/> <br />
                    <input type="email" name='email'/><br />
                    <input type="submit" value='Update User'/>
                </form>
            </div>
        </div>
    );
};

export default Update;