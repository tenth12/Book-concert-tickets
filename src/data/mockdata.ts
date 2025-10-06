export const concerts = [
  {
    id: "1",
    name: "BLACKPINK WORLD TOUR",
    date: "24-26 ต.ค. 2568",
    location: "ราชมังคลากีฬาสถาน",
    price: "3500",
    status: "พร้อมจำหน่าย",
  },
  {
    id: "2",
    name: "PLAVE ASIA TOUR",
    date: "25 ต.ค. 2568",
    location: "ยูโอบี ไลฟ์, เอ็มสเฟียร์",
    price: "2800",
    status: "ขายหมดแล้ว",
  },
  {
    id: "3",
    name: "MAGICMAN 2 WORLD TOUR",
    date: "3-4 ต.ค. 2568",
    location: "อิมแพ็ค อารีน่า",
    price: "2500",
    status: "เปิดขาย",
  },
];

export const customers = [
  { id: "C001", name: "สมชาย ใจดี", email: "somchai@email.com" },
  { id: "C002", name: "นภัสสร สุขใจ", email: "napasorn@email.com" },
  { id: "C003", name: "จิราภรณ์ มั่นคง", email: "jiraporn@email.com" },
  { id: "C004", name: "สมปอง ยุกิจ", email: "sompong@email.com" },
  { id: "C005", name: "สมดี สีฟ้า", email: "somdee@email.com" },
  { id: "C006", name: "นภัสสร สุขใจ", email: "napasorn@email.com" }
];

export const bookings = [
  {
    id: "B001",
    customer: "สมชาย ใจดี",
    concert: "BLACKPINK WORLD TOUR",
    seats: 2,
    total: 7000,
  },
  {
    id: "B002",
    customer: "นภัสสร สุขใจ",
    concert: "PLAVE ASIA TOUR",
    seats: 1,
    total: 2800,
  },
  {
    id: "B003",
    customer: "จิราภรณ์ มั่นคง",
    concert: "MAGICMAN 2 WORLD TOUR",
    seats: 3,
    total: 7500,
  },
  {
    id: "B004",
    customer: "สมปอง ยุกิจ",
    concert: "BLACKPINK WORLD TOUR",
    seats: 2,
    total: 7000,
  },
  { 
    id: "B005",
    customer: "สมดี สีฟ้า",
    concert: "MAGICMAN 2 WORLD TOUR",
    seats: 1,
    total: 2500,
  },
  {
    id: "B006",
    customer: "นภัสสร สุขใจ",
    concert: "BLACKPINK WORLD TOUR",
    seats: 1,
    total: 3500,
  },
];
