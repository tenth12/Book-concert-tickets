"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { concerts } from "../../data/mockdata";
import { User } from "../types";

export default function PaymentPage() {
  const search = useSearchParams();
  const router = useRouter();

  const concertId = search.get("concert") || "";
  const zone = search.get("zone") || "VIP";
  const seats = search.get("seats")?.split(",") || [];

  const event = concerts.find((c) => c.id === concertId);
  const pricePerSeat = event?.prices?.[zone] ?? 0;
  const total = seats.length * pricePerSeat;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    method: "promptpay",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!seats.length) {
      alert("กรุณาเลือกที่นั่งก่อนยืนยัน");
      return;
    }

    alert(
      `จองตั๋วสำเร็จ! 🎫\nคอนเสิร์ต: ${event?.title ?? "ไม่พบคอนเสิร์ต"}\nโซน: ${zone}\nที่นั่ง: ${seats.join(", ")}\nรวม: ${total.toLocaleString()} บาท\nวิธีชำระเงิน: ${form.method}`
    );

    console.log("ส่งข้อมูลไป backend:", {
      ...form,
      concertId,
      zone,
      seats,
      total,
    });

    // อัปเดต bookedConcerts ของผู้ใช้ใน localStorage
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const currentUser: User = JSON.parse(storedUser);
      if (!currentUser.bookedConcerts) currentUser.bookedConcerts = [];
      currentUser.bookedConcerts.push({ concertId, zone, seats });
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    // กลับไปหน้าโปรไฟล์
    router.push("/profile");
  };

  if (!event)
    return <p className="text-center text-red-600 mt-10">ไม่พบคอนเสิร์ต</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h2 className="text-2xl font-bold text-red-600 mb-4">🎟 สรุปการจอง</h2>

      <div className="bg-gray-900 text-white p-6 rounded-xl shadow mb-6">
        <p>🎤 คอนเสิร์ต: {event.title}</p>
        <p>📍 โซน: {zone}</p>
        <p>💺 ที่นั่ง: {seats.length ? seats.join(", ") : "ยังไม่เลือก"}</p>
        <p className="font-semibold mt-2">💵 รวม: {total.toLocaleString()} บาท</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow text-white space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="ชื่อ-นามสกุล"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="อีเมล"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="เบอร์โทร"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800"
          required
        />

        <div>
          <h3 className="font-semibold text-red-400 mb-2">วิธีชำระเงิน</h3>
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
          className="w-full py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          ✅ ยืนยันการชำระเงิน
        </button>
      </form>
    </div>
  );
}
