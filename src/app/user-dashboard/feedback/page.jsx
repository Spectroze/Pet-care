'use client'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star as StarIcon } from 'lucide-react'

export default function Feedback() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const [rating, setRating] = useState(0)
    const [reviews, setReviews] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setReviews([...reviews, { name, email, feedback, rating }])
        setName('')
        setEmail('')
        setFeedback('')
        setRating(0)
    }

    const averageRating = reviews.length
        ? reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        : 0

    return (
        <Card className="mt-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-800 text-white rounded-t-lg">
                <CardTitle className="text-lg font-semibold">
                    Feedback
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="max-w-md mx-auto space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Give us your feedback
                        </h2>
                        <p className="text-muted-foreground">
                            Help us improve our product by sharing your
                            experience.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="feedback">Feedback</Label>
                            <Textarea
                                id="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                rows={4}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>Rating</Label>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className={`w-6 h-6 p-1 rounded-full transition-colors ${
                                            star <= rating
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                        }`}
                                        onClick={() => setRating(star)}>
                                        <StarIcon className="w-full h-full" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Button type="submit">Submit Feedback</Button>
                    </form>
                    {reviews.length > 0 && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <StarIcon className="w-6 h-6 fill-primary" />
                                <span className="text-2xl font-bold">
                                    {averageRating.toFixed(1)}
                                </span>
                                <span className="text-muted-foreground">
                                    ({reviews.length} reviews)
                                </span>
                            </div>
                            <div className="space-y-4">
                                {reviews.map((review, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Avatar className="w-8 h-8 border">
                                                <AvatarImage
                                                    src="/placeholder-user.jpg"
                                                    alt={review.name}
                                                />
                                                <AvatarFallback>
                                                    {review.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">
                                                    {review.name}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {review.email}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 ml-auto">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <StarIcon
                                                        key={star}
                                                        className={`w-4 h-4 ${
                                                            star <=
                                                            review.rating
                                                                ? 'fill-primary'
                                                                : 'fill-muted stroke-muted-foreground'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-muted-foreground">
                                            {review.feedback}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
