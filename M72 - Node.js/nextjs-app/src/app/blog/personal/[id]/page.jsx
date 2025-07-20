import React from 'react';

const PersonalBlogDetailsPage = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>Personal Bogs</h1>
            <h1>ID : {id} </h1>
            
        </div>
    );
};

export default PersonalBlogDetailsPage;