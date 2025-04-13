import React, { use } from 'react';

const User2 = ({user2Promise}) => {
    const users = use(user2Promise);
    console.log('user 2', users);
    
    return (
        <div>
            <h1>User 2 Data Loading</h1>
        </div>
    );
};

export default User2;