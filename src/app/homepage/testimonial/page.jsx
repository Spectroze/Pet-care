import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../../../components/ui/carousel'
import { Card, CardContent } from '../../../components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { StarIcon } from '../../icon/icon'

export default function Testimonial() {
    return (
        <section id="testimonial" className="py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
                <div>
                    <h2 className="text-3xl font-bold">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground">
                        Hear from our satisfied customers about their experience
                        with PetCare Hub.
                    </p>
                </div>
                <Carousel className="w-full max-w-2xl">
                    <CarouselContent>
                        <CarouselItem>
                            <Card>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-center">
                                        <Avatar>
                                            <AvatarImage
                                                src="/placeholder-user.jpg"
                                                alt="User Avatar"
                                            />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <blockquote className="text-lg font-medium">
                                        "PetCare Hub has been a game-changer for
                                        my pet\n sitting needs. The platform is
                                        easy to use, and the\n sitters are
                                        reliable and trustworthy."
                                    </blockquote>
                                    <div className="flex items-center justify-center gap-2">
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <p className="text-muted-foreground">
                                        John Doe
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-center">
                                        <Avatar>
                                            <AvatarImage
                                                src="/placeholder-user.jpg"
                                                alt="User Avatar"
                                            />
                                            <AvatarFallback>JA</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <blockquote className="text-lg font-medium">
                                        "I've been using PetCare Hub for all my
                                        veterinary\n needs, and the service has
                                        been exceptional. The\n platform makes
                                        it easy to find and book appointments\n
                                        with trusted professionals."
                                    </blockquote>
                                    <div className="flex items-center justify-center gap-2">
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <p className="text-muted-foreground">
                                        Jane Appleseed
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-center">
                                        <Avatar>
                                            <AvatarImage
                                                src="/placeholder-user.jpg"
                                                alt="User Avatar"
                                            />
                                            <AvatarFallback>SM</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <blockquote className="text-lg font-medium">
                                        "I've been using PetCare Hub for both
                                        pet sitting and\n grooming services, and
                                        I'm consistently impressed by\n the
                                        quality of service and the care my pets
                                        receive."
                                    </blockquote>
                                    <div className="flex items-center justify-center gap-2">
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <p className="text-muted-foreground">
                                        Sarah Miller
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}
