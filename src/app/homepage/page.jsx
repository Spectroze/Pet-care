'use client'
import React from 'react'
import Home from './home/page'
import Contact from './contact/page'
import Services from './services/page'
import Testimonial from './testimonial/page'

export default function landingpage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <Home />
                <Services />
                <Contact />
                <Testimonial />
            </main>
        </div>
    )
}
