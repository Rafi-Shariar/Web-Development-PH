import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const  user = useLoaderData();
    return (
        <div>
            <h1>User Details</h1>
            {user.name} <br />
            {user.email}
        </div>
    );
};

export default UserDetail;