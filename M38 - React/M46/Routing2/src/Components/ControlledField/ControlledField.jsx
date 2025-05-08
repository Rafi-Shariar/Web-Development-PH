import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('23has3');
    const handlePasswordOnChange =(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)

        if(password.length < 6){
            setError('Password must be 6 character');
        }
        else{
            setError('');
        }
    }

    const [error, setError] = useState('');



    const handleSubmit = (e) =>{
        e.prevenDefault();
    
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='emial'  name='email'/><br />

                <input type="password" placeholder='password' name='password' defaultValue={password} onChange={handlePasswordOnChange}/>

                <input type="submit" value="Submit" />
            </form>
            <p>
                <small>{error}</small>
            </p>
        </div>
    );
    
};

export default ControlledField;
