import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value, e.target.email.value);
        
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Name' name='name'/> <br />
                <input type="text" placeholder='email' name='email'/> <br />
                <input type="submit" value="Submit" />

            </form>
            
        </div>
    );
};

export default SimpleForm;