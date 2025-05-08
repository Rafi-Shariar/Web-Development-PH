import { useState } from "react";
const useInputFrield = (defaultValue) =>{

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFeildOnChange = e =>{
        setFieldValue(e.target.value);
    }

    return [fieldValue, handleFeildOnChange];

}

export default useInputFrield;