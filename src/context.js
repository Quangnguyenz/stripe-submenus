import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates)
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
        location
    }}>{children}</AppContext.Provider>
}

//setup custom hooke
export const useGlobalContext = () => {
    return useContext(AppContext);
}
