'use client'
import React from 'react'
import Link from 'next/link'
import { PawPrintIcon } from '../app/icon/icon'

export default function Header() {
    return (
        <header className="bg-primary opacity-95 text-primary-foreground py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <PawPrintIcon className="h-6 w-6" />
                <span className="text-xl font-bold">PetCare Hub</span>
            </Link>
            <nav className="flex-1 flex items-center justify-end gap-6">
                <Link
                    href="#home"
                    className="hover:underline hover:text-secondary transition-colors"
                    prefetch={false}>
                    Home
                </Link>
                <Link
                    href="#services"
                    className="hover:underline hover:text-secondary transition-colors"
                    prefetch={false}>
                    Services
                </Link>
                <Link
                    href="#about"
                    className="hover:underline hover:text-secondary transition-colors"
                    prefetch={false}>
                    About Us
                </Link>
                <Link
                    href="#testimonials"
                    className="hover:underline hover:text-secondary transition-colors"
                    prefetch={false}>
                    Contact
                </Link>
                <Link
                    href="#testimonials"
                    className="hover:underline hover:text-secondary transition-colors"
                    prefetch={false}>
                    Testimonials
                </Link>
            </nav>
        </header>
    )
}
