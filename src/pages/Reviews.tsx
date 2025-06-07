
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const categories = ["ทั้งหมด", "อาหาร", "เทคโนโลยี", "ท่องเที่ยว", "ความงาม", "ไลฟ์สไตล์"];

  // Mock data - ในอนาคตจะดึงจาก Supabase
  const reviews = [
    {
      id: "1",
      title: "ร้านอาหารญี่ปุ่นสุดหรู ย่านสีลม",
      excerpt: "บรรยากาศดี อาหารอร่อย ราคาค่อนข้างแพงแต่คุ้มค่า เหมาะสำหรับมื้อพิเศษ ซูชิสดมาก วาซาบิเข้มข้น...",
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
      excerpt: "หลังจากใช้งานมา 3 เดือน สรุปข้อดีข้อเสียของ iPhone รุ่นใหม่ที่หลายคนรอคอย แบตเตอรี่อึด กล้องสวย ประสิทธิภาพดี...",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      category: "เทคโนโลยี",
      rating: 5,
      author: "เทคไนท์ รีวิว",
      date: "6 มิ.ย. 2024",
      price: "฿฿฿฿",
    },
    {
      id: "3",
      title: "เที่ยวเชียงใหม่ 3 วัน 2 คืน งบประหยัด",
      excerpt: "ไกด์เที่ยวเชียงใหม่ฉบับประหยัด แต่ได้ครบทุกประสบการณ์ จากวัดสวย ตลาดเด็ด อาหารอร่อย และที่พักน่ารัก...",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      category: "ท่องเที่ยว",
      rating: 4,
      author: "เที่ยวไทย ท่องโลก",
      date: "5 มิ.ย. 2024",
      price: "฿฿",
    },
    {
      id: "4",
      title: "ครีมกันแดด SPF 50+ สำหรับผิวมัน",
      excerpt: "ทดสอบครีมกันแดดสำหรับผิวมันที่ไม่เหนียวเหนอะหนะ ไม่อุดตัน กันแดดได้ดี เนื้อบางเบา ซึมซาบเร็ว...",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
      category: "ความงาม",
      rating: 4,
      author: "บิวตี้ เกิร์ล",
      date: "4 มิ.ย. 2024",
      price: "฿฿",
    },
  ];

  const filteredReviews = selectedCategory === "ทั้งหมด" 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
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

        {/* Reviews Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                โหลดรีวิวเพิ่มเติม
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
