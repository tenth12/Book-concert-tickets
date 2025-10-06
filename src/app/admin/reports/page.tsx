"use client";

import dynamic from "next/dynamic";
import { concerts, bookings } from "@/data/mockdata";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ลงทะเบียนองค์ประกอบ Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// dynamic import ของ react-chartjs-2
const Bar = dynamic(
  async () => {
    const mod = await import("react-chartjs-2");
    return mod.Bar;
  },
  { ssr: false }
);

export default function ReportsPage() {
  const totalRevenue = bookings.reduce((sum, b) => sum + b.total, 0);

  // เตรียมข้อมูลกราฟ
  const concertTitles = concerts.map((c) => c.title);

  const bookingCounts = concertTitles.map((title) =>
    bookings.filter((b) => b.concert.includes(title.split(" ")[0])).length
  );

  const concertRevenue = concertTitles.map((title) =>
    bookings
      .filter((b) => b.concert.includes(title.split(" ")[0]))
      .reduce((sum, b) => sum + b.total, 0)
  );

  // data ของกราฟ
  const chartData = {
    labels: concertTitles,
    datasets: [
      {
        label: "จำนวนการจอง",
        data: bookingCounts,
        backgroundColor: "rgba(59,130,246,0.6)",
        borderColor: "rgba(59,130,246,1)",
        borderWidth: 1,
        yAxisID: "y1",
      },
      {
        label: "รายได้รวม (บาท)",
        data: concertRevenue,
        backgroundColor: "rgba(34,197,94,0.6)",
        borderColor: "rgba(34,197,94,1)",
        borderWidth: 1,
        yAxisID: "y2",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "รายงานการจองและรายได้ต่อคอนเสิร์ต" },
    },
    scales: {
      y1: {
        beginAtZero: true,
        position: "left",
        title: { display: true, text: "จำนวนการจอง" },
      },
      y2: {
        beginAtZero: true,
        position: "right",
        grid: { drawOnChartArea: false },
        title: { display: true, text: "รายได้ (บาท)" },
        ticks: {
          callback: (value: number) =>
            value >= 1000000
              ? "฿" + (value / 1000000).toLocaleString() + "M"
              : "฿" + value.toLocaleString(),
        },
      },
    },
  };

  return (
    <div className="p-6 text-black w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-6">รายงานสรุปผล</h1>

      {/* กล่องสรุปภาพรวม */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-sm text-black">จำนวนคอนเสิร์ตทั้งหมด</h3>
          <p className="text-3xl font-bold text-black">{concerts.length}</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-sm text-black">ยอดจองทั้งหมด</h3>
          <p className="text-3xl font-bold text-black">{bookings.length}</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-sm text-black">รายได้รวม</h3>
          <p className="text-3xl font-bold text-green-600">
            {totalRevenue.toLocaleString()} ฿
          </p>
        </div>
      </div>

      {/* รายละเอียดรายงานแต่ละคอนเสิร์ต */}
      <h2 className="text-xl font-semibold mb-4">รายงานการจองตามคอนเสิร์ต</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {concerts.map((c) => {
          const count = bookings.filter((b) =>
            b.concert.includes(c.title.split(" ")[0])
          ).length;
          const revenue = bookings
            .filter((b) => b.concert.includes(c.title.split(" ")[0]))
            .reduce((sum, b) => sum + b.total, 0);

          return (
            <div
              key={c.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-700">จำนวนการจอง: {count}</p>
              <p className="text-gray-700 font-semibold">
                รายได้รวม: ฿{revenue.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>

      {/* กราฟสรุป */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-[500px]">
        {/* @ts-ignore */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
