import Link from "next/link";
import "../globals.css";

export const metadata = {
  title: "Admin Panel - ระบบจองตั๋วคอนเสิร์ต",
  description: "หน้าผู้ดูแลระบบสำหรับจัดการข้อมูล",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-gray-100 text-black flex flex-col">
        {/* Navbar แนวนอน */}
        <header className="w-full bg-white shadow-md p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">Admin</h1>
          <nav className="flex gap-6">
            <Link href="/admin/" className="text-black hover:text-red-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/concerts" className="text-black hover:text-red-600 transition-colors">
              จัดการคอนเสิร์ต
            </Link>
            <Link href="/admin/customers" className="text-black hover:text-red-600 transition-colors">
              ลูกค้า
            </Link>
            <Link href="/admin/bookings" className="text-black hover:text-red-600 transition-colors">
              การจอง
            </Link>
            <Link href="/admin/reports" className="text-black hover:text-red-600 transition-colors">
              รายงาน
            </Link>
          </nav>
        </header>

        {/* ส่วนเนื้อหา */}
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
