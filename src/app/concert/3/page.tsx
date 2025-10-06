// app/concert/magicman2/page.tsx
"use client";
import Image from "next/image";
import { useEffect } from "react";

type Event = {
  title: string;
  subtitle?: string;
  dateLong: string;
  time: string;
  doors: string;
  venue: string;
  venueLong?: string;
  prices: string[];
  ticketStatus: "ON SALE NOW" | "SOLD OUT";
  purchaseUrl: string;
  onSale: string;
  channels?: string;
  paymentMethods?: string;
  description?: string;
  terms?: string[];
};

const magicmanEvent: Event = {
  title: "MAGICMAN 2 WORLD TOUR 2025-2026 in Bangkok",
  subtitle: "อิมแพ็ค อารีน่า — 3-4 ตุลาคม 2568",
  dateLong: "3-4 ตุลาคม 2568",
  time: "20:00 / 19:00 น.",
  doors: "ก่อนการแสดงเริ่มประมาณ 1 ชั่วโมง",
  venue: "อิมแพ็ค อารีน่า",
  venueLong: "Impact Arena, Muang Thong Thani",
  prices: [
    "18,000",
    "9,000",
    "6,900",
    "6,500",
    "5,500",
    "4,300",
    "3,500",
    "2,900",
  ],
  ticketStatus: "ON SALE NOW",
  purchaseUrl:
    "",
  onSale: "20 กันยายน 2568, 12:00 น.",
  channels: "book concert ticket",
  paymentMethods:
    "Credit/Debit, K Pay Plus, BBL iBanking, ShopeePay, TrueMoney, Alipay, WeChat Pay",
  description:
    "MAGICMAN 2 WORLD TOUR 2025-2026 in Bangkok Presented by Galaxy Resorts Thailand … เปิดการแสดง 3-4 ตุลาคม 2568 ที่อิมแพ็ค อารีน่า …",
  terms: [
    "จำกัดการซื้อทุกช่องทาง 1 ท่านต่อบัตร 6 ใบ",
    "ราคาบัตรยังไม่รวมค่าธรรมเนียมและค่าพลาสติกออกบัตร 50 บาท",
    "ใช้บัตรกระดาษในการเข้างาน",
    "เด็กสูงเกิน 100 ซม. ต้องมีบัตร",
  ],
};

    export default function MagicmanPage() {
    useEffect(() => {
        const btn = document.getElementById("copyBtn");
        btn?.addEventListener("click", () => {
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
                  src="/img/Magicman_2_world_tour.jpg"
                  alt="PLAVE Asia Tour"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg mb-2"
                />
                <h1 className="text-2xl font-bold text-red-600 text-center">
                  {magicmanEvent.title}
                </h1>
                {magicmanEvent.subtitle && (
                  <p className="text-sm text-gray-600 text-center">
                    {magicmanEvent.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                <div>
                  <div className="font-semibold text-red-600">Date</div>
                  <div>{magicmanEvent.dateLong}</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">Time</div>
                  <div>{magicmanEvent.time}</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">Venue</div>
                  <div>{magicmanEvent.venue}</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">Doors Open</div>
                  <div>{magicmanEvent.doors}</div>
                </div>
              </div>

              <div className="mt-3">
                <div className="font-semibold text-red-600">Prices</div>
                <div className="text-lg font-bold text-gray-900">
                  {magicmanEvent.prices.join(" / ")} ฿
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href="/select-zone"
                  className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                >
                  Buy Tickets
                </a>
                <button
                  id="copyBtn"
                  className="inline-block px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
                  title="Copy link"
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
                  <dt className="font-semibold text-gray-900">Name</dt>
                  <dd>{magicmanEvent.title}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Date</dt>
                  <dd>{magicmanEvent.dateLong}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Show Time</dt>
                  <dd>{magicmanEvent.time}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Door</dt>
                  <dd>{magicmanEvent.doors}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="font-semibold text-gray-900">Venue</dt>
                  <dd>{magicmanEvent.venueLong ?? magicmanEvent.venue}</dd>
                </div>
              </dl>

              {magicmanEvent.description && (
                <div className="mt-6">
                  <h3 className="font-semibold text-red-600">Description</h3>
                  <p className="mt-2 text-sm text-gray-800 whitespace-pre-line">
                    {magicmanEvent.description}
                  </p>
                </div>
              )}

              {magicmanEvent.terms && (
                <div className="mt-6">
                  <h3 className="font-semibold text-red-600">
                    Terms & Conditions
                  </h3>
                  <ol className="list-decimal list-inside mt-2 text-sm text-gray-700 space-y-1">
                    {magicmanEvent.terms.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ol>
                </div>
              )}
            </section>

            <section className="mt-6 bg-white rounded-2xl p-6 shadow border border-gray-200">
              <h3 className="font-semibold text-red-600">Sales Info</h3>
              <div className="mt-3 text-sm text-gray-800">
                <p>
                  <span className="font-semibold">On sale from: </span>
                  {magicmanEvent.onSale}
                </p>
                {magicmanEvent.channels && (
                  <p className="mt-2">
                    <span className="font-semibold">Ticket channels: </span>
                    {magicmanEvent.channels}
                  </p>
                )}
                {magicmanEvent.paymentMethods && (
                  <p className="mt-2">
                    <span className="font-semibold">Payment methods: </span>
                    {magicmanEvent.paymentMethods}
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
