import React from 'react';
import { useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router';

const Users = ({usersPromise}) => {

    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers)
    


    const handleAddUser = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = {name,email};
        console.log(newUser);
        


        //create User in DB
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('data after creating user in the DB', data);
            if(data.insertedId){
                alert('user added successfully.')
                e.target.reset();

                newUser._id = data.insertedId;
                const newUsers = [...users, newUser];
                setUsers(newUsers);
            }
            
        })


    }

    const handleUserDelete = (id) =>{
        console.log(id);

        fetch(`http://localhost:3000/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {

            if(data.deletedCount){
                const remainingUsers = users.filter ( user => user._id !== id);
                setUsers(remainingUsers);
            }
        });
        

    }
    return (
        <div>
            {/* Add User */}
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name'/> <br />
                    <input type="email" name='email'/><br />
                    <input type="submit" value='Add User'/>
                </form>
            </div>

            {/* Views USer */}
            <div>
                {
                    users.map( user => <p key={user._id}> {user.name} : {user.email} 
                    <Link to={`users/${user._id}`}>Details</Link>
                    <Link to={`/update/${user._id}`}>Update</Link>
                     <button onClick={()=>{handleUserDelete(user._id)}}>x</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;