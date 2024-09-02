'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import { LayoutProvider, useLayout } from '../context/LayoutContext'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

// Function to fetch and return dynamic metadata (could be extended to fetch from API)
const fetchMetadata = () => {
    return {
        title: 'Dynamic Next App',
        description: 'A dynamically configured Next.js application'
    }
}

export default function RootLayout({ children }) {
    const [metadata, setMetadata] = useState(fetchMetadata())

    // Dynamic updates for metadata, e.g., based on route or other factors
    useEffect(() => {
        // Example: Update metadata based on route or user state
        // setMetadata(fetchMetadata())
    }, [])

    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {/* Additional meta tags and SEO optimizations */}
            </head>
            <body className={inter.className}>
                <LayoutProvider>
                    <LayoutContent>{children}</LayoutContent>
                </LayoutProvider>
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
