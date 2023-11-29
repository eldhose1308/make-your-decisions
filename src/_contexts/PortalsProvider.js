import React, { createContext, useContext, useState } from "react";
import OffCanvas  from '_components/UI/OffCanvas/OffCanvas'

const PortalsContext = createContext();

const PortalsProvider = ({ children }) => {
    const [ isOffcanvasShown, setIsOffcanvasShown ] = useState(false);


    const showOffCanvas = () => {
        setIsOffcanvasShown(true)
    }

    const hideOffCanvas = () => {
        setIsOffcanvasShown(false)
    }

    const offCanvasObj = [
        showOffCanvas, hideOffCanvas, isOffcanvasShown
    ]

    return (
        <PortalsContext.Provider value={offCanvasObj}>
            <OffCanvas isOffcanvasShown={isOffcanvasShown} />
            {children}
        </PortalsContext.Provider>
    )
}

const useOffCanvas = () => {
    const context = useContext(PortalsContext);

    if(!context){
        throw new Error('useOffCanvas must be used within PortalsProvider')
    }

    return context
}

export { PortalsProvider, useOffCanvas };