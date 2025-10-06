export type Concert = {
  id: string;
  title: string;
  subtitle?: string;
  dateLong: string;
  time: string;
  doors: string;
  venue: string;
  venueLong?: string;
  prices: Record<string, number>; // zone -> price
  ticketStatus: "ON SALE NOW" | "SOLD OUT";
  onSale: string;
  channels: string;
  paymentMethods: string;
  description?: string;
  terms?: string[];
  image: string;
};

export const concerts: Concert[] = [
  {
    id: "1",
    title: "2025 PLAVE Asia Tour [DASH: Quantum Leap] in Bangkok",
    subtitle: "UOB LIVE (Emsphere) — 25 October 2025",
    dateLong: "25 ตุลาคม 2568",
    time: "18:00 น.",
    doors: "17:00 น.",
    venue: "UOB LIVE, Emsphere",
    venueLong: "UOB LIVE (Emsphere)",
    prices: {
      6000: 6000,
      4500: 4500,
      3000: 3000,
    },
    ticketStatus: "SOLD OUT",
    onSale: "27 กรกฎาคม 2568, 11:00 น.",
    channels: "book concert tickets",
    paymentMethods:
      "Credit/Debit, K Pay Plus, BBL iBanking, ShopeePay, TrueMoney, Alipay, WeChat Pay",
    description:
      "รายละเอียด :\nชื่อ : 2025 PLAVE Asia Tour [DASH: Quantum Leap] in Bangkok\nวันที่แสดง : วันเสาร์ที่ 25 ตุลาคม 2568\nเวลาแสดง : 18:00 น.\nประตูเปิด : 17:00 น.\nสถานที่แสดง : UOB LIVE (Emsphere)\nราคาบัตร : 6,000 / 4,500 และ 3,000 บาท",
    terms: [
      "ดำเนินการซื้อบัตรฯ และชำระเงินให้เสร็จสิ้นภายใน 10 นาที",
      "สามารถทำการสั่งซื้อบัตรฯ ได้สูงสุดไม่เกิน 2 ใบต่อรายการ",
      "ราคาบัตรฯ รวมภาษีมูลค่าเพิ่ม 7% แล้ว แต่ยังไม่รวมค่าธรรมเนียมอื่น ๆ ",
      "บัตรเข้าชมคอนเสิร์ตเป็นบัตรกระดาษที่ออกโดยบุ๊คคอนเสิร์ชทิคเก็ต",
      "สำหรับผู้ถือบัตรฯ ทุกประเภท จะได้รับแพ็คเกจ ณ ประตูทางเข้าฮอลล์ก่อนเริ่มการแสดง"
    ],
    image: "/img/plave_asia_tour.jpg",
  },
  {
    id: "2",
    title: "BLACKPINK WORLD TOUR < DEADLINE > IN BANGKOK",
    subtitle: "ราชมังคลากีฬาสถาน — 24-26 ตุลาคม 2568",
    dateLong: "24-26 ตุลาคม 2568",
    time: "19:00 น.",
    doors: "16:00 น.",
    venue: "ราชมังคลากีฬาสถาน",
    prices: {
      VIP: 8800,
      A: 7800,
      B: 6800,
      C: 5800,
      D: 4800,
      E: 3800,
      F: 3300,
      G: 2800,
    },
    ticketStatus: "ON SALE NOW",
    onSale: "28 กันยายน 2568, 10:00 น.",
    channels: "book concert ticket",
    paymentMethods: "Credit/Debit, TrueMoney, ShopeePay, QR Payment",
    description:
      "การกลับมาอีกครั้งของ BLACKPINK กับเวิลด์ทัวร์ < DEADLINE > ที่จะระเบิดความมันส์ที่กรุงเทพฯ 24-26 ตุลาคม 2568 ณ ราชมังคลากีฬาสถาน",
    terms: [
      "ชำระเงินภายในเวลาที่กำหนด",
      "ซื้อบัตรได้สูงสุด 4 ใบต่อรายการ",
      "ราคาบัตรรวมภาษีมูลค่าเพิ่มแล้ว แต่ไม่รวมค่าธรรมเนียมอื่น ๆ",
      "บัตรเป็นแบบกระดาษ ต้องแสดงหน้างานเพื่อเข้างาน",
    ],
    image: "/img/Blackpink_world_tour.png",
  },
  {
    id: "3",
    title: "MAGICMAN 2 WORLD TOUR 2025-2026 in Bangkok",
    subtitle: "อิมแพ็ค อารีน่า — 3-4 ตุลาคม 2568",
    dateLong: "3-4 ตุลาคม 2568",
    time: "20:00 / 19:00 น.",
    doors: "ก่อนการแสดงเริ่มประมาณ 1 ชั่วโมง",
    venue: "อิมแพ็ค อารีน่า",
    venueLong: "Impact Arena, Muang Thong Thani",
    prices: {
      VIP: 18000,
      P1: 9000,
      P2: 6900,
      P3: 6500,
      P4: 5500,
      P5: 4300,
      P6: 3500,
      P7: 2900,
    },
    ticketStatus: "ON SALE NOW",
    onSale: "20 กันยายน 2568, 12:00 น.",
    channels: "book concert ticket",
    paymentMethods:
      "Credit/Debit, K Pay Plus, BBL iBanking, ShopeePay, TrueMoney, Alipay, WeChat Pay",
    description:
      "MAGICMAN 2 WORLD TOUR 2025-2026 in Bangkok Presented by Galaxy Resorts Thailand … เปิดการแสดง 3-4 ตุลาคม 2568 ที่อิมแพ็ค อารีน่า …",
    terms: [
      "จำกัดการซื้อทุกช่องทาง 1 ท่านต่อบัตร 6 ใบ",
      "ราคาบัตรยังไม่รวมค่าธรรมเนียมและค่าพลาสติกออกบัตร 50 บาท",
      "ใช้บัตรกระดาษในการเข้างาน",
      "เด็กสูงเกิน 100 ซม. ต้องมีบัตร",
    ],
    image: "/img/Magicman_2_world_tour.jpg",
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
