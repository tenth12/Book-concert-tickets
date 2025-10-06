// ไฟล์นี้เป็น Server Component โดยอัตโนมัติ

import { Suspense } from 'react';
import ZoneSelector from './ZoneSelector'; // Import Client Component ที่มี useSearchParams()

export default function SelectZonePage() {
  return (
    // ห่อ Component ที่ใช้ useSearchParams() ด้วย <Suspense>
    // เพื่อให้ Next.js ข้ามการ Prerender ส่วนนี้บน Server
    <Suspense fallback={
      <div className="text-center mt-20">
        กำลังโหลดหน้าเลือกโซน... ⏳
      </div>
    }>
      <ZoneSelector />
    </Suspense>
  );
}