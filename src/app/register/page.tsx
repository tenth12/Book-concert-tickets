'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../types';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u) => u.username === username)) {
      alert('Username นี้มีอยู่แล้ว!');
      return;
    }
    const newUser: User = {
      id: Date.now().toString(),
      username,
      password,
      bookedConcerts: [],
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    router.push('/login');
    alert('สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          สมัครสมาชิก
        </h1>
        <input
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Register
        </button>
        <p className="text-sm text-gray-600 text-center mt-4">
          มีบัญชีอยู่แล้ว?{" "}
          <span
            onClick={() => router.push('/login')}
            className="text-red-600 cursor-pointer hover:underline"
          >
            เข้าสู่ระบบ
          </span>
        </p>
      </div>
    </div>
  );
}
