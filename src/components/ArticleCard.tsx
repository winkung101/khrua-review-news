
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  featured = false,
}: ArticleCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <CardHeader className="p-0">
        <Link to={`/article/${id}`}>
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={title}
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                featured ? 'h-64 md:h-80' : 'h-48'
              }`}
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                {category}
              </Badge>
            </div>
          </div>
        </Link>
      </CardHeader>
      
      <CardContent className="p-6">
        <Link to={`/article/${id}`}>
          <h3 className={`font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {title}
          </h3>
        </Link>
        <p className={`text-muted-foreground line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <span>{readTime} นาที</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
