"use client";

import { useState } from "react";
import { concerts as mockConcerts, Concert as ConcertType } from "../../../data/mockdata";

export default function ConcertsPage() {
  const [concerts, setConcerts] = useState<ConcertType[]>(mockConcerts);
  const [showModal, setShowModal] = useState(false);
  const [editingConcert, setEditingConcert] = useState<ConcertType | null>(null);

  const emptyConcert: ConcertType = {
    id: "",
    title: "",
    subtitle: "",
    dateLong: "",
    time: "",
    doors: "",
    venue: "",
    prices: {},
    ticketStatus: "ON SALE NOW",
    onSale: "",
    channels: "",
    paymentMethods: "",
    description: "",
    terms: [],
    image: "",
  };

  const [formData, setFormData] = useState<ConcertType>({ ...emptyConcert });
  const [priceInput, setPriceInput] = useState({ zone: "", price: 0 });

  // เปิด modal เพิ่มคอนเสิร์ต
  const handleOpenAdd = () => {
    setEditingConcert(null);
    setFormData({ ...emptyConcert });
    setPriceInput({ zone: "", price: 0 });
    setShowModal(true);
  };

  // เปิด modal แก้ไขคอนเสิร์ต
  const handleOpenEdit = (concert: ConcertType) => {
    setEditingConcert(concert);
    setFormData(concert);
    setPriceInput({ zone: "", price: 0 });
    setShowModal(true);
  };

  // ลบคอนเสิร์ต
  const handleDelete = (id: string) => {
    if (confirm("แน่ใจว่าจะลบคอนเสิร์ตนี้ไหม?")) {
      setConcerts(concerts.filter((c) => c.id !== id));
    }
  };

  // เพิ่ม zone ราคา
  const handleAddPriceZone = () => {
    if (priceInput.zone && priceInput.price > 0) {
      setFormData({
        ...formData,
        prices: { ...formData.prices, [priceInput.zone]: priceInput.price },
      });
      setPriceInput({ zone: "", price: 0 });
    }
  };

  // บันทึกคอนเสิร์ต
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingConcert) {
      setConcerts(
        concerts.map((c) => (c.id === formData.id ? { ...formData } : c))
      );
    } else {
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
              <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
              {c.subtitle && <p className="text-gray-500 mb-1">{c.subtitle}</p>}
              <p className="text-gray-700 mb-1">📅 วันที่: {c.dateLong}</p>
              <p className="text-gray-700 mb-1">📍 สถานที่: {c.venue}</p>
              <p className="text-gray-700">💰 ราคาต่ำสุด: {Math.min(...Object.values(c.prices))} บาท</p>
              <p className="text-gray-700">🎫 สถานะบัตร: {c.ticketStatus}</p>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg p-6 w-[500px] shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-black">
              {editingConcert ? "แก้ไขคอนเสิร์ต" : "เพิ่มคอนเสิร์ตใหม่"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-2">
              {/** title / subtitle / date / venue **/}
              <label className="block">
                <span>ชื่อคอนเสิร์ต</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </label>

              <label className="block">
                <span>Subtitle (ถ้ามี)</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.subtitle || ""}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </label>

              <label className="block">
                <span>วันที่</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.dateLong}
                  onChange={(e) => setFormData({ ...formData, dateLong: e.target.value })}
                  required
                />
              </label>

              <label className="block">
                <span>เวลา</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </label>

              <label className="block">
                <span>สถานที่</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  required
                />
              </label>

              {/** price zones **/}
              <div className="flex gap-2 items-center mt-2">
                <input
                  type="text"
                  placeholder="Zone"
                  className="border p-1 rounded flex-1"
                  value={priceInput.zone}
                  onChange={(e) => setPriceInput({ ...priceInput, zone: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Price"
                  className="border p-1 rounded w-24"
                  value={priceInput.price}
                  onChange={(e) => setPriceInput({ ...priceInput, price: Number(e.target.value) })}
                />
                <button type="button" onClick={handleAddPriceZone} className="px-3 py-1 bg-blue-500 text-white rounded">
                  ➕
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {Object.entries(formData.prices).map(([zone, price]) => (
                  <span key={zone} className="bg-gray-200 px-2 py-1 rounded">
                    {zone}: {price} บาท
                  </span>
                ))}
              </div>

              {/** ticket status **/}
              <label className="block mt-2">
                <span>สถานะบัตร</span>
                <select
                  className="w-full border p-2 rounded mt-1"
                  value={formData.ticketStatus}
                  onChange={(e) => setFormData({ ...formData, ticketStatus: e.target.value as "ON SALE NOW" | "SOLD OUT" })}
                >
                  <option value="ON SALE NOW">ON SALE NOW</option>
                  <option value="SOLD OUT">SOLD OUT</option>
                </select>
              </label>

              {/** onSale / channels / paymentMethods / description / terms / image **/}
              <label className="block">
                <span>วันที่เริ่มขาย</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.onSale}
                  onChange={(e) => setFormData({ ...formData, onSale: e.target.value })}
                />
              </label>

              <label className="block">
                <span>ช่องทางจอง</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.channels}
                  onChange={(e) => setFormData({ ...formData, channels: e.target.value })}
                />
              </label>

              <label className="block">
                <span>วิธีชำระเงิน</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.paymentMethods}
                  onChange={(e) => setFormData({ ...formData, paymentMethods: e.target.value })}
                />
              </label>

              <label className="block">
                <span>รายละเอียด</span>
                <textarea
                  className="w-full border p-2 rounded mt-1"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </label>

              <label className="block">
                <span>เงื่อนไข (คั่นด้วย , )</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={(formData.terms || []).join(",")}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.value.split(",") })}
                />
              </label>

              <label className="block">
                <span>URL รูปภาพ</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </label>

              <div className="flex justify-end gap-3 mt-3">
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
