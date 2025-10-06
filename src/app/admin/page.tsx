"use client";

import { concerts, customers, bookings } from "@/data/mockdata";

export default function AdminPage() {
  const totalConcerts = concerts.length;
  const totalCustomers = customers.length;
  const totalRevenue = bookings.reduce((sum, b) => sum + b.total, 0);

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-black">
      {/* หัวข้อใหญ่ */}
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        แดชบอร์ดผู้ดูแลระบบ
      </h1>

      {/* กล่องสรุปข้อมูล */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">คอนเสิร์ตรวม</h2>
          <p className="text-4xl font-bold text-red-600">{totalConcerts}</p>
          <p className="text-sm text-gray-500 mt-1">จำนวนคอนเสิร์ตทั้งหมด</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">จำนวนลูกค้า</h2>
          <p className="text-4xl font-bold text-red-600">{totalCustomers}</p>
          <p className="text-sm text-gray-500 mt-1">ลูกค้าทั้งหมดในระบบ</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">ยอดจองรวม</h2>
          <p className="text-4xl font-bold text-red-600">
            ฿{totalRevenue.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">รวมมูลค่าการจองทั้งหมด</p>
        </div>
      </div>

      {/* ส่วนแสดงคอนเสิร์ต */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-black">คอนเสิร์ตที่กำลังจัด</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-red-600 mb-1">
                {concert.title}
              </h3>
              <p className="text-sm text-gray-600">📅 {concert.dateLong}</p>
              <p className="text-sm text-gray-600">📍 {concert.subtitle}</p>
              <p className="mt-2 text-sm">
                💰 <span className="font-semibold">{Object.values(concert.prices).join(' / ')} บาท</span>
              </p>
              <p
                className={`mt-1 text-sm font-semibold ${
                  concert.ticketStatus === "SOLD OUT"
                    ? "text-gray-400"
                    : concert.ticketStatus === "ON SALE NOW"
                    ? "text-green-600"
                    : "text-blue-600"
                }`}
              >
                {concert.ticketStatus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ส่วนสรุปยอดจองล่าสุดแบบการ์ด */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">การจองล่าสุด</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.slice(0, 6).map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-red-600 mb-1">
                {b.concert}
              </h3>
              <p className="text-sm text-gray-700">👤 {b.customer}</p>
              <p className="text-sm text-gray-700">ที่นั่ง: {b.seats}</p>
              <p className="text-sm font-semibold text-green-600 mt-1">
                💸 ฿{b.total.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
