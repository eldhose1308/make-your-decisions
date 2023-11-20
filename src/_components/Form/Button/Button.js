import React, { useState } from 'react'
import './Button.css'

const Button = (props) => {
    const { text, successText = 'Done', failureText = 'Oops! Try again', palette, customWrapClass, customClass, disabled = false, onClick, onAsyncClick } = props;
    
    const [ status, setStatus ] = useState('none');
    const [ buttonText, setButtonText ] = useState(text);
    
    const handleClick = (e) => {
        if(onAsyncClick){
            setStatus('loading')
            onAsyncClick(e)
            .then(() => {
                setStatus('success')
                successText && setButtonText(successText)
            }).catch(() => {
                setStatus('failure')
                failureText && setButtonText(failureText)
            })
            .finally(() => {
                setTimeout(() => {
                    setStatus('none')
                    setButtonText(text)
                }, 1000);
            });
        }

        if(onClick){
            onClick(e, text)
        }
       
    }

    const btnClass = `${status === 'loading' ? 'button--loading' : status}`;
    return (
        <div className={`${customWrapClass} action`}>
            <button className={`${btnClass} ${customClass} action-button`} onClick={handleClick} disabled={status === 'loading'} >
                <span className="button-text">{buttonText}</span>
            </button>
        </div>
    )
}

// Button.defaultProps = 

export default Button