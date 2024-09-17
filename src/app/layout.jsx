'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import { LayoutProvider, useLayout } from '../context/LayoutContext'
import { useState, useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

// Function to fetch and return dynamic metadata (could be extended to fetch from API)
const fetchMetadata = () => {
    return {
        title: 'Pet-Care',
        description: 'A dynamically configured Next.js application'
    }
}

export default function RootLayout({ children }) {
    const [metadata, setMetadata] = useState(fetchMetadata())

    useEffect(() => {}, [])

    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body className={inter.className}>
                <SessionProvider>
                    <LayoutProvider>
                        <LayoutContent>{children}</LayoutContent>
                    </LayoutProvider>
                </SessionProvider>
            </body>
        </html>
    )
}
function LayoutContent({ children }) {
    const { showHeader, showFooter } = useLayout()
    return (
        <>
            {showHeader && <Header />}
            {children}
            {showFooter && <Footer />}
        </>
    )
}
