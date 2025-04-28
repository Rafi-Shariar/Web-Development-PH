import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext);
    return (
        <div>
            <h1>User Profile</h1>
            <p>User email : {user.email}</p>
        </div>
    );
};

export default Profile;