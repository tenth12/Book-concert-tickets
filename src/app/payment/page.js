// ไฟล์นี้เป็น Server Component โดยอัตโนมัติ

import { Suspense } from 'react';
import PaymentComponent from './PaymentComponent'; // import component ที่มี 'use client'

export default function PaymentWrapper() {
  return (
    // ห่อ PaymentComponent ด้วย Suspense
    // เพื่อบอก Next.js ให้รอการเรนเดอร์ส่วนนี้บนฝั่ง Client
    // จึงจะเรียกใช้ hook อย่าง useSearchParams() ได้
    <Suspense fallback={
      <div className="text-center mt-20 text-xl font-bold">
        กำลังโหลดหน้าชำระเงิน... ⏳
      </div>
    }>
      <PaymentComponent />
    </Suspense>
  );
}