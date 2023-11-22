import React, { createContext, useContext, useState } from "react";
import TopLoader  from '_components/UI/TopLoader/TopLoader'

const LoaderContext = createContext();

const TopLoaderProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(false);

    const showTopLoader = () => {
        setIsLoading(true)
    }

    const hideTopLoader = () => {
        setIsLoading(false)
    }

    const loaderObj = [
        showTopLoader, hideTopLoader, isLoading
    ]

    return (
        <LoaderContext.Provider value={loaderObj}>
            <TopLoader isLoading={isLoading} />
            {children}
        </LoaderContext.Provider>
    )
}

const useTopLoader = () => {
    const context = useContext(LoaderContext);

    if(!context){
        throw new Error('useTopLoader must be used within TopLoaderProvider')
    }

    return context
}

export { TopLoaderProvider, useTopLoader };