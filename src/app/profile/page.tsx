'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, mockConcerts } from '../types';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [router]);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          โปรไฟล์ผู้ใช้
        </h1>
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800">
            Username: <span className="text-red-600">{user.username}</span>
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-black">คอนเสิร์ตที่จองแล้ว</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {user.bookedConcerts.length === 0 && <li>ยังไม่มีการจอง</li>}
          {user.bookedConcerts.map((booking, idx) => {
            const concert = mockConcerts.find(c => c.id === booking.concertId);
            return (
              <li key={idx}>
                <strong>{concert?.name || "Unknown Concert"}</strong>
                <div className="ml-4 text-sm text-gray-600">
                  โซน: {booking.zone}, ที่นั่ง: {booking.seats.join(", ")}
                </div>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem('currentUser');
            router.push('/login');
          }}
          className="mt-6 w-full bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
