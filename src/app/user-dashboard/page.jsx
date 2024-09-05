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
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

// Configuration for sidebar navigation
const navItems = [
    { label: 'Dashboard', icon: <Home className="mr-2 h-4 w-4" />, route: '/' },
    {
        label: 'Service History',
        icon: <History className="mr-2 h-4 w-4" />,
        route: '/service-history'
    },
    {
        label: 'Notifications Center',
        icon: <Bell className="mr-2 h-4 w-4" />,
        route: '/notifications'
    },
    {
        label: 'Message Center',
        icon: <MessageCircle className="mr-2 h-4 w-4" />,
        route: '/messages'
    },
    {
        label: 'Feedback',
        icon: <MessageSquare className="mr-2 h-4 w-4" />,
        route: '/user-dashboard/feedback'
    },
    {
        label: 'Settings',
        icon: <Settings className="mr-2 h-4 w-4" />,
        route: '/settings'
    }
]

export default function PetOwnerDashboard() {
    const router = useRouter()
    const pathname = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [showFeedback, setShowFeedback] = useState(false)

    useEffect(() => {
        const openRoutes = [
            '/feedback',
            '/settings',
            '/',
            '/user-dashboard/feedback'
        ]
        if (openRoutes.some((route) => pathname.startsWith(route))) {
            setSidebarOpen(true)
        }
        setShowFeedback(pathname.startsWith('/user-dashboard/feedback'))
    }, [pathname])

    const handleNavigation = (route) => {
        router.push(route)
        if (route === '/user-dashboard/feedback') {
            setSidebarOpen(true)
            setShowFeedback(true)
        } else {
            setShowFeedback(false)
        }
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Hamburger Menu */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md focus:outline-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}>
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

            {/* Sidebar */}
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

                        <nav className="flex-grow">
                            <ul className="space-y-2">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start text-white hover:bg-gray-600 hover:text-white"
                                            onClick={() =>
                                                handleNavigation(item.route)
                                            }>
                                            {item.icon}
                                            {item.label}
                                        </Button>
                                    </li>
                                ))}
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
                    sidebarOpen ? 'ml-64' : 'ml-0'
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

                <div className="flex">
                    <div className={`flex-1 ${showFeedback ? 'mr-4' : ''}`}>
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Header for the Combined Card */}
                            <CardHeader className="flex flex-col space-y-4 bg-gray-800 text-gray-300 rounded-t-lg">
                                <div className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg font-semibold">
                                        My Appointments
                                    </CardTitle>
                                    <Button
                                        size="sm"
                                        className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                                        <PlusCircle className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg font-semibold">
                                        Quick Actions
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            {/* Content for the Combined Card */}
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Appointments Section */}
                                    <div className="space-y-4">
                                        {/* Example appointments data */}
                                        {[
                                            {
                                                title: 'Vet Appointment',
                                                date: '2024-09-10',
                                                time: '10:00 AM',
                                                description: 'Annual check-up'
                                            },
                                            {
                                                title: 'Training Session',
                                                date: '2024-09-15',
                                                time: '2:00 PM',
                                                description:
                                                    'Obedience training'
                                            }
                                        ].map((appointment, index) => (
                                            <div
                                                key={index}
                                                className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {appointment.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {appointment.date} -{' '}
                                                    {appointment.time}
                                                </p>
                                                <p className="text-gray-500">
                                                    {appointment.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Quick Actions Section */}
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                            <h4 className="text-lg font-semibold text-gray-800">
                                                Schedule a New Appointment
                                            </h4>
                                            <Button
                                                className="mt-2"
                                                onClick={() =>
                                                    handleNavigation(
                                                        '/schedule'
                                                    )
                                                }>
                                                Schedule Now
                                            </Button>
                                        </div>
                                        {/* Add more quick actions here */}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <AnimatePresence>
                        {showFeedback && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="w-1/3">
                                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader className="bg-gray-800 text-gray-300 rounded-t-lg">
                                        <CardTitle className="text-lg font-semibold">
                                            Feedback
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        {/* Add your feedback form or content here */}
                                        <p>
                                            This is where the feedback features
                                            will be displayed.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    )
}
