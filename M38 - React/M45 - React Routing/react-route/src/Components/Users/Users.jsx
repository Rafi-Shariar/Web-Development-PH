import React from 'react';
import { useRouteLoaderData } from 'react-router';

const Users = () => {

    const user = useRouteLoaderData();
    console.log(user);
    
    return (
        <div>
            <h2>User Page</h2>
            
        </div>
    );
};

export default Users;