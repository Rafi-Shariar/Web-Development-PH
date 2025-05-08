import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(emailRef.current.value);

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name='email' ref={emailRef}/><br />
                <input type="password" name='password' /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledField;