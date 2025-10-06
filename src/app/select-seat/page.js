// app/select-seat/page.js (Server Component)

import { Suspense } from 'react';
import SeatSelector from './SeatSelector'; // Import the client component

export default function SelectSeatPage() {
  // Wrap the client component with <Suspense>
  // This tells Next.js to defer rendering the component until the client (browser) is ready.
  return (
    <Suspense fallback={
      <div className="text-center mt-20">
        กำลังโหลดข้อมูลการจองที่นั่ง... ⏳
      </div>
    }>
      {/* The component using useSearchParams() is rendered here */}
      <SeatSelector />
    </Suspense>
  );
}