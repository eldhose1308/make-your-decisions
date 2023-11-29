import React, { useState } from "react";

import { TextBox } from "_components/Form";

import EditIcon from "assets/icons/edit-icon.svg"
import SaveIcon from "assets/icons/save-icon.svg"

import useValidationMsg from "_hooks/useValidationMsg";


import './EditableHeading.css'

const EditableHeading = (props) => {
    const { heading = 'Empty', onSubmit  } = props;

    const [ textBoxValue, setTextBoxValue ] = useState(heading)
    const [ isTextBoxVisible, setIsTextBoxVisible ] = useState(false)
    
    const { validationObj, setValidationObjError } = useValidationMsg({});

    const handleSave = () => {
        if(textBoxValue.length === 0){
            setValidationObjError('Should not be empty', 'headingTextBox')
        }else{
            setIsTextBoxVisible(false);
            onSubmit && onSubmit(textBoxValue)
        }
    }

    const handleEdit = () => {
        setIsTextBoxVisible(true);
    }

    const handleInsideClick = (e) => {
        e.stopPropagation();

        const { detail } = e;
        if(detail === 2){
            setIsTextBoxVisible(true)
        }
    }

    const handleOutsideClick = (e) => {
        // const { value = 'dd' } = e.target;
       
        // handleSave(value, e);
    } 

    const handleTextBoxChange = (value) => {
        setTextBoxValue(value)
    }

    return (
        <React.Fragment>
            <div className="editable-heading-container">
                {!isTextBoxVisible ? 
                ( 
                    <div className="d-flex">
                        <h4 className="editable-heading" onClick={handleInsideClick}>{textBoxValue}</h4> 
                        <span className="editable-heading-btn" onClick={handleEdit}>
                            <img className="icon" src={EditIcon} alt="edit-icon" />
                        </span>
                    </div>
                ) 
                : 
                (
                    <div className="d-flex">
                        <TextBox id="headingTextBox" validationMessage={validationObj.headingTextBox} value={textBoxValue} onChange={handleTextBoxChange} onBlur={handleOutsideClick} customClass="m-1" />
                        <span className="editable-heading-btn" onClick={handleSave}>
                            <img className="icon" src={SaveIcon} alt="edit-icon" />
                        </span>
                    
                    </div>
                ) }
            </div>
        </React.Fragment>
    )
}

export default EditableHeading;