
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">K</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">KhruaNews</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            หน้าแรก
          </Link>
          <Link to="/news" className="text-foreground hover:text-primary transition-colors">
            ข่าว
          </Link>
          <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">
            รีวิว
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            เกี่ยวกับเรา
          </Link>
        </nav>

        {/* Search and User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ค้นหาข่าว..."
              className="pl-10 w-64"
            />
          </div>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              หน้าแรก
            </Link>
            <Link
              to="/news"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ข่าว
            </Link>
            <Link
              to="/reviews"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              รีวิว
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </Link>
            <div className="pt-2">
              <Input
                placeholder="ค้นหาข่าว..."
                className="w-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
