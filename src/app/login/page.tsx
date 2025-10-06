'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../types';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!');
      return;
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.dispatchEvent(new Event('login'));
    router.push('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          เข้าสู่ระบบ
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
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Login
        </button>
        <p className="text-sm text-gray-600 text-center mt-4">
          ยังไม่มีบัญชี?{" "}
          <span
            onClick={() => router.push('/register')}
            className="text-red-600 cursor-pointer hover:underline"
          >
            สมัครสมาชิก
          </span>
          <br />
          <span
            onClick={() => router.push('/admin')}
            className="text-red-600 cursor-pointer hover:underline"
          >
            ไปที่ Admin
          </span>
        </p>
      </div>
    </div>
  );
}
