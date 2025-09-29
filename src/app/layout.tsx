import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ระบบจองตั๋วคอนเสิร์ต",
  description: "เว็บจองตั๋วคอนเสิร์ตด้วย Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <nav className="w-full flex items-center justify-between px-8 py-4 border-b shadow-sm">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="bg-gray-200 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Home
            </Link>
            <div className="text-xl font-bold text-red-700">
              ระบบจองตั๋วคอนเสิร์ต
            </div>
          </div>
          <Link
            href="/login"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Login
          </Link>
        </nav>

        {/* เนื้อหาแต่ละหน้าจะมาแสดงตรงนี้ */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
