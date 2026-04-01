// Exercise 6
// ----------
// GOAL: Set buttonLabel to "Out of Stock" when stock is 0,
//       and "Add to Cart" when stock is greater than 0.
// The ternary is syntactically correct but the logic is wrong.
// Find and fix the bug.

const stock = 0;

const buttonLabel = stock > 0 ? "Add to Cart" : "Out of Stock";
console.log(buttonLabel);

// Fix:
// -> ลองรันเพื่อดูอย่างรวดเร็วว่าตอนนี้เข้าเงื่อนไขอะไร ผล: "Add to Cart" ออกหน้าคอนโซล
//    แปลว่าเงื่อนไขเป็นเท็จ และถูก assign ให้ `buttonLabel`
// -> อ่านโจทย์พบว่าค่าไม่เป็นไปตามคาดหวัง พบว่า โค้ดดั้งเดิมวาง ผลลัพธ์เมื่อจริง และ ผลลัพธ์เมื่อจริง สลับที่กัน
// -> ไม่เลือกเปลี่ยนเครื่องหมายเป็น `=` เพื่อป้องกันไม่ให้ส่งค่ากลับผิดหากค่าติดลบ
// -> สลับที่แล้วลองรัน -- ok
