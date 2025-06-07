
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const categories = ["ทั้งหมด", "เทคโนโลยี", "ธุรกิจ", "สุขภาพ", "การศึกษา", "บันเทิง"];

  // Mock data - ในอนาคตจะดึงจาก Supabase
  const articles = [
    {
      id: "1",
      title: "ปัญญาประดิษฐ์จะเปลี่ยนโลกอย่างไรในปี 2024",
      excerpt: "การพัฒนาของ AI ในปีนี้มีความก้าวหน้าอย่างน่าตื่นตาตื่นใจ จากการเรียนรู้ของเครื่องจักรไปจนถึงการประมวลผลภาษาธรรมชาติ...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "เทคโนโลยี",
      author: "สมชาย ใจดี",
      date: "7 มิ.ย. 2024",
      readTime: "5",
    },
    {
      id: "2",
      title: "เศรษฐกิจไทยในครึ่งปีหลัง คาดการณ์และแนวโน้ม",
      excerpt: "นักเศรษฐศาสตร์ชั้นนำวิเคราะห์สถานการณ์เศรษฐกิจไทยในช่วงครึ่งปีหลัง พร้อมแนะนำแนวทางการลงทุนที่เหมาะสม...",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      category: "ธุรกิจ",
      author: "วิชญา เศรษฐกิจ",
      date: "6 มิ.ย. 2024",
      readTime: "7",
    },
    {
      id: "3",
      title: "วิธีดูแลสุขภาพในช่วงหน้าฝน",
      excerpt: "หน้าฝนมาแล้ว! ต้องดูแลสุขภาพอย่างไร เพื่อป้องกันโรคที่มักเกิดขึ้นในฤดูกาล รวมทั้งเคล็ดลับการเสริมสร้างภูมิคุ้มกัน...",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      category: "สุขภาพ",
      author: "หมอหญิง สุขใจ",
      date: "5 มิ.ย. 2024",
      readTime: "4",
    },
    {
      id: "4",
      title: "ระบบการศึกษาใหม่ เน้นทักษะในศตวรรษที่ 21",
      excerpt: "การปฏิรูปการศึกษาไทยในยุคดิจิทัล เพื่อเตรียมเด็กไทยให้พร้อมสำหรับอนาคต ด้วยหลักสูตรที่เน้นการคิดเชิงวิเคราะห์...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      category: "การศึกษา",
      author: "ครูใหญ่ วิชาการ",
      date: "4 มิ.ย. 2024",
      readTime: "6",
    },
  ];

  const filteredArticles = selectedCategory === "ทั้งหมด" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
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
              {categories.map((category) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                โหลดข่าวเพิ่มเติม
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
