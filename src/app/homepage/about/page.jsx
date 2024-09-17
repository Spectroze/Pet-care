'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Paw, Heart, Shield, BookOpen, Leaf } from 'lucide-react'

const Facility360View = ({ src }) => (
    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
        <iframe
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0"
            title="360 degree view of facility"></iframe>
    </div>
)

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState('AboutUs')

    return (
        <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-amber-50 to-white">
            {/* Section: About */}
            <section className="mb-16 text-center">
                <h1 className="text-5xl font-bold mb-4 text-primary">
                    About Pawsome Care
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    At Pawsome Care, we're passionate about providing the best
                    care for your furry friends. Our mission is to create a
                    safe, loving, and enriching environment for pets while their
                    owners are away.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl font-semibold mb-4 text-primary">
                                <Heart className="mr-2" /> Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                We exist to provide peace of mind to pet owners
                                by offering exceptional care, personalized
                                attention, and a home-away-from-home experience
                                for their beloved companions.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl font-semibold mb-4 text-primary">
                                <Paw className="mr-2" /> Our Values
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Heart className="mr-2 text-primary" />{' '}
                                    Compassion for all animals
                                </li>
                                <li className="flex items-center">
                                    <Shield className="mr-2 text-primary" />{' '}
                                    Commitment to safety and well-being
                                </li>
                                <li className="flex items-center">
                                    <Paw className="mr-2 text-primary" />{' '}
                                    Transparency and trust
                                </li>
                                <li className="flex items-center">
                                    <BookOpen className="mr-2 text-primary" />{' '}
                                    Continuous learning and improvement
                                </li>
                                <li className="flex items-center">
                                    <Leaf className="mr-2 text-primary" />{' '}
                                    Environmental responsibility
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Section: Meet Our Team */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center text-primary">
                    Meet Our Team
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'Dr. Sarah Johnson',
                            role: 'Head Veterinarian',
                            bio: 'With over 15 years of experience, Dr. Johnson ensures the health and safety of all our furry guests.',
                            image: '/placeholder.svg?height=200&width=200'
                        },
                        {
                            name: 'Mike Thompson',
                            role: 'Lead Trainer',
                            bio: 'Certified in animal behavior, Mike specializes in positive reinforcement training techniques.',
                            image: '/placeholder.svg?height=200&width=200'
                        },
                        {
                            name: 'Emily Chen',
                            role: 'Grooming Specialist',
                            bio: "Emily's gentle touch and attention to detail make her a favorite among our four-legged clients.",
                            image: '/placeholder.svg?height=200&width=200'
                        }
                    ].map((member, index) => (
                        <Card
                            key={index}
                            className="bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4 border-4 border-primary"
                                />
                                <CardTitle className="text-center text-primary">
                                    {member.name}
                                </CardTitle>
                                <p className="text-muted-foreground text-center">
                                    {member.role}
                                </p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center">{member.bio}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Section: Our Story */}
            <section className="mb-16 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
                <h2 className="text-4xl font-bold mb-4 text-primary">
                    Our Story
                </h2>
                <p className="mb-4">
                    Founded in 2010 by lifelong animal lovers Jane and John Doe,
                    Pawsome Care started as a small in-home pet sitting service.
                    As demand grew, we expanded our services and moved to our
                    current state-of-the-art facility in 2015.
                </p>
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                    Key Milestones
                </h3>
                <ul className="space-y-2">
                    {[
                        { year: 2010, event: 'Pawsome Care founded' },
                        {
                            year: 2013,
                            event: 'Expanded to offer grooming services'
                        },
                        {
                            year: 2015,
                            event: 'Opened our current 10,000 sq ft facility'
                        },
                        { year: 2018, event: 'Launched our training programs' },
                        { year: 2020, event: 'Introduced veterinary services' },
                        {
                            year: 2022,
                            event: 'Reached our 10,000th happy customer'
                        }
                    ].map((milestone, index) => (
                        <li key={index} className="flex items-center">
                            <span className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                {milestone.year}
                            </span>
                            <span>{milestone.event}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Section: Our Facilities */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-4 text-center text-primary">
                    Our Facilities
                </h2>
                <p className="mb-4 text-center max-w-2xl mx-auto">
                    Our modern 10,000 sq ft facility is designed with your pet's
                    comfort and safety in mind. Explore our spaces through the
                    interactive 360° views below.
                </p>
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="indoor">Indoor Areas</TabsTrigger>
                        <TabsTrigger value="outdoor">Outdoor Areas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        <Card className="bg-white/80 backdrop-blur-sm shadow-md">
                            <CardContent className="p-4">
                                <ul className="list-disc list-inside mb-4 space-y-2">
                                    <li>
                                        Spacious, climate-controlled indoor play
                                        areas
                                    </li>
                                    <li>
                                        Secure outdoor play yards with shade
                                        structures
                                    </li>
                                    <li>
                                        Comfortable, private boarding suites
                                    </li>
                                    <li>State-of-the-art grooming salon</li>
                                    <li>
                                        On-site veterinary clinic for routine
                                        and emergency care
                                    </li>
                                    <li>
                                        24/7 monitoring and security systems
                                    </li>
                                </ul>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        '/placeholder.svg?height=200&width=300',
                                        '/placeholder.svg?height=200&width=300',
                                        '/placeholder.svg?height=200&width=300'
                                    ].map((src, index) => (
                                        <Image
                                            key={index}
                                            src={src}
                                            alt={`Facility image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="rounded-lg shadow-md"
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="indoor">
                        <Card className="bg-white/80 backdrop-blur-sm shadow-md">
                            <CardContent className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-primary">
                                    Indoor Play Areas and Boarding Suites
                                </h3>
                                <p className="mb-4">
                                    Experience our spacious indoor facilities,
                                    designed for your pet's comfort and
                                    enjoyment.
                                </p>
                                <Facility360View src="https://example.com/360-indoor-view" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="outdoor">
                        <Card className="bg-white/80 backdrop-blur-sm shadow-md">
                            <CardContent className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-primary">
                                    Outdoor Play Yards
                                </h3>
                                <p className="mb-4">
                                    Explore our secure and fun outdoor play
                                    areas where pets can enjoy the fresh air and
                                    exercise.
                                </p>
                                <Facility360View src="https://example.com/360-outdoor-view" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Section: Contact */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-4 text-center text-primary">
                    Get in Touch
                </h2>
                <Card className="bg-white/80 backdrop-blur-sm shadow-md">
                    <CardContent className="p-6">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="bg-white"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium mb-2">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="bg-white"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-lg font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Your Message"
                                    required
                                    className="bg-white"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
