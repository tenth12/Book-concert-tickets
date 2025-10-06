"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { concerts } from "../../../data/mockdata";

export default function ConcertPage() {
  const { id } = useParams();
  const router = useRouter();
  const event = concerts.find((c) => c.id === id);

  useEffect(() => {
    const btn = document.getElementById("copyBtn");
    btn?.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Copied link!");
    });
  }, []);

  if (!event)
    return <p className="text-center text-red-600 mt-10">ไม่พบคอนเสิร์ต</p>;

  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-2 text-black">คอนเสิร์ต</h2>
        <div className="h-1 w-20 bg-red-600 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="mt-4 space-y-2">
              <div className="flex flex-col items-center mb-2">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={300}
                  className="object-contain rounded-lg mb-2"
                />
                <h1 className="text-2xl font-bold text-red-600 text-center">
                  {event.title}
                </h1>
                <p className="text-sm text-gray-600 text-center">
                  {event.subtitle}
                </p>
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
                  <div className="font-semibold text-red-600">Doors</div>
                  {event.doors}
                </div>
              </div>

              <div className="mt-3">
                <div className="font-semibold text-red-600">Prices</div>
                <div className="text-lg font-bold text-gray-900">
                  {Object.values(event.prices).join(" / ")} ฿
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() =>
                    router.push(`/select-zone?concert=${encodeURIComponent(event.id)}`)
                  }
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                >
                  Buy Tickets
                </button>
                <button
                  id="copyBtn"
                  className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>

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
                <div className="md:col-span-2">
                  <dt className="font-semibold">Venue</dt>
                  <dd>{event.venueLong ?? event.venue}</dd>
                </div>
              </dl>

              {event.description && (
                <div className="mt-6">
                  <h3 className="font-semibold text-red-600">Description</h3>
                  <p className="mt-2 text-sm text-gray-800 whitespace-pre-line">
                    {event.description}
                  </p>
                </div>
              )}

              {event.terms && (
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
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
