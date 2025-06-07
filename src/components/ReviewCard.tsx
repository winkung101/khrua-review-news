
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ReviewCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  rating: number;
  author: string;
  date: string;
  price?: string;
}

const ReviewCard = ({
  id,
  title,
  excerpt,
  image,
  category,
  rating,
  author,
  date,
  price,
}: ReviewCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-0">
        <Link to={`/review/${id}`}>
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                {category}
              </Badge>
            </div>
            {price && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary">
                  {price}
                </Badge>
              </div>
            )}
          </div>
        </Link>
      </CardHeader>
      
      <CardContent className="p-6">
        <Link to={`/review/${id}`}>
          <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-muted text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            {rating}/5
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
