import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{
        isSideBarOpen,
        isSubmenuOpen,
        openSideBar,
        closeSideBar,
        openSubmenu,
        closeSubmenu,
    }}>{children}</AppContext.Provider>
}

//setup custom hooke
export const useGlobalContext = () => {
    return useContext(AppContext);
}
