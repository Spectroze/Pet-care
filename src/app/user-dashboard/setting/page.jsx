'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User, Lock, Palette, Globe } from 'lucide-react'
export default function Settings() {
    const [darkMode, setDarkMode] = useState(false)
    const [twoFactor, setTwoFactor] = useState(false)

    return (
        <Tabs defaultValue="profile" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">
                    <User className="mr-2 h-4 w-4" /> Profile
                </TabsTrigger>
                <TabsTrigger value="security">
                    <Lock className="mr-2 h-4 w-4" /> Security
                </TabsTrigger>
                <TabsTrigger value="theme">
                    <Palette className="mr-2 h-4 w-4" /> Theme
                </TabsTrigger>
                <TabsTrigger value="language">
                    <Globe className="mr-2 h-4 w-4" /> Language
                </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                        <CardDescription>
                            Manage your personal information and pet profiles.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src="/placeholder.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Button>Change Picture</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Your phone number"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Pet Profiles</Label>
                            <Button>Add New Pet</Button>
                            {/* Here you would map through existing pet profiles */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="security">
                <Card>
                    <CardHeader>
                        <CardTitle>Account Security</CardTitle>
                        <CardDescription>
                            Manage your account security settings.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">
                                Current Password
                            </Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">
                                Confirm New Password
                            </Label>
                            <Input id="confirm-password" type="password" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="two-factor"
                                checked={twoFactor}
                                onCheckedChange={setTwoFactor}
                            />
                            <Label htmlFor="two-factor">
                                Enable Two-Factor Authentication
                            </Label>
                        </div>
                        <div className="space-y-2">
                            <Label>Recent Account Activity</Label>
                            {/* Here you would display recent account activity */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Update Security Settings</Button>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="theme">
                <Card>
                    <CardHeader>
                        <CardTitle>Theme and Display Options</CardTitle>
                        <CardDescription>
                            Customize your dashboard appearance.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="dark-mode"
                                checked={darkMode}
                                onCheckedChange={setDarkMode}
                            />
                            <Label htmlFor="dark-mode">Dark Mode</Label>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="color-scheme">Color Scheme</Label>
                            <Select>
                                <SelectTrigger id="color-scheme">
                                    <SelectValue placeholder="Select a color scheme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="default">
                                        Default
                                    </SelectItem>
                                    <SelectItem value="nature">
                                        Nature
                                    </SelectItem>
                                    <SelectItem value="ocean">Ocean</SelectItem>
                                    <SelectItem value="sunset">
                                        Sunset
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="font-size">Font Size</Label>
                            <Select>
                                <SelectTrigger id="font-size">
                                    <SelectValue placeholder="Select a font size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="medium">
                                        Medium
                                    </SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Apply Theme Settings</Button>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="language">
                <Card>
                    <CardHeader>
                        <CardTitle>Language Settings</CardTitle>
                        <CardDescription>
                            Choose your preferred language.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="language">Select Language</Label>
                            <Select>
                                <SelectTrigger id="language">
                                    <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Español</SelectItem>
                                    <SelectItem value="fr">Français</SelectItem>
                                    <SelectItem value="de">Deutsch</SelectItem>
                                    <SelectItem value="ja">日本語</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Language Preference</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
