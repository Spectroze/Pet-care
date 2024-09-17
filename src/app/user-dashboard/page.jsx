'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Bell as NotificationIcon,
    Calendar as CalendarIcon,
    FileText as HealthIcon,
    Star as FeedbackIcon,
    Clipboard as CarePlanIcon,
    Settings as SettingsIcon,
    ChevronLeft,
    ChevronRight,
    Home,
    User,
    DollarSign,
    MessageSquare,
    Star
} from 'lucide-react'
import Profile from '../user-dashboard/profile/page'
import Appointment from '../user-dashboard/appointment/page'
import Records from '../user-dashboard/records/page'
import Notification from '../user-dashboard/notification/page'
import Feedback from '../user-dashboard/feedback/page'
import Setting from '../user-dashboard/setting/page'
import Message from '../user-dashboard/message/page'
import Billing from '../user-dashboard/billing/page'

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'

const PetCareDashboard = async () => {
    const session = await getServerSession()
    if (!session) {
        redirect('/')
    }
    const [activeSection, setActiveSection] = useState('overview')
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const nav = [
        { icon: Home, title: 'Overview', id: 'overview' },
        { icon: User, title: 'Profile', id: 'profile' },
        { icon: CalendarIcon, title: 'Appointments', id: 'appointment' },
        { icon: HealthIcon, title: 'Records', id: 'records' },
        { icon: NotificationIcon, title: 'Notification', id: 'notification' },
        { icon: FeedbackIcon, title: 'Feedback', id: 'feedback' },
        { icon: SettingsIcon, title: 'Setting', id: 'setting' },
        { icon: MessageSquare, title: 'Message', id: 'message' },
        { icon: DollarSign, title: 'Billing', id: 'billing' }
    ]

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-white ${
                    sidebarOpen ? 'w-64' : 'w-20'
                } min-h-screen p-4 transition-all duration-300 ease-in-out`}>
                <div className="flex flex-col h-full">
                    {/* User Profile */}
                    <div className="flex flex-col items-center space-y-2 mb-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage
                                src="/placeholder.svg?height=80&width=80"
                                alt="User"
                            />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        {sidebarOpen && (
                            <div className="text-center">
                                <p className="text-sm font-medium text-gray-900">
                                    John Doe
                                </p>
                                <p className="text-xs text-gray-500">
                                    Pet Parent
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2 flex-1">
                        {nav.map(({ icon: Icon, title, id }) => (
                            <Button
                                key={id}
                                variant={
                                    activeSection === id ? 'secondary' : 'ghost'
                                }
                                className={`w-full justify-start ${
                                    !sidebarOpen && 'px-2'
                                }`}
                                onClick={() => setActiveSection(id)}>
                                <Icon
                                    className={`h-5 w-5 ${
                                        sidebarOpen && 'mr-2'
                                    }`}
                                />
                                {sidebarOpen && <span>{title}</span>}
                            </Button>
                        ))}
                    </nav>

                    {/* Sidebar Toggle */}
                    <div className="flex justify-center mt-4">
                        <Button
                            variant="outline"
                            onClick={() => setSidebarOpen(!sidebarOpen)}>
                            {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 overflow-y-auto">
                {/* Render content based on activeSection */}
                {activeSection === 'overview' && (
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                                <CardDescription>
                                    Quick snapshot of your pet care information
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Upcoming Appointments
                                            </CardTitle>
                                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                3
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Active Care Plans
                                            </CardTitle>
                                            <CarePlanIcon className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                2
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Unread Messages
                                            </CardTitle>
                                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                5
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Pending Reviews
                                            </CardTitle>
                                            <Star className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                1
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
                {activeSection === 'profile' && <Profile />}
                {activeSection === 'appointment' && <Appointment />}
                {activeSection === 'records' && <Records />}
                {activeSection === 'notification' && <Notification />}
                {activeSection === 'feedback' && <Feedback />}
                {activeSection === 'setting' && <Setting />}
                {activeSection === 'message' && <Message />}
                {activeSection === 'billing' && <Billing />}
                {/* Add content rendering logic for other sections here */}
            </main>
        </div>
    )
}

export default PetCareDashboard
