import "./globals.css";
import Navbar from "../../src/app/Navbar";

export const metadata = {
  title: "ระบบจองตั๋วคอนเสิร์ต",
  description: "เว็บจองตั๋วคอนเสิร์ตด้วย Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
