'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import LoginModal from '../modals/signin'
import { PawPrintIcon, BellIcon } from '../app/icon/icon'

export default function Header() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false)

    const handleLogin = () => {
        console.log('User logged in')
        setLoginModalOpen(false)
    }

    return (
        <header className="bg-primary opacity-95 text-primary-foreground py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <PawPrintIcon className="h-6 w-6" />
                <span className="text-xl font-bold">PetCare Hub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link
                    href="/homepage"
                    className="hover:underline"
                    prefetch={false}>
                    Home
                </Link>
                <Link
                    href="../homepage/services"
                    className="hover:underline"
                    prefetch={false}>
                    Services
                </Link>
                <Link
                    href="../homepage/about"
                    className="hover:underline"
                    prefetch={false}>
                    About Us
                </Link>
                <Link
                    href="../homepage/testimonial"
                    className="hover:underline"
                    prefetch={false}>
                    Testimonials
                </Link>
                <Link
                    href="../homepage/form"
                    className="hover:underline"
                    prefetch={false}>
                    Form
                </Link>
                <Link
                    href="../homepage/contact"
                    className="hover:underline"
                    prefetch={false}>
                    Contact
                </Link>
            </nav>
            <div className="flex items-center gap-4">
                <Button
                    onClick={() => setLoginModalOpen(true)}
                    variant="outline"
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Sign In
                </Button>
                {isLoginModalOpen && (
                    <LoginModal
                        onClose={() => setLoginModalOpen(false)}
                        onLogin={handleLogin}
                    />
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20 relative">
                    <BellIcon className="h-6 w-6" />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs font-bold text-white flex items-center justify-center">
                        3
                    </div>
                </Button>
            </div>
        </header>
    )
}
