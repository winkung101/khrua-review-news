
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useReviews } from "@/hooks/useReviews";
import { useCategories } from "@/hooks/useCategories";
import { Loader2 } from "lucide-react";

const Reviews = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: reviews, isLoading: reviewsLoading } = useReviews(
    selectedCategory === "ทั้งหมด" ? undefined : selectedCategory
  );

  const categoryOptions = categories ? ["ทั้งหมด", ...categories.map(cat => cat.name)] : ["ทั้งหมด"];

  if (categoriesLoading || reviewsLoading) {
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

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="รีวิว - KhruaNews"
        description="รีวิวสินค้าและบริการจากผู้เชี่ยวชาญ พร้อมคะแนนและข้อมูลที่ช่วยในการตัดสินใจ"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary/50 to-accent/30 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">รีวิว</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              รีวิวสินค้าและบริการจากผู้เชี่ยวชาญ พร้อมคะแนนและข้อมูลที่ช่วยในการตัดสินใจ
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categoryOptions.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {reviews && reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                  <ReviewCard 
                    key={review.id} 
                    id={review.id}
                    title={review.title}
                    excerpt={review.excerpt || ''}
                    image={review.image_url || '/placeholder.svg'}
                    category={review.categories?.name || 'ทั่วไป'}
                    rating={review.rating}
                    author="ผู้เขียน"
                    date={new Date(review.published_at).toLocaleDateString('th-TH')}
                    price={review.price_range}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">ไม่พบรีวิวในหมวดหมู่นี้</p>
              </div>
            )}

            {/* Load More Button */}
            {reviews && reviews.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  โหลดรีวิวเพิ่มเติม
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
