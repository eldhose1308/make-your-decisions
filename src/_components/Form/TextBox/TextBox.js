import React from "react"
import './TextBox.css'

const TextBox = (props) => {
    const { inputType = 'text', value, id, name, disabled, labelName, placeHolder, validationMessage = {}, onChange, customClass, minLength, maxLength = 0, regEx, customProps } = props;
    const { type = 'error', message='' } = validationMessage;


    const handleChange = (e) => {
        const value = e.target.value;
        const lastValue = value.slice(-1)
        
        onChange && onChange(value, id, lastValue, e)
    }
 
    
    return (
        <div className="input">
            <input 
                id={`textbox_${id}`}
                type={inputType} 
                value={value}
                className={`form-element ${customClass}`} 
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

export default React.memo(TextBox);