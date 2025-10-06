"use client";
import { customers } from "@/data/mockdata";

export default function CustomersPage() {
  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">ข้อมูลลูกค้า</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((c) => (
          <div key={c.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">{c.name}</h2>
            <p className="text-gray-700 mb-1">ID: {c.id}</p>
            <p className="text-gray-700">อีเมล: {c.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
