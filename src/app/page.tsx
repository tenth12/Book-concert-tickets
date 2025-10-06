"use client";

import Link from "next/link";
import Image from "next/image";
import { concerts } from "../data/mockdata";
import { useState, useEffect } from "react";

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
      useEffect(() => {
    const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }, []);
  return (
    <main className="min-h-screen bg-white font-sans">
      {showPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center transform transition-all duration-300 scale-100">
        <h3 className="text-3xl font-bold text-red-600 mb-4">
          สวัสดี! 👋
        </h3>
        <p className="text-lg text-gray-800 mb-6">
          ยินดีต้อนรับสู่เว็บไซต์จองบัตรคอนเสิร์ต
        </p>
        <p className="text-lg text-gray-800 mb-6">
          v.13.0
        </p>
        <p className="text-lg text-gray-300 mb-6">
          ลองหาเล่นดูนะ! 😉
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          ปิด
        </button>
        </div>
      </div>
      )}
      <section className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-2 text-black">คอนเสิร์ต</h2>
      <div className="h-1 w-20 bg-red-600 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {concerts.map((c) => (
        <Link
          key={c.id}
          href={`/concert/${c.id}`}
          className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition"
        >
          <div className="w-full h-64 relative bg-white rounded">
          <Image
            src={c.image}
            alt={c.title}
            fill
            className="object-contain rounded"
          />
          </div>
          <div className="mt-4 w-full text-center">
          {c.ticketStatus === "SOLD OUT" && (
            <div className="text-sm text-red-600 font-bold mb-1">SOLD OUT!</div>
          )}
          <div className="font-semibold text-black">{c.title}</div>
          <div className="text-gray-600 text-sm mt-1">{c.dateLong}</div>
          <div className="text-xs text-gray-500 mt-1">@ {c.venue}</div>
          </div>
          <div
          className={`mt-4 w-full py-2 rounded-full font-semibold text-center ${
            c.ticketStatus === "SOLD OUT"
            ? "bg-red-600 text-white opacity-50 cursor-not-allowed"
            : "bg-red-600 text-white hover:bg-red-700 transition"
          }`}
          >
          {c.ticketStatus === "SOLD OUT" ? "Sold out" : "ซื้อบัตร"}
          </div>
        </Link>
        ))}
      </div>
      </section>
    </main>
  );
}
