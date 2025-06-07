
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useArticles } from "@/hooks/useArticles";
import { useCategories } from "@/hooks/useCategories";
import { Loader2 } from "lucide-react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: articles, isLoading: articlesLoading } = useArticles(
    selectedCategory === "ทั้งหมด" ? undefined : selectedCategory
  );

  const categoryOptions = categories ? ["ทั้งหมด", ...categories.map(cat => cat.name)] : ["ทั้งหมด"];

  if (categoriesLoading || articlesLoading) {
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
        title="ข่าวสาร - KhruaNews"
        description="ติดตามข่าวสารล่าสุดจากทุกสาขา พร้อมการวิเคราะห์เชิงลึกและข้อมูลที่น่าเชื่อถือ"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ข่าวสาร</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ติดตามข่าวสารล่าสุดจากทุกสาขา พร้อมการวิเคราะห์เชิงลึกและข้อมูลที่น่าเชื่อถือ
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

        {/* Articles Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {articles && articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard 
                    key={article.id} 
                    id={article.id}
                    title={article.title}
                    excerpt={article.excerpt || ''}
                    image={article.image_url || '/placeholder.svg'}
                    category={article.categories?.name || 'ทั่วไป'}
                    author="ผู้เขียน"
                    date={new Date(article.published_at).toLocaleDateString('th-TH')}
                    readTime={article.read_time?.toString() || '5'}
                    featured={article.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">ไม่พบข่าวสารในหมวดหมู่นี้</p>
              </div>
            )}

            {/* Load More Button */}
            {articles && articles.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  โหลดข่าวเพิ่มเติม
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

export default News;
