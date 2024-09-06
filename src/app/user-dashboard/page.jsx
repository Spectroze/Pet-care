'use client'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
    Bell,
    Calendar,
    FileText,
    MessageSquare,
    Settings,
    Star,
    DollarSign,
    Clipboard,
    Home,
    User,
    Calendar as CalendarIcon,
    FileText as HealthIcon,
    Bell as NotificationIcon,
    Star as FeedbackIcon,
    Clipboard as CarePlanIcon,
    Settings as SettingsIcon,
    Menu,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function PetcareDashboard() {
    const [activeSection, setActiveSection] = useState('overview')
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const renderContent = () => {
        switch (activeSection) {
            case 'overview':
                return (
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
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
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
                                        <Clipboard className="h-4 w-4 text-muted-foreground" />
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
                                            2
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                )
            case 'profile':
                return (
                    <>
                        <Card>
                            <CardHeader>
                                <CardTitle>User Profile</CardTitle>
                                <CardDescription>
                                    Manage your personal and pet information
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage
                                                src="/placeholder.svg?height=80&width=80"
                                                alt="User"
                                            />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <Button>Change Photo</Button>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea
                                            id="bio"
                                            placeholder="Tell us about yourself and your pets"
                                        />
                                    </div>
                                    <Button>Save Changes</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle>Pet Profiles</CardTitle>
                                <CardDescription>
                                    Manage your pets' information
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage
                                                src="/placeholder.svg?height=64&width=64"
                                                alt="Pet"
                                            />
                                            <AvatarFallback>PET</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Buddy
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Golden Retriever, 3 years old
                                            </p>
                                        </div>
                                        <Button variant="outline">Edit</Button>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage
                                                src="/placeholder.svg?height=64&width=64"
                                                alt="Pet"
                                            />
                                            <AvatarFallback>PET</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Whiskers
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Tabby Cat, 2 years old
                                            </p>
                                        </div>
                                        <Button variant="outline">Edit</Button>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Add New Pet</Button>
                            </CardFooter>
                        </Card>
                    </>
                )
            case 'appointments':
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Appointments</CardTitle>
                            <CardDescription>
                                Schedule and manage your pet care appointments
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">
                                            Veterinary Check-up
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            July 15, 2023 at 2:00 PM
                                        </p>
                                    </div>
                                    <Button variant="outline">
                                        Reschedule
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">
                                            Grooming Session
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            July 22, 2023 at 10:00 AM
                                        </p>
                                    </div>
                                    <Button variant="outline">
                                        Reschedule
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">
                                            Training Class
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            July 29, 2023 at 3:00 PM
                                        </p>
                                    </div>
                                    <Button variant="outline">
                                        Reschedule
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                Book New Appointment
                            </Button>
                        </CardFooter>
                    </Card>
                )
            case 'health':
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Health Records</CardTitle>
                            <CardDescription>
                                Manage your pets' health information
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Vaccinations
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Rabies - June 15, 2023</li>
                                        <li>Distemper - June 15, 2023</li>
                                        <li>Bordetella - January 10, 2023</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Medications
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Heartworm Prevention - Monthly</li>
                                        <li>
                                            Flea and Tick Prevention - Monthly
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Recent Treatments
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Dental Cleaning - May 5, 2023</li>
                                        <li>Allergy Test - April 12, 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                Add Health Record
                            </Button>
                        </CardFooter>
                    </Card>
                )
            case 'notifications':
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>
                                Manage your alerts and reminders
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <Bell className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <h3 className="font-semibold">
                                                Upcoming Vet Appointment
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Tomorrow at 2:00 PM
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Dismiss
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <Bell className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <h3 className="font-semibold">
                                                Medication Reminder
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Give heartworm prevention pill
                                                today
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Dismiss
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <Bell className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <h3 className="font-semibold">
                                                Vaccination Due
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Bordetella vaccination due in 2
                                                weeks
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Dismiss
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            case 'feedback':
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Feedback and Reviews</CardTitle>
                            <CardDescription>
                                Share your experiences and read others' reviews
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Your Recent Reviews
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Star className="h-5 w-5 text-yellow-400" />
                                            <Star className="h-5 w-5 text-yellow-400" />
                                            <Star className="h-5 w-5 text-yellow-400" />
                                            <Star className="h-5 w-5 text-yellow-400" />
                                            <Star className="h-5 w-5 text-muted-foreground" />
                                            <span className="text-sm font-medium">
                                                Happy Paws Veterinary Clinic
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Great service and caring staff.
                                            Highly recommended!
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Pending Reviews
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">
                                                Fluffy's Grooming Salon
                                            </span>
                                            <Button variant="outline" size="sm">
                                                Leave Review
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">
                                                Paw Perfect Training Center
                                            </span>
                                            <Button variant="outline" size="sm">
                                                Leave Review
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            case 'care-plans':
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Pet Care Plans</CardTitle>
                            <CardDescription>
                                Manage feeding, grooming, and training schedules
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Feeding Schedule
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>
                                            Breakfast: 7:00 AM - 1 cup dry food
                                        </li>
                                        <li>
                                            Dinner: 6:00 PM - 1 cup dry food +
                                            1/4 cup wet food
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Grooming Routine
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Brush teeth daily</li>
                                        <li>Brush coat 3 times a week</li>
                                        <li>Bath every 2 weeks</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold mb-2">
                                        Training Program
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>
                                            15 minutes of obedience training
                                            daily
                                        </li>
                                        <li>
                                            30 minutes of playtime and exercise
                                            twice daily
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Edit Care Plans</Button>
                        </CardFooter>
                    </Card>
                )
            case 'settings':
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings and Preferences</CardTitle>
                            <CardDescription>
                                Customize your dashboard experience
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="email-notifications">
                                            Email Notifications
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Receive email alerts for important
                                            updates
                                        </p>
                                    </div>
                                    <Switch id="email-notifications" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="sms-notifications">
                                            SMS Notifications
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Receive text message alerts for
                                            urgent matters
                                        </p>
                                    </div>
                                    <Switch id="sms-notifications" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="data-sharing">
                                            Data Sharing
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Allow sharing of non-sensitive data
                                            for service improvements
                                        </p>
                                    </div>
                                    <Switch id="data-sharing" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Save Preferences</Button>
                        </CardFooter>
                    </Card>
                )
            default:
                return null
        }
    }

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
                        <Button
                            variant={
                                activeSection === 'overview'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('overview')}>
                            <Home
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Overview</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'profile'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('profile')}>
                            <User
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Profile</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'appointments'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('appointments')}>
                            <CalendarIcon
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Appointments</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'health'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('health')}>
                            <HealthIcon
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Health Records</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'notifications'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('notifications')}>
                            <NotificationIcon
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Notifications</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'feedback'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('feedback')}>
                            <FeedbackIcon
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Feedback</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'care-plans'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('care-plans')}>
                            <CarePlanIcon
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Care Plans</span>}
                        </Button>
                        <Button
                            variant={
                                activeSection === 'settings'
                                    ? 'secondary'
                                    : 'ghost'
                            }
                            className={`w-full justify-start ${
                                !sidebarOpen && 'px-2'
                            }`}
                            onClick={() => setActiveSection('settings')}>
                            <SettingsIcon
                                className={`h-5 w-5 ${sidebarOpen && 'mr-2'}`}
                            />
                            {sidebarOpen && <span>Settings</span>}
                        </Button>
                    </nav>

                    {/* Sidebar Toggle */}
                    <Button
                        variant="ghost"
                        className="w-full justify-center mt-auto"
                        onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? (
                            <ChevronLeft className="h-5 w-5" />
                        ) : (
                            <ChevronRight className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between p-4 bg-white border-b">
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden mr-2"
                            onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                        <h1 className="text-xl font-bold">Petcare Dashboard</h1>
                    </div>
                    <Button>Add New Pet</Button>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                    {renderContent()}

                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Message Center</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            Dr. Smith (Vet)
                                        </span>
                                        <Button variant="outline" size="sm">
                                            View
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            Grooming Salon
                                        </span>
                                        <Button variant="outline" size="sm">
                                            View
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            Pet Sitter
                                        </span>
                                        <Button variant="outline" size="sm">
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">New Message</Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Billing & Subscriptions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            Premium Plan
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            $19.99/month
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            Next billing date
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            August 1, 2023
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">
                                    Manage Subscription
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Pet Insurance
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full">
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        Community Forum
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full">
                                        <DollarSign className="mr-2 h-4 w-4" />
                                        Donate
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Help Center
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}
