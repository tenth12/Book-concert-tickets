import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* Section: คอนเสิร์ต */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-2 text-black">คอนเสิร์ต</h2>
        <div className="h-1 w-20 bg-red-600 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Concert 1 */}
          <Link
            href="/concert/1"
            className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="w-full h-64 relative bg-white rounded">
              <Image
                src="/img/plave_asia_tour.jpg"
                alt="2025 PLAVE Asia Tour [DASH: Quantum Leap] in Bangkok"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="text-sm text-red-600 font-bold mb-1">SOLD OUT!</div>
              <div className="font-semibold text-black">2025 PLAVE Asia Tour [DASH: Quantum Leap] in Bangkok</div>
              <div className="text-gray-600 text-sm mt-1">25 ตุลาคม 2568</div>
              <div className="text-xs text-gray-500 mt-1">@ ยูโอบี ไลฟ์, เอ็มสเฟียร์</div>
            </div>
            <div className="mt-4 w-full bg-red-600 text-white py-2 rounded-full font-semibold text-center opacity-50 cursor-not-allowed">
              Sold out
            </div>
          </Link>

          {/* Concert 2 */}
          <Link
            href="/concert/2"
            className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="w-full h-64 relative bg-white rounded">
              <Image
                src="/img/Blackpink_world_tour.png"
                alt="BLACKPINK WORLD TOUR DEADLINE IN BANGKOK"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="font-semibold text-black">BLACKPINK WORLD TOUR DEADLINE IN BANGKOK</div>
              <div className="text-gray-600 text-sm mt-1">24 ต.ค. 2568 - 26 ต.ค. 2568</div>
              <div className="text-xs text-gray-500 mt-1">@ ราชมังคลากีฬาสถาน</div>
            </div>
            <div className="mt-4 w-full bg-red-600 text-white py-2 rounded-full font-semibold text-center hover:bg-red-700 transition">
              ซื้อบัตร
            </div>
          </Link>

          {/* Concert 3 */}
          <Link
            href="/concert/3"
            className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="w-full h-64 relative bg-white rounded">
              <Image
                src="/img/Magicman_2_world_tour.jpg"
                alt="MAGICMAN 2 WORLD TOUR 2025-2026 in Bangkok"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="font-semibold text-black">
                MAGICMAN 2 WORLD TOUR 2025-2026 in Bangkok Presented by Galaxy Resorts Thailand
              </div>
              <div className="text-gray-600 text-sm mt-1">3 ต.ค. 2568 - 4 ต.ค. 2568</div>
              <div className="text-xs text-gray-500 mt-1">@ อิมแพ็ค อารีน่า</div>
            </div>
            <div className="mt-4 w-full bg-red-600 text-white py-2 rounded-full font-semibold text-center hover:bg-red-700 transition">
              ซื้อบัตร
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
