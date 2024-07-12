import { React, createContext } from "react";
import Header from "../components/Layout/Header/Header";

export const HomePageContext = createContext();

export const HomePageContextProvider = (props) => {

    function getTotalCart() {
        return 2;
    }
    const contextValue = { getTotalCart };
    return <HomePageContext.Provider value={contextValue}>
        <Header/>
    </HomePageContext.Provider>
}
