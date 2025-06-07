
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, FileText, Star, Users, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  const { user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div>กำลังโหลด...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="แอดมิน - KhruaNews"
        description="หน้าจัดการระบบสำหรับแอดมิน"
      />
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">แดชบอร์ดแอดมิน</h1>
            <p className="text-muted-foreground">จัดการเนื้อหาและระบบของเว็บไซต์</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">บทความทั้งหมด</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% จากเดือนที่แล้ว</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">รีวิวทั้งหมด</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% จากเดือนที่แล้ว</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ผู้ใช้ทั้งหมด</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">+100% จากเดือนที่แล้ว</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">การเข้าชมรวม</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% จากเดือนที่แล้ว</p>
              </CardContent>
            </Card>
          </div>

          {/* Management Tabs */}
          <Tabs defaultValue="articles" className="space-y-4">
            <TabsList>
              <TabsTrigger value="articles">จัดการบทความ</TabsTrigger>
              <TabsTrigger value="reviews">จัดการรีวิว</TabsTrigger>
              <TabsTrigger value="categories">จัดการหมวดหมู่</TabsTrigger>
              <TabsTrigger value="users">จัดการผู้ใช้</TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">บทความ</h3>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  เพิ่มบทความใหม่
                </Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>รายการบทความ</CardTitle>
                  <CardDescription>จัดการบทความทั้งหมดในระบบ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    ยังไม่มีบทความในระบบ
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">รีวิว</h3>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  เพิ่มรีวิวใหม่
                </Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>รายการรีวิว</CardTitle>
                  <CardDescription>จัดการรีวิวทั้งหมดในระบบ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    ยังไม่มีรีวิวในระบบ
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="categories" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">หมวดหมู่</h3>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  เพิ่มหมวดหมู่ใหม่
                </Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>รายการหมวดหมู่</CardTitle>
                  <CardDescription>จัดการหมวดหมู่ทั้งหมดในระบบ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    มีหมวดหมู่เริ่มต้น 9 หมวดหมู่
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">ผู้ใช้</h3>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>รายการผู้ใช้</CardTitle>
                  <CardDescription>จัดการผู้ใช้ทั้งหมดในระบบ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    มีผู้ใช้ในระบบ 1 คน (คุณ)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
