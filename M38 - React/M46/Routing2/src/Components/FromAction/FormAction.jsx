import React from 'react';

const FormAction = () => {

    const handleAction =(fromData)=>{
        console.log(fromData.get('name'))
    }

    return (
        <div>
            <form action={handleAction}>
                <input type="text" placeholder='name' name='name'/><br />
                <input type="text" placeholder='email' name='email'/><br />

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default FormAction;