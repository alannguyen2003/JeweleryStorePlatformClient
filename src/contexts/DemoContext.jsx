import { React, createContext } from "react";
import Header from "../components/Layout/Header/Header";

export const DemoContext = createContext();

export const DemoContextProvider = ({children}) => {
    
    function getTotalCart() {
        return 5;
    }
    const contextValue = { getTotalCart };
    return <DemoContext.Provider value={contextValue}>
        {children}
    </DemoContext.Provider>
}
