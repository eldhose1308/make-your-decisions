import React, { useEffect, useRef, useState } from "react";

import { Button, TextBox } from "_components/Form";
import useValidationMsg from "_hooks/useValidationMsg";
import { containsSpecialChars } from "_utils/Validations";

import './EditOptionsForm.css'

const EditOptionForm = (props) => {
    const { optionObj = {}, onSubmit, focus } = props;
    const { id, optionId, value, addMode } = optionObj;

    const { validationObj, setValidationObjError } = useValidationMsg();


    const [option, setOption] = useState(value);
    const inputRef = useRef(null)

    const handleOptionChange = (value, id, lastValue) => {
        const optionError = containsSpecialChars(value, id, lastValue)
        setValidationObjError(optionError, id)
        setOption(value)
    }



    const handleUpdate = () => {
        const updatedObj = { value: option, id }

        const optionError = containsSpecialChars(option)
        if (optionError) {
            setValidationObjError(optionError, 'optionText')
            return
        }

        onSubmit && onSubmit(updatedObj, optionId)
    }

    const handleRef = (ref) => {
        inputRef.current = ref;
    }

    useEffect(() => {
        setOption(value)
        inputRef.current.focus()
    }, [value])

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{`${addMode ? `Add` : `Update`} Option value`}</h3>
                </div>

                <div className="card-body">
                    <TextBox
                        id="optionText"
                        // labelName=
                        onSubmit={handleUpdate}
                        inputRef={handleRef}
                        onChange={handleOptionChange}
                        value={option}
                        validationMessage={validationObj.optionText}
                    />

                </div>
            </div>
            <Button text={`${addMode ? `Add` : `Update`}`} onClick={handleUpdate} customClass="w-50" />
        </React.Fragment>
    )

}

export default EditOptionForm;