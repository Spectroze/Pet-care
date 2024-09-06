'use client'

import React, { useState, useEffect } from 'react'
import {
    LogOut,
    Home,
    MessageSquare,
    Settings,
    User,
    Mail,
    Phone,
    PlusCircle,
    History,
    Bell,
    MessageCircle
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useLayout } from '../../context/LayoutContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import Feedback from '../user-dashboard/feedback/page'
export default function PetOwnerDashboard() {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        router.push('/user-dashboard/feedback')
    }

    const { setShowHeader, setShowFooter } = useLayout()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        setShowHeader(false)
        setShowFooter(false)

        return () => {
            setShowHeader(true)
            setShowFooter(true)
        }
    }, [setShowHeader, setShowFooter])

    const [appointments, setAppointments] = useState([])

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const isFeedbackPage = pathname === '/user-dashboard/feedback'

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Hamburger Menu - Visible on all pages */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md focus:outline-none"
                onClick={toggleSidebar}>
                <motion.div
                    className="w-6 h-5 flex flex-col justify-between"
                    initial={false}
                    animate={sidebarOpen ? 'open' : 'closed'}>
                    <motion.span
                        className="w-full h-0.5 bg-white"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 9 }
                        }}
                    />
                    <motion.span
                        className="w-full h-0.5 bg-white"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                    />
                    <motion.span
                        className="w-full h-0.5 bg-white"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -9 }
                        }}
                    />
                </motion.div>
            </button>

            {/* Sidebar - Visible when toggled */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30
                        }}
                        className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white p-4 flex flex-col overflow-auto">
                        {/* Profile Photo Upload */}
                        <div className="mb-6 text-center">
                            <label
                                htmlFor="profile-upload"
                                className="cursor-pointer">
                                <Avatar className="w-20 h-20 mx-auto mb-2 border-4 border-white shadow-lg">
                                    <AvatarImage
                                        src="/placeholder.svg"
                                        alt="Profile"
                                    />
                                    <AvatarFallback>AG</AvatarFallback>
                                </Avatar>
                                <span className="text-xs bg-white text-gray-800 px-2 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                                    Upload Photo
                                </span>
                            </label>
                            <input
                                id="profile-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    console.log(
                                        'File selected:',
                                        e.target.files[0]
                                    )
                                }}
                            />
                        </div>

                        {/* Profile Information */}
                        <div className="mb-6 bg-gray-200 rounded-lg p-4">
                            <h2 className="text-lg font-semibold mb-2 text-center text-black">
                                Allod Galindo
                            </h2>
                            <ul className="space-y-2 text-sm text-black">
                                <li className="flex items-center">
                                    <User className="mr-2 h-4 w-4 text-gray-600" />
                                    Pet Owner
                                </li>
                                <li className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-gray-600" />
                                    allod@example.com
                                </li>
                                <li className="flex items-center">
                                    <Phone className="mr-2 h-4 w-4 text-gray-600" />
                                    (555) 123-4567
                                </li>
                            </ul>
                        </div>

                        <Separator className="my-4 bg-gray-300" />

                        <div className="flex items-center mb-6"></div>
                        <nav className="flex-grow">
                            <ul className="space-y-2">
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-gray-600 hover:text-white"
                                        onClick={() =>
                                            router.push('/user-dashboard')
                                        }>
                                        <Home className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-gray-600 hover:text-white">
                                        <History className="mr-2 h-4 w-4" />
                                        Service History
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-gray-600 hover:text-white">
                                        <Bell className="mr-2 h-4 w-4" />
                                        Notifications Center
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-gray-600 hover:text-white">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        Message Center
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-gray-600 hover:text-white"
                                        onClick={handleClick}>
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        Feedback
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-white hover:bg-gray-600 hover:text-white"
                                        onClick={() =>
                                            router.push(
                                                '/user-dashboard/settings'
                                            )
                                        }>
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                        <div className="mt-auto">
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-white hover:bg-gray-600 hover:text-white">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log Out
                            </Button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main
                className={`flex-1 p-8 overflow-auto transition-all duration-300 ease-in-out ${
                    sidebarOpen ? 'sm:ml-64' : ''
                }`}>
                <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome back, Pet-care mamshie!
                    </h2>
                    <Avatar className="w-12 h-12 border-2 border-gray-400">
                        <AvatarImage
                            src="/placeholder.svg"
                            alt="Allod Galindo"
                        />
                        <AvatarFallback>AG</AvatarFallback>
                    </Avatar>
                </header>

                {isFeedbackPage ? (
                    <Feedback />
                ) : (
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Header for the Combined Card */}
                        <CardHeader className="flex flex-col space-y-2">
                            <CardTitle>Manage Appointments</CardTitle>
                        </CardHeader>

                        {/* Body content */}
                        <CardContent>
                            <div className="text-center">
                                <Button variant="secondary">
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Add New Appointment
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </main>
        </div>
    )
}
