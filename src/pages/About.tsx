
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">เกี่ยวกับเรา</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              KhruaNews คือแหล่งข่าวสารและรีวิวที่น่าเชื่อถือ 
              มุ่งมั่นนำเสนอข้อมูลที่ถูกต้อง ครบถ้วน และเป็นประโยชน์แก่ผู้อ่าน
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">พันธกิจ</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    นำเสนอข่าวสารที่ถูกต้อง ทันสมัย และเป็นประโยชน์ต่อสังคม 
                    พร้อมรีวิวสินค้าและบริการที่ช่วยให้ผู้บริโภคตัดสินใจได้อย่างมีข้อมูล
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">วิสัยทัศน์</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    เป็นสื่อออนไลน์ชั้นนำที่ผู้คนไว้วางใจ 
                    สร้างสรรค์เนื้อหาคุณภาพที่เข้าถึงได้ง่าย และตอบโจทย์ความต้องการของผู้อ่านในทุกช่วงวัย
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-8">ค่านิยมของเรา</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ความถูกต้อง</h3>
                  <p className="text-muted-foreground">
                    ตรวจสอบข้อมูลอย่างละเอียด นำเสนอเฉพาะข่าวที่ผ่านการยืนยัน
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ความเป็นกลาง</h3>
                  <p className="text-muted-foreground">
                    นำเสนอข้อมูลอย่างเป็นธรรม ไม่มีอคติ เปิดมุมมองที่หลากหลาย
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ความใส่ใจ</h3>
                  <p className="text-muted-foreground">
                    เข้าใจความต้องการของผู้อ่าน สร้างเนื้อหาที่ตอบโจทย์จริง
                  </p>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">ทีมงาน</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                ทีมงานมืออาชีพที่มีประสบการณ์ในสื่อสารมวลชน นักเขียน และนักรีวิว 
                ที่มุ่งมั่นสร้างสรรค์เนื้อหาคุณภาพให้กับผู้อ่าน
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">บรรณาธิการอำนวยการ</h3>
                    <p className="text-muted-foreground text-sm">
                      ประสบการณ์ 15 ปี ในวงการสื่อสารมวลชน
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">หัวหน้าทีมข่าว</h3>
                    <p className="text-muted-foreground text-sm">
                      เชี่ยวชาญการวิเคราะห์ข่าวเศรษฐกิจและสังคม
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">หัวหน้าทีมรีวิว</h3>
                    <p className="text-muted-foreground text-sm">
                      ผู้เชี่ยวชาญการทดสอบและรีวิวสินค้า
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
