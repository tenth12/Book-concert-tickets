"use client";

import dynamic from "next/dynamic";
import { concerts, bookings } from "../../../data/mockdata";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar as BarChart } from "react-chartjs-2";

//  ลงทะเบียนองค์ประกอบของ Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ใช้ dynamic import 
const Bar = dynamic(
  async () => {
    const mod = await import("react-chartjs-2");
    return mod.Bar;
  },
  { ssr: false }
);

export default function ReportsPage() {
  const totalRevenue = bookings.reduce((sum, b) => sum + b.total, 0);

  // เตรียมข้อมูลสำหรับกราฟ
  const concertNames = concerts.map((c) => c.name);
  const bookingCounts = concertNames.map((name) =>
    bookings.filter((b) => b.concert.includes(name.split(" ")[0])).length
  );
  const concertRevenue = concertNames.map((name) =>
    bookings
      .filter((b) => b.concert.includes(name.split(" ")[0]))
      .reduce((sum, b) => sum + b.total, 0)
  );

  // ข้อมูลของกราฟแท่ง
  const chartData = {
    labels: concertNames,
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

  // ตั้งค่า options ของกราฟ
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
            b.concert.includes(c.name.split(" ")[0])
          ).length;

          return (
            <div
              key={c.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-gray-700">จำนวนการจอง: {count}</p>
            </div>
          );
        })}
      </div>

      {/*  กราฟสรุป (เต็มหน้าจอ) */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-[500px]">
        {/* @ts-ignore */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}