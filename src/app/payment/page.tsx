"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    method: "promptpay",
  });

  const ticketInfo = {
    concert: "BLACKPINK WORLD TOUR",
    zone: "A1",
    seat: "12",
    price: 3500,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ส่งข้อมูลไป backend:", form, ticketInfo);
    alert("จองตั๋วเสร็จสิ้น! ✅");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Ticket Info */}
      <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg mb-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-red-500">🎟 สรุปการจอง</h2>
        <p className="mb-1">🎤 คอนเสิร์ต: {ticketInfo.concert}</p>
        <p className="mb-1">📍 โซน: {ticketInfo.zone}</p>
        <p className="mb-1">💺 ที่นั่ง: {ticketInfo.seat}</p>
        <p className="font-semibold text-red-400 mt-2">
          💵 ราคา: {ticketInfo.price} บาท
        </p>
      </div>

      {/* Payment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg space-y-4 text-white"
      >
        <input
          type="text"
          name="name"
          placeholder="ชื่อ-นามสกุล"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="อีเมล"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="เบอร์โทร"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Payment Method */}
        <div>
          <h3 className="font-semibold mb-3 text-red-400">วิธีชำระเงิน</h3>
          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="method"
              value="promptpay"
              checked={form.method === "promptpay"}
              onChange={handleChange}
              className="accent-red-500"
            />
            PromptPay
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="method"
              value="credit"
              checked={form.method === "credit"}
              onChange={handleChange}
              className="accent-red-500"
            />
            Credit Card (Mock)
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          ✅ ยืนยันการชำระเงิน
        </button>
      </form>
    </div>
  );
}
