
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useReview } from "@/hooks/useReviews";
import { Badge } from "@/components/ui/badge";
import { Loader2, Calendar, Eye, Star } from "lucide-react";

const Review = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: review, isLoading, error } = useReview(slug!);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !review) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">ไม่พบรีวิว</h1>
            <p className="text-muted-foreground">รีวิวที่คุณกำลังมองหาไม่มีอยู่</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={review.meta_title || review.title}
        description={review.meta_description || review.excerpt}
        image={review.og_image || review.image_url}
        type="article"
      />
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Review Header */}
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="secondary">
                {review.categories?.name || 'ทั่วไป'}
              </Badge>
              {review.price_range && (
                <Badge className="bg-primary">
                  {review.price_range}
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {review.title}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
              <span className="text-lg font-medium ml-2">
                {review.rating}/5
              </span>
            </div>
            
            {review.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">
                {review.excerpt}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>โดย {review.profiles?.full_name || 'ไม่ระบุผู้เขียน'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(review.published_at).toLocaleDateString('th-TH')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{review.views_count || 0} ครั้ง</span>
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          {review.image_url && (
            <div className="mb-8">
              <img
                src={review.image_url}
                alt={review.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          {/* Review Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Review;
