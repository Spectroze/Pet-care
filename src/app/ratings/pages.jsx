import { useState } from "react";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data for demonstration
const initialReviews = [
  {
    id: 1,
    rating: 4,
    comment: "Great service, very satisfied!",
    date: "2023-06-01",
  },
  {
    id: 2,
    rating: 5,
    comment: "Excellent product, highly recommended!",
    date: "2023-05-28",
  },
  {
    id: 3,
    rating: 3,
    comment: "Good, but could be better.",
    date: "2023-05-25",
  },
];

export default function Component() {
  const [reviews, setReviews] = useState(initialReviews);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
  };

  const handleSubmitReview = () => {
    if (userRating === 0) return; // Ensure a rating is selected

    const newReview = {
      id: reviews.length + 1,
      rating: userRating,
      comment: userComment,
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };

    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setUserComment("");
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Rate Your Experience</CardTitle>
          <CardDescription>
            Share your thoughts about our product or service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= userRating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingClick(star)} // Passing star instead of rating
                />
              ))}
            </div>
            <Textarea
              placeholder="Write your review here..."
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              rows={4}
            />
            <Button onClick={handleSubmitReview}>Submit Review</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
          <CardDescription>
            Average Rating: {averageRating.toFixed(1)} out of 5
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            {sortedReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
