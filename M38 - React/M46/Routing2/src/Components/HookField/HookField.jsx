import React from 'react';
import useInputFrield from '../Hooks/useInputField';

const HookField = () => {

    const [name, nameOnChange] = useInputFrield('')

    const handleSubmit = e =>{
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit()}>
                <input type="text" onChange={nameOnChange} defaultValue={name}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookField;