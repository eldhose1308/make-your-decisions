import React from "react";
import Portal from "_components/Misc/Portal";

import './TopLoader.css'

const TopLoader = ({ isLoading = true }) => {
    if(!isLoading){
        return null
    }


    return (
        <Portal>
            <div id="top-loading"></div>
        </Portal>
    )
}

export default TopLoader;

