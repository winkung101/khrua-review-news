
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">K</span>
              </div>
              <h3 className="text-lg font-bold">KhruaNews</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              แหล่งข่าวสารและรีวิวที่น่าเชื่อถือ นำเสนอข้อมูลที่ถูกต้องและเป็นประโยชน์
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">ลิงก์ด่วน</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                หน้าแรก
              </Link>
              <Link to="/news" className="block text-muted-foreground hover:text-foreground transition-colors">
                ข่าว
              </Link>
              <Link to="/reviews" className="block text-muted-foreground hover:text-foreground transition-colors">
                รีวิว
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">หมวดหมู่</h4>
            <div className="space-y-2">
              <Link to="/news/technology" className="block text-muted-foreground hover:text-foreground transition-colors">
                เทคโนโลยี
              </Link>
              <Link to="/news/business" className="block text-muted-foreground hover:text-foreground transition-colors">
                ธุรกิจ
              </Link>
              <Link to="/reviews/food" className="block text-muted-foreground hover:text-foreground transition-colors">
                รีวิวอาหาร
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">ติดต่อเรา</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>อีเมล: info@khruanews.com</p>
              <p>โทร: 02-xxx-xxxx</p>
              <p>แฟกซ์: 02-xxx-xxxx</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 KhruaNews. สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
