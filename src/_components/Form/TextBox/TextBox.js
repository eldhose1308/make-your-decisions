import React, { useEffect, useRef, useState } from "react"
import './TextBox.css'

import ClearIcon from "assets/icons/clear-icon.svg"

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

const TextBox = (props) => {
    const { inputType, value, id, name, disabled, labelName, placeHolder, validationMessage, onChange, onClick, onBlur, onSubmit, customClass, customProps, focusInput, inputRef } = props; //regEx
    const { type, message } = validationMessage;

    const [ inputValue, setInputValue ] = useState(value)

    const inputEle = useRef(null)

    useEffect(() => {
        focusInput && inputEle.current.focus();
    }, [focusInput]);

    const handleChange = (e) => {
        const value = e.target.value;
        const lastValue = value.slice(-1)
        
        setInputValue(value);

        onChange && onChange(value, id, lastValue, e)
    }
 
    const handleClick = (e) => {
        onClick && onClick(e)
    }

    const handleBlur = (e) => {
        onBlur && onBlur(e);
    }
    
    const handleClear = (e) => {
        
        setInputValue('')
    }

    const onKeyUp = (e) => {
        e.preventDefault();

        const { keyCode } = e;
        if(keyCode === 13){
            onSubmit && onSubmit(value, id, e)
        }
    }

    const handleRef = (ref) => {
        inputEle.current = ref;
        inputRef && inputRef(inputEle.current);
    }
    

    // useEffect(() => {
    //     if(focusInput){
    //         inputEle.current.autoFocus = true
    //     }
    // },[focusInput])
    


    return (
        <div className="input">
            <input 
                id={id}
                name={name}
                type={inputType} 
                value={inputValue}
                className={`form-element ${customClass} ${type === 'error' ? ` danger` : ``}`} 
                placeholder={placeHolder} 
                autoComplete="false" 
                disabled={disabled} 
                ref={handleRef}
                onChange={handleChange}
                onClick={handleClick}
                onBlur={handleBlur}
                onKeyUp={onKeyUp}
                // ref={inputEle}
                // onKeyUp={handleKeyUp}
                {...customProps}
            />
            
            {labelName ? (<label className="input-label">{labelName}</label>) : null}
            
            {inputValue.length > 3 ? (<button style={{ position: 'absolute', right: 10, zIndex: 2, background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={handleClear}><img className="icon" src={ClearIcon} alt="Clear" /></button>) : null }
            
            {message ? (<div className={`${type} validation-detail`}>{Array.isArray(message) ? <ul> {message.map(msg => <li key={`msg_${msg}`}>{msg}</li>)} </ul> : <p>{message}</p> }</div>) : null}
        </div>
    )
}

TextBox.defaultProps = defaultProps
TextBox.propTypes = propTypes;

export default React.memo(TextBox);