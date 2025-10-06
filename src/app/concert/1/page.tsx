'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

export default function ConcertDetail({ event = defaultEvent }) {
  useEffect(() => {
    const copyBtn = document.getElementById("copyBtn");
    const handleCopy = () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Copied link!");
    };
    copyBtn?.addEventListener("click", handleCopy);

    return () => copyBtn?.removeEventListener("click", handleCopy);
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
                  src="/img/plave_asia_tour.jpg"
                  alt="PLAVE Asia Tour"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg mb-2"
                />
                <h1 className="text-2xl font-bold text-red-700 text-center">{event.title}</h1>
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
                <div className="text-lg font-bold text-gray-900">{event.prices.join(' / ')} ฿</div>
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  className="inline-block px-4 py-2 bg-gray-400 text-white rounded-lg shadow"
                  aria-disabled
                >
                  Sold Out
                </a>
                <button
                  id="copyBtn"
                  className="inline-block px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
                >
                  Copy Link
                </button>
                {/* Link to select-zone for booking flow (disabled when sold out) */}
                {/* If event were available, we'd render: <Link href="/select-zone"><a className="...">Book</a></Link> */}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-2">
            <section className="bg-white rounded-2xl p-6 shadow border border-gray-200">
              <h2 className="text-xl font-semibold mb-3 text-red-700">Event Details</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <dt className="font-semibold text-gray-900">Name</dt>
                  <dd>{event.title}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Date</dt>
                  <dd>{event.dateLong}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Show Time</dt>
                  <dd>{event.time}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Door</dt>
                  <dd>{event.doors}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="font-semibold text-gray-900">Venue</dt>
                  <dd>{event.venueLong}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <h3 className="font-semibold text-red-600">Description</h3>
                <p className="mt-2 text-sm text-gray-800 whitespace-pre-line">{event.description}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-red-600">Terms & Conditions</h3>
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
                  <span className="font-semibold">On sale from: </span>{event.onSale}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Ticket channels: </span>{event.channels}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Payment methods: </span>{event.paymentMethods}
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- Example default data ---
const defaultEvent = {
  title: '2025 PLAVE Asia Tour [DASH: Quantum Leap] in Bangkok',
  subtitle: 'UOB LIVE (Emsphere) — 25 October 2025',
  dateLong: 'Saturday, 25 October 2025',
  time: '18:00 น.',
  doors: '17:00 น.',
  venue: 'UOB LIVE, Emsphere',
  venueLong: 'UOB LIVE (Emsphere)',
  prices: ['6,000', '4,500', '3,000'],
  ticketStatus: 'SOLD OUT',
  purchaseUrl: '',
  onSale: 'Sunday, 27 July 2025, 11:00',
  channels: 'book concert tickets',
  paymentMethods: 'Credit/Debit, K Pay Plus, BBL iBanking, ShopeePay, TrueMoney, Alipay, WeChat Pay',
  description:
    'รายละเอียด :\nชื่อ : 2025 PLAVE Asia Tour [DASH: Quantum Leap] in Bangkok\nวันที่แสดง : วันเสาร์ที่ 25 ตุลาคม 2568\nเวลาแสดง : 18:00 น.\nประตูเปิด : 17:00 น.\nสถานที่แสดง : UOB LIVE (Emsphere)\nราคาบัตร : 6,000 / 4,500 และ 3,000 บาท',
  terms: [
    'ดำเนินการซื้อบัตรฯ และชำระเงินให้เสร็จสิ้นภายใน 10 นาที',
    'สามารถทำการสั่งซื้อบัตรฯ ได้สูงสุดไม่เกิน 2 ใบต่อรายการ',
    'ราคาบัตรฯ รวมภาษีมูลค่าเพิ่ม 7% แล้ว แต่ยังไม่รวมค่าธรรมเนียมอื่น ๆ ',
    'บัตรเข้าชมคอนเสิร์ตเป็นบัตรกระดาษที่ออกโดยบุ๊คคอนเสิร์ชทิคเก็ต',
    'สำหรับผู้ถือบัตรฯ ทุกประเภท จะได้รับแพ็คเกจ ณ ประตูทางเข้าฮอลล์ก่อนเริ่มการแสดง'
  ]
};
