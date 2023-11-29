import React, { useState } from "react";
import Portal from "_components/Misc/Portal";

import './OffCanvas.css'

const OffCanvas = (props) => {
    const { heading, isOffcanvasShown = false, children } = props;

    const [ isActive, setIsActive ] = useState(isOffcanvasShown);

    if(!isActive){
        return null
    }


    return (
        <Portal>
             <div className={`offcanvas offcanvas-bottom ${isActive ? 'show' : ''}`}>
                <div className="offcanvas-header">
                    <h3 className="header-title">Edit Option</h3>
                    <span className="offcanvas-close" onClick={() => {setIsActive(false)}}>x</span>
                </div>
                
                <div className="offcanvas-body">
                    {children}
                </div>

                <div className="offcanvas-footer"></div>
            </div>
        </Portal>
    )
}

export default OffCanvas;

