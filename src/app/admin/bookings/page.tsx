"use client";
import { bookings } from "@/data/mockdata";

export default function BookingsPage() {
  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">ข้อมูลการจอง</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div key={b.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">รหัสการจอง: {b.id}</h2>
            <p className="text-gray-700 mb-1">ลูกค้า: {b.customer}</p>
            <p className="text-gray-700 mb-1">คอนเสิร์ต: {b.concert}</p>
            <p className="text-gray-700 mb-1">จำนวนที่นั่ง: {b.seats}</p>
            <p className="text-gray-700 font-bold">ยอดรวม: {b.total.toLocaleString()} บาท</p>
          </div>
        ))}
      </div>
    </div>
  );
}
