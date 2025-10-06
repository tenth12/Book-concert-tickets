"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Zone = { id: string; color: string; price: number };
const zones: Zone[] = [
  { id: 'VIP', color: '#b22222', price: 5000 },
  { id: 'AL', color: '#ffef4b', price: 3700 },
  { id: 'AR', color: '#ffef4b', price: 3700 },
  { id: 'BL', color: '#d78b2b', price: 2800 },
  { id: 'BR', color: '#d78b2b', price: 2800 },
  { id: 'CL', color: '#9ad67a', price: 2000 },
  { id: 'CR', color: '#9ad67a', price: 2000 },
  { id: 'DL', color: '#bd5bd7', price: 1400 },
  { id: 'DR', color: '#bd5bd7', price: 1400 }
];

export default function SelectZonePage() {
  const router = useRouter();

  function goToSeat(zoneId: string) {
    router.push(`/select-seat?zone=${encodeURIComponent(zoneId)}`);
  }

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif', color: '#000' }}>
      <h1 style={{ textAlign: 'center' }}>เลือกโซนที่นั่ง</h1>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ width: 520, background: '#f0f0f0', color: '#000', padding: 16, borderRadius: 6 }}>
          <div style={{ textAlign: 'center', marginBottom: 12, fontSize: 14 }}>CONCERT PLAN</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => goToSeat(z.id)}
                style={{
                  background: z.color,
                  border: 'none',
                  padding: '18px 8px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  color: '#111',
                  fontWeight: 700,
                }}
                aria-label={`Select ${z.id}`}
              >
                {z.id}
              </button>
            ))}
          </div>
        </div>

        <div style={{ width: 320 }}>
          <h3>ราคาตั๋ว (ต่อคอนเสิร์ต)</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {zones.map((z) => (
              <li key={z.id} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                <div style={{ width: 56, height: 28, background: z.color, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>{z.id}</div>
                <div style={{ flex: 1 }}>{z.price.toLocaleString()}.-</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: 20 }}>
        คลิกโซนเพื่อไปยังหน้าจัดที่นั่ง
      </p>
    </div>
  );
}
