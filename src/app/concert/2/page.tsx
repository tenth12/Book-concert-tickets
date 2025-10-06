// app/concert/page.tsx
"use client";
import Image from "next/image";
import { useEffect } from "react";

type Event = {
  title: string;
  subtitle: string;
  dateLong: string;
  time: string;
  doors: string;
  venue: string;
  prices: string[];
  ticketStatus: "ON SALE NOW" | "SOLD OUT";
  purchaseUrl: string;
  onSale: string;
  channels: string;
  paymentMethods: string;
  description: string;
  terms: string[];
};

const event: Event = {
  title: "BLACKPINK WORLD TOUR < DEADLINE > IN BANGKOK",
  subtitle: "ราชมังคลากีฬาสถาน — 24-26 ตุลาคม 2568",
  dateLong: "24-26 ตุลาคม 2568",
  time: "19:00 น.",
  doors: "16:00 น.",
  venue: "ราชมังคลากีฬาสถาน",
  prices: ["8,800", "7,800", "6,800", "5,800", "4,800", "3,800", "3,300", "2,800"],
  ticketStatus: "ON SALE NOW",
  purchaseUrl: "",
  onSale: "28 กันยายน 2568, 10:00 น.",
  channels: "book concert ticket",
  paymentMethods: "Credit/Debit, TrueMoney, ShopeePay, QR Payment",
  description:
    "การกลับมาอีกครั้งของ BLACKPINK กับเวิลด์ทัวร์ < DEADLINE > ที่จะระเบิดความมันส์ที่กรุงเทพฯ 24-26 ตุลาคม 2568 ณ ราชมังคลากีฬาสถาน",
  terms: [
    "ชำระเงินภายในเวลาที่กำหนด",
    "ซื้อบัตรได้สูงสุด 4 ใบต่อรายการ",
    "ราคาบัตรรวมภาษีมูลค่าเพิ่มแล้ว แต่ไม่รวมค่าธรรมเนียมอื่น ๆ",
    "บัตรเป็นแบบกระดาษ ต้องแสดงหน้างานเพื่อเข้างาน",
  ],
};

export default function ConcertPage() {
  useEffect(() => {
    const copyBtn = document.getElementById("copyBtn");
    copyBtn?.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Copied link!");
    });
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Section: คอนเสิร์ต */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-2 text-black">คอนเสิร์ต</h2>
        <div className="h-1 w-20 bg-red-600 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Panel */}
          <div className="col-span-1">
            <div className="mt-4 space-y-2">
              <div className="flex flex-col items-center mb-2">
                <Image
                  src="/img/Blackpink_world_tour.png"
                  alt="PLAVE Asia Tour"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg mb-2"
                />
                <h1 className="text-2xl font-bold text-red-700 text-center">
                  {event.title}
                </h1>
                <p className="text-sm text-gray-600 text-center">{event.subtitle}</p>
                
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                <div>
                  <div className="font-semibold text-red-600">Date</div>
                  {event.dateLong}
                </div>
                <div>
                  <div className="font-semibold text-red-600">Time</div>
                  {event.time}
                </div>
                <div>
                  <div className="font-semibold text-red-600">Venue</div>
                  {event.venue}
                </div>
                <div>
                  <div className="font-semibold text-red-600">Doors Open</div>
                  {event.doors}
                </div>
              </div>

              <div className="mt-3">
                <div className="font-semibold text-red-600">Prices</div>
                <div className="text-lg font-bold text-gray-900">
                  {event.prices.join(" src\app\select-zone\page.tsx ")} ฿
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                {/* Route to internal zone selection page for booking */}
                <a
                  href="/select-zone"
                  className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                >
                  Buy Tickets
                </a>
                <button
                  id="copyBtn"
                  className="inline-block px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-2">
            <section className="bg-white rounded-2xl p-6 shadow border border-gray-200">
              <h2 className="text-xl font-semibold mb-3 text-red-700">
                Event Details
              </h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <dt className="font-semibold">Name</dt>
                  <dd>{event.title}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Date</dt>
                  <dd>{event.dateLong}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Show Time</dt>
                  <dd>{event.time}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Door</dt>
                  <dd>{event.doors}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="font-semibold">Venue</dt>
                  <dd>{event.venue}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <h3 className="font-semibold text-red-600">Description</h3>
                <p className="mt-2 text-sm text-gray-800 whitespace-pre-line">
                  {event.description}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-red-600">
                  Terms & Conditions
                </h3>
                <ol className="list-decimal list-inside mt-2 text-sm text-gray-700 space-y-1">
                  {event.terms.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="mt-6 bg-white rounded-2xl p-6 shadow border border-gray-200">
              <h3 className="font-semibold text-red-600">Sales Info</h3>
              <div className="mt-3 text-sm text-gray-800">
                <p>
                  <span className="font-semibold">On sale from:</span>{" "}
                  {event.onSale}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Ticket channels:</span>{" "}
                  {event.channels}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Payment methods:</span>{" "}
                  {event.paymentMethods}
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
