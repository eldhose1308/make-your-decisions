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
    return (
        <div className={`${customWrapClass} action`}>
            <button className={`${btnClass} ${customClass} action-button`} onClick={handleClick} disabled={status !== 'none'} >
                <span className="button-text">{buttonText}</span>
            </button>
        </div>
    )
}

// Button.defaultProps = 

export default React.memo(Button)