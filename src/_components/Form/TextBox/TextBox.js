import React from "react"
import './TextBox.css'
import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

const TextBox = (props) => {
    const { inputType, value, id, name, disabled, labelName, placeHolder, validationMessage, onChange, customClass, customProps } = props; //regEx
    const { type, message } = validationMessage;


    const handleChange = (e) => {
        const value = e.target.value;
        const lastValue = value.slice(-1)
        
        onChange && onChange(value, id, lastValue, e)
    }
 
    
    return (
        <div className="input">
            <input 
                id={id}
                name={name}
                type={inputType} 
                value={value}
                className={`form-element ${customClass} ${type === 'error' ? ` danger` : ``}`} 
                placeholder={placeHolder} 
                autoComplete="false" 
                disabled={disabled} 
                onChange={handleChange}
                // onKeyUp={handleKeyUp}
                {...customProps}
            />
            {labelName ? (<label className="input-label">{labelName}</label>) : null}
            {message ? (<div className={`${type} validation-detail`}>{Array.isArray(message) ? <ul> {message.map(msg => <li key={`msg_${msg}`}>{msg}</li>)} </ul> : <p>{message}</p> }</div>) : null}
        </div>
    )
}

TextBox.defaultProps = defaultProps
TextBox.propTypes = propTypes;

export default React.memo(TextBox);