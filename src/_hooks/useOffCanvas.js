import { useState } from "react";


const useOffCanvas = () => {
    const [ isOffcanvasShown, setIsOffcanvasShown ] = useState(false);


    const showOffCanvas = () => {
        setIsOffcanvasShown(true)
    }

    const hideOffCanvas = () => {
        setIsOffcanvasShown(false)
    }

    return {
        showOffCanvas, hideOffCanvas, isOffcanvasShown
    }

}

export default useOffCanvas;