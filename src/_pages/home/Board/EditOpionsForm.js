import React, { useEffect, useRef, useState } from "react";

import { Button, TextBox } from "_components/Form";

const EditOptionForm = (props) => {
    const { optionObj = {}, onSubmit, focus } = props;
    const { id, optionId, value } = optionObj;


    const [ option, setOption ] = useState(value);
    const inputRef = useRef(null)

    const handleOptionChange = (value) => {
        setOption(value)
    }

    const handleUpdate = () => {
        const updatedObj = { value : option, id }
        
        id ? onSubmit && onSubmit(updatedObj, optionId) : alert(444)
    }

    const handleRef = (ref) => {
        inputRef.current = ref;
    }

   
    useEffect(() => {
        inputRef.current.focus()
    },[])

    return (
        <React.Fragment>
            <TextBox labelName="Update Option value" onSubmit={handleUpdate} inputRef={handleRef} onChange={handleOptionChange} value={option} />

            <Button text="Update" onClick={handleUpdate} customClass="w-20" />
        </React.Fragment>
    )

}

export default EditOptionForm;