// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      setLoggedIn(!!localStorage.getItem("currentUser"));
    };

    checkLogin();
    window.addEventListener("login", checkLogin);
    window.addEventListener("logout", checkLogin);

    return () => {
      window.removeEventListener("login", checkLogin);
      window.removeEventListener("logout", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setLoggedIn(false);
    window.dispatchEvent(new Event("logout"));
    router.push("/login");
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="/" className="bg-gray-200 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition">Home</Link>
        <div className="text-xl font-bold text-red-700">ระบบจองตั๋วคอนเสิร์ต</div>
      </div>

      <div className="flex items-center gap-4">
        {loggedIn ? (
          <>
            <Link href="/profile" className="bg-gray-200 text-red-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">Profile</Link>
            <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition">Logout</button>
          </>
        ) : (
          <Link href="/login" className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition">Login</Link>
        )}
      </div>
    </nav>
  );
}
