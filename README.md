# 🎟️ ระบบจองตั๋วคอนเสิร์ต – Next.js

![Badge](https://img.shields.io/badge/Concert-Booking-red?style=flat\&logo=next.js)

เว็บจองตั๋วคอนเสิร์ตสุดโมเดิร์น ใช้ **Next.js 15**, **TypeScript**, และ **Tailwind CSS**
จัดการผู้ใช้ เลือกที่นั่ง และสร้างรายงานกราฟแบบเรียลไทม์

---

## 💡 ฟีเจอร์หลัก

* **ระบบล็อกอินผู้ใช้ (LocalStorage)**
  เก็บสถานะผู้ใช้และตั๋วที่จองไว้แบบง่าย ๆ

* **เลือกที่นั่งแบบไดนามิก**
  เลือกที่นั่งในแต่ละโซน (VIP, A–G) พร้อมตารางแสดงผล

* **ระบบชำระเงินจำลอง**
  เลือกจ่ายแบบ PromptPay หรือ Credit Card

* **สรุปการจอง**
  แสดงที่นั่งที่เลือกและยอดรวมก่อนยืนยัน

* **แดชบอร์ดแอดมิน**
  รายงานจำนวนการจองและรายได้ต่อคอนเสิร์ต พร้อมกราฟ Chart.js

* **Responsive & สวยงาม**
  UI ใช้ Tailwind ปรับขนาดอัตโนมัติทั้ง Desktop/Mobile

---

## 🛠️ เทคโนโลยีที่ใช้

* **Next.js 15** – App Router & Server Components
* **TypeScript** – โค้ดปลอดภัยแบบ type-safe
* **Tailwind CSS** – UI สวยและตอบสนอง
* **Chart.js + react-chartjs-2** – กราฟรายงานแบบไดนามิก
* **LocalStorage** – เก็บข้อมูลผู้ใช้และการจองฝั่งลูกค้า

---

## ⚡ วิธีเริ่มใช้งาน

```bash
# โคลนโปรเจกต์
git clone https://github.com/tenth12/Book-concert-tickets.git
cd Book-concert-tickets

# ติดตั้ง dependencies
npm install

# รันเซิร์ฟเวอร์พัฒนา
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) แล้วเริ่มจองตั๋วได้เลย 🎉

---

## 🏗️ โครงสร้างไฟล์

```
app/
│   ├─ favicon.ico
│   ├─ globals.css        # สไตล์ทั่วทั้งเว็บ
│   ├─ layout.tsx         # Layout หลัก & Navbar
│   ├─ Navbar.tsx         # Navbar component
│   ├─ page.tsx           # หน้า homepage
│   └─ types.ts           # TypeScript types
│
├─ admin/                 # แดชบอร์ดแอดมิน
│   ├─ layout.tsx
│   ├─ page.tsx
│   ├─ bookings/page.tsx
│   ├─ concerts/page.tsx
│   ├─ customers/page.tsx
│   └─ reports/page.tsx
│
├─ concert/               # หน้าแสดงรายละเอียดคอนเสิร์ต
│   └─ [id]/page.tsx
│
├─ login/page.tsx         # หน้าเข้าสู่ระบบ
├─ payment/               # หน้าชำระเงิน
│   ├─ page.js
│   └─ PaymentComponent.tsx
│
├─ profile/page.tsx       # หน้าโปรไฟล์ผู้ใช้
├─ register/page.tsx      # หน้า สมัครสมาชิก
├─ select-seat/           # หน้าเลือกที่นั่ง
│   ├─ page.js
│   └─ SeatSelector.tsx
├─ select-zone/           # หน้าเลือกโซนที่นั่ง
│   ├─ page.js
│   └─ ZoneSelector.tsx
data/
└─ mockdata.ts            # ข้อมูลคอนเสิร์ต & การจองจำลอง

```

---

## 🎯 ฟีเจอร์อนาคต (ไอเดียเพิ่ม)

* 🔐 ระบบล็อกอินจริง (JWT + Backend)
* 💳 เชื่อมจ่ายจริง (PromptPay API / Stripe)
* 📊 รายงานขั้นสูงพร้อมตัวกรองและช่วงเวลา
* 🌐 รองรับหลายภาษา (ไทย/อังกฤษ)
* 🎨 ใส่อนิเมชันให้เลือกที่นั่งสนุกขึ้น

---

## 📝 หมายเหตุ

* ข้อมูลทั้งหมดตอนนี้เก็บ **ฝั่งลูกค้าใน LocalStorage**
* กราฟในแอดมิน **จำลองข้อมูล** ด้วย `react-chartjs-2`
* โปรเจกต์นี้เหมาะสำหรับ **เรียนรู้ Next.js 15 App Router + Client Components**

---
