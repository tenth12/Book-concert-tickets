"use client";

import { useState } from "react";
import { concerts as mockConcerts } from "../../../data/mockdata";

type Concert = {
  id: string;
  name: string;
  date: string;
  location: string;
  price: string;
};

export default function ConcertsPage() {
  const [concerts, setConcerts] = useState<Concert[]>(mockConcerts);
  const [showModal, setShowModal] = useState(false);
  const [editingConcert, setEditingConcert] = useState<Concert | null>(null);
  const [formData, setFormData] = useState<Concert>({
    id: "",
    name: "",
    date: "",
    location: "",
    price: "",
  });

  // เปิด modal เพิ่มคอนเสิร์ต
  const handleOpenAdd = () => {
    setEditingConcert(null);
    setFormData({ id: "", name: "", date: "", location: "", price: "" });
    setShowModal(true);
  };

  // เปิด modal แก้ไขคอนเสิร์ต
  const handleOpenEdit = (concert: Concert) => {
    setEditingConcert(concert);
    setFormData(concert);
    setShowModal(true);
  };

  // ลบคอนเสิร์ต
  const handleDelete = (id: string) => {
    if (confirm("แน่ใจว่าจะลบคอนเสิร์ตนี้ไหม?")) {
      setConcerts(concerts.filter((c) => c.id !== id));
    }
  };

  // บันทึกคอนเสิร์ต (เพิ่ม / แก้ไข)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingConcert) {
      // 🔧 แก้ไขคอนเสิร์ตเดิม
      setConcerts(
        concerts.map((c) => (c.id === formData.id ? { ...formData } : c))
      );
    } else {
      // ➕ เพิ่มคอนเสิร์ตใหม่
      const newConcert = { ...formData, id: String(Date.now()) };
      setConcerts([...concerts, newConcert]);
    }

    setShowModal(false);
  };

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6 text-red-600">จัดการคอนเสิร์ต</h1>

      <button
        onClick={handleOpenAdd}
        className="mb-6 bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
      >
        + เพิ่มคอนเสิร์ตใหม่
      </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concerts.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
              <p className="text-gray-700 mb-1">📅 วันที่: {c.date}</p>
              <p className="text-gray-700 mb-1">📍 สถานที่: {c.location}</p>
              <p className="text-gray-700">💰 ราคาเริ่มต้น: {c.price} บาท</p>
            </div>
            <div className="mt-4 flex gap-2 justify-end">
              <button
                onClick={() => handleOpenEdit(c)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                แก้ไข
              </button>
              <button
                onClick={() => handleDelete(c.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                ลบ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ฟอร์มเพิ่ม/แก้ไข */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-black">
              {editingConcert ? "แก้ไขคอนเสิร์ต" : "เพิ่มคอนเสิร์ตใหม่"}
            </h2>

            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                <span className="text-gray-700">ชื่อคอนเสิร์ต</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">วันที่จัด</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">สถานที่</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
              </label>

              <label className="block mb-4">
                <span className="text-gray-700">ราคาเริ่มต้น (บาท)</span>
                <input
                  type="number"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />
              </label>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}