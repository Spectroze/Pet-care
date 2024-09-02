'use client'
import React, { createContext, useContext, useState } from 'react'

const LayoutContext = createContext()

export function LayoutProvider({ children }) {
    const [showHeader, setShowHeader] = useState(true)
    const [showFooter, setShowFooter] = useState(true)

    return (
        <LayoutContext.Provider
            value={{ showHeader, setShowHeader, showFooter, setShowFooter }}>
            {children}
        </LayoutContext.Provider>
    )
}

export function useLayout() {
    return useContext(LayoutContext)
}
