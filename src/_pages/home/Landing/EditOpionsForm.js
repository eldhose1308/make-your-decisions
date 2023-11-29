import React, { useState } from "react";

import { Button, TextBox } from "_components/Form";

const EditOptionForm = (props) => {
    const { optionObj, onSubmit } = props;
    const { id, value } = optionObj;


    const [ option, setOption ] = useState(value);

    const handleOptionChange = (value) => {
        setOption(value)
    }

    const handleUpdate = () => {
        const updatedObj = {value : option, id}
        onSubmit && onSubmit(updatedObj)
    }

   

    return (
        <React.Fragment>
            <TextBox labelName="Update Option value" onChange={handleOptionChange} value={option} />

            <Button text="Update" onClick={handleUpdate} customClass="w-20" />
        </React.Fragment>
    )

}

export default EditOptionForm;