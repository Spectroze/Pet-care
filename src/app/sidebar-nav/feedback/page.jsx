'use client'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Component() {
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
        <div className="max-w-md mx-auto p-6 space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Give us your feedback</h2>
                <p className="text-muted-foreground">
                    Help us improve our product by sharing your experience.
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
                                                className={`w-4 h-4 ${
                                                    star <= review.rating
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
    )
}

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
