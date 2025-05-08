import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {

    const {id,name,email,phone} = user;
    console.log(user);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/laptops');

    }
    

    const userStyle = {
        border : '2px solid red',
        padding : '5px'
    }
    return (
        <div style={userStyle}>

            <h3>{name}</h3>
            <p>Email : {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}> View</Link>
            <button onClick={handleNavigate}>Detailes of : {id}</button>
            
        </div>
    );
};

export default User;