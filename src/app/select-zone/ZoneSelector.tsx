"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { concerts } from "../../data/mockdata";

export default function SelectZonePage() {
  const router = useRouter();
  const search = useSearchParams();
  const concertId = search.get("concert") || "";

  const concert = concerts.find(c => c.id === concertId);

  if (!concert) {
    return <p style={{ textAlign: "center", marginTop: 40 }}>ไม่พบคอนเสิร์ต</p>;
  }

  const zones = Object.entries(concert.prices).map(([id, price]) => ({
    id,
    price,
    color: getZoneColor(id)
  }));

  function getZoneColor(zoneId: string) {
    const map: Record<string, string> = {
      VIP: '#b22222', A: '#ffef4b', B: '#d78b2b', C: '#9ad67a', D: '#bd5bd7',
      E: '#7ec0ee', F: '#ff69b4', G: '#ffa500'
    };
    return map[zoneId] ?? '#888';
  }

  function goToSeat(zoneId: string) {
    router.push(`/select-seat?concert=${encodeURIComponent(concertId)}&zone=${encodeURIComponent(zoneId)}`);
  }

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif', color: '#000' }}>
      <h1 style={{ textAlign: 'center' }}>เลือกโซนที่นั่ง</h1>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ width: 520, background: '#111', color: '#000', padding: 16, borderRadius: 6 }}>
          <div style={{ textAlign: 'center', marginBottom: 12, fontSize: 14, color: '#fff' }}>CONCERT PLAN</div>
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
                  color: '#000',
                  fontWeight: 700,
                }}
              >
                {z.id} ({z.price.toLocaleString()}.-)
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
