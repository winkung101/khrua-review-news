
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";

const Index = () => {
  // Mock data - ในอนาคตจะดึงจาก Supabase
  const featuredArticles = [
    {
      id: "1",
      title: "ปัญญาประดิษฐ์จะเปลี่ยนโลกอย่างไรในปี 2024",
      excerpt: "การพัฒนาของ AI ในปีนี้มีความก้าวหน้าอย่างน่าตื่นตาตื่นใจ จากการเรียนรู้ของเครื่องจักรไปจนถึงการประมวลผลภาษาธรรมชาติที่ทำให้เครื่องจักรเข้าใจภาษามนุษย์ได้ดีขึ้น",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "เทคโนโลยี",
      author: "สมชาย ใจดี",
      date: "7 มิ.ย. 2024",
      readTime: "5",
      featured: true,
    },
    {
      id: "2",
      title: "เศรษฐกิจไทยในครึ่งปีหลัง",
      excerpt: "นักเศรษฐศาสตร์ชั้นนำวิเคราะห์สถานการณ์เศรษฐกิจไทย",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      category: "ธุรกิจ",
      author: "วิชญา เศรษฐกิจ",
      date: "6 มิ.ย. 2024",
      readTime: "7",
    },
    {
      id: "3",
      title: "วิธีดูแลสุขภาพในช่วงหน้าฝน",
      excerpt: "เคล็ดลับการดูแลสุขภาพเพื่อป้องกันโรคในฤดูฝน",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      category: "สุขภาพ",
      author: "หมอหญิง สุขใจ",
      date: "5 มิ.ย. 2024",
      readTime: "4",
    },
  ];

  const latestReviews = [
    {
      id: "1",
      title: "ร้านอาหารญี่ปุ่นสุดหรู ย่านสีลม",
      excerpt: "บรรยากาศดี อาหารอร่อย ราคาค่อนข้างแพงแต่คุ้มค่า",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
      category: "อาหาร",
      rating: 4,
      author: "นักชิม กินเก่ง",
      date: "7 มิ.ย. 2024",
      price: "฿฿฿",
    },
    {
      id: "2",
      title: "iPhone 15 Pro Max ใช้งานจริง 3 เดือน",
      excerpt: "รีวิวหลังใช้งานจริง ข้อดีข้อเสียที่ควรรู้",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      category: "เทคโนโลยี",
      rating: 5,
      author: "เทคไนท์ รีวิว",
      date: "6 มิ.ย. 2024",
      price: "฿฿฿฿",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4" variant="secondary">
                ยินดีต้อนรับสู่ KhruaNews
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                แหล่งข่าวสารและรีวิว
                <br />ที่น่าเชื่อถือ
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                ติดตามข่าวสารล่าสุดและรีวิวสินค้าบริการจากผู้เชี่ยวชาญ 
                ข้อมูลครบถ้วน ถูกต้อง เพื่อการตัดสินใจที่ดีที่สุด
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/news">
                    อ่านข่าวล่าสุด
                    <ArrowUp className="ml-2 w-4 h-4 rotate-45" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/reviews">ดูรีวิวสินค้า</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">ข่าวเด่นวันนี้</h2>
              <Button variant="outline" asChild>
                <Link to="/news">ดูทั้งหมด</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Reviews */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">รีวิวล่าสุด</h2>
              <Button variant="outline" asChild>
                <Link to="/reviews">ดูทั้งหมด</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestReviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">รับข่าวสารล่าสุด</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                สมัครรับข่าวสารและรีวิวใหม่ล่าสุด ส่งตรงถึงอีเมลของคุณทุกสัปดาห์
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="กรอกอีเมลของคุณ"
                  className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
                />
                <Button>สมัครรับข่าว</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
