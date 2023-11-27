import React from "react";

import './Toasts.css'

const Toasts = (props) => {
    const { isActive = false } = props;

    if(isActive){
        return (
            <div className="toast-box active">
                <div className="toast-box-icon">
                    <i className='bx bx-check'></i>
                </div>
                <div className="toast-box-text">
                    <p className="toast-heading">Success</p>
                    <p className="toast-description">Your changes saved successfully!</p>
                </div>
                <div className="toast-close">
                    <i className='bx bx-x' >x</i>
                </div>
            </div>
        )
    }
}

export default Toasts;