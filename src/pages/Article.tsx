
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useArticle } from "@/hooks/useArticles";
import { Badge } from "@/components/ui/badge";
import { Loader2, Clock, Eye, Calendar } from "lucide-react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticle(slug!);

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

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">ไม่พบบทความ</h1>
            <p className="text-muted-foreground">บทความที่คุณกำลังมองหาไม่มีอยู่</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={article.meta_title || article.title}
        description={article.meta_description || article.excerpt}
        image={article.og_image || article.image_url}
        type="article"
      />
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="secondary">
                {article.categories?.name || 'ทั่วไป'}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            {article.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">
                {article.excerpt}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>โดย ผู้เขียน</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.published_at).toLocaleDateString('th-TH')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.read_time || 5} นาที</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{article.views_count || 0} ครั้ง</span>
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          {article.image_url && (
            <div className="mb-8">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
