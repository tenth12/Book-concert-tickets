"use client";
import React, { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { concerts } from "../../data/mockdata";

type Seat = { id: string; row: string; col: number; taken: boolean };

function makeSeats(rows = 12, cols = 15, zone = 'VIP') {
  const seats: Seat[] = [];
  const rowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (let r = 0; r < rows; r++) {
    for (let c = 1; c <= cols; c++) {
      const base = (r + c + zone.length) % 7;
      const taken = base === 0 || (r > rows - 3 && (c % 4 === 0));
      seats.push({ id: `${rowLabels[r]}${c}`, row: rowLabels[r], col: c, taken });
    }
  }
  return seats;
}

export default function SelectSeatPage() {
  const search = useSearchParams();
  const router = useRouter();
  const zone = (search.get('zone') || 'VIP').toUpperCase();
  const concertId = search.get("concert") || "";

  const [seats] = useState<Seat[]>(() => makeSeats(12, 15, zone));
  const [selected, setSelected] = useState<string[]>([]);
  const MAX_SELECT = 6;

  const zoneColor = useMemo(() => {
    const map: Record<string, string> = {
      VIP: '#b22222', A: '#ffef4b', B: '#d78b2b', C: '#9ad67a', D: '#bd5bd7',
      E: '#7ec0ee', F: '#ff69b4', G: '#ffa500'
    };
    return map[zone] ?? '#888';
  }, [zone]);

  const concert = concerts.find(c => c.id === concertId);
  if (!concert) return <p style={{ textAlign: "center", marginTop: 40 }}>ไม่พบคอนเสิร์ต</p>;
  
  const price = concert.prices[zone] ?? 0;
  const total = selected.length * price;

  function toggleSeat(id: string, taken: boolean) {
    if (taken) return;
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(s => s !== id);
      if (prev.length >= MAX_SELECT) return prev;
      return [...prev, id];
    });
  }

  function onConfirm() {
    if (selected.length === 0) {
      alert('กรุณาเลือกที่นั่งก่อนยืนยัน');
      return;
    }
    const seatsParam = encodeURIComponent(selected.join(','));
    router.push(`/payment?concert=${encodeURIComponent(concertId)}&zone=${encodeURIComponent(zone)}&seats=${seatsParam}`);
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Inter, system-ui, sans-serif', color: '#000' }}>
      <h2 style={{ marginBottom: 12 }}>เลือกที่นั่ง — โซน: <span style={{ color: zoneColor }}>{zone}</span></h2>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        <div style={{ background: '#111', padding: 12, borderRadius: 6, color: '#fff' }}>
          <div style={{ height: 36, background: '#333', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, fontWeight: 700 }}>STAGE</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 40px)', gap: 6 }}>
            {seats.map(s => {
              const isSelected = selected.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggleSeat(s.id, s.taken)}
                  disabled={s.taken}
                  aria-pressed={isSelected}
                  title={s.id}
                  style={{
                    width: 40,
                    height: 34,
                    background: s.taken ? '#222' : isSelected ? '#ffd54f' : '#fff',
                    color: s.taken ? '#666' : '#000',
                    border: s.taken ? '1px solid #333' : `2px solid ${isSelected ? '#ffaa00' : zoneColor}`,
                    borderRadius: 6,
                    cursor: s.taken ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  <span>{s.row}</span>
                  <small style={{ fontSize: 10 }}>{s.col}</small>
                </button>
              );
            })}
          </div>
        </div>

        <aside style={{ minWidth: 300, padding: 12 }}>
          <h4>รายละเอียด</h4>
          <p>โซน: <strong style={{ color: zoneColor }}>{zone}</strong></p>
          <p>ราคา/ที่นั่ง: <strong>{price.toLocaleString()}.-</strong></p>
          <p>ที่เลือก: <strong>{selected.length > 0 ? selected.join(', ') : 'ยังไม่เลือก'}</strong></p>
          <p>รวม: <strong>{total.toLocaleString()}.-</strong></p>
          <p style={{ color: '#000', fontSize: 13 }}>คุณสามารถเลือกได้สูงสุด {MAX_SELECT} ที่นั่ง</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => router.back()} style={{ padding: '8px 12px' }}>ย้อนกลับ</button>
            <button onClick={onConfirm} style={{ padding: '8px 12px', background: '#0070f3', color: '#fff', border: 'none' }}>ยืนยัน ({selected.length})</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
