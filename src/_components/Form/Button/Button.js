import React, { useState } from 'react'

import { defaultProps } from './props/defaultProps';
import { propTypes } from './props/propTypes';

import './Button.css'

const Button = (props) => {
    const { text, successText = 'Done', failureText = 'Oops! Try again', palette, customWrapClass, customClass, disabled = false, onClick, onAsyncClick } = props;
    
    const [ status, setStatus ] = useState('none');
    const [ buttonText, setButtonText ] = useState(text);
    
    const handleClick = (e) => {
        if(onAsyncClick){
            setStatus('loading')
            onAsyncClick(e)
            .then((res) => {
                setStatus('success')
                successText && setButtonText(successText)
            }).catch((err) => {
                setStatus('failure')
                failureText && setButtonText(failureText)
            })
            .finally(() => {
                setTimeout(() => {
                    setStatus('none')
                    setButtonText(text)
                }, 1500);
            });
        }

        if(onClick){
            onClick(e, text)
        }
       
    }

    let btnClass = `${status === 'loading' ? 'button--loading' : status}`;
    btnClass += customClass ? ` ${customClass}` : '';
    btnClass += palette ? ` ${palette}` : '';
    return (
        <div className={`${customWrapClass} action`}>
            <button 
                className={`${btnClass} action-button`} 
                onClick={handleClick} 
                disabled={disabled || status !== 'none'} 
            >
                <span className="button-text">{buttonText}</span>
            </button>
        </div>
    )
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes;

export default React.memo(Button)