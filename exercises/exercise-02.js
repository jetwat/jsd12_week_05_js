// Exercise 2
// ----------
// GOAL: Log "Free shipping unlocked!" when cartTotal is 1000 or more.
//       Log "Add more items for free shipping." when it is under 1000.
// A customer with exactly 1000 in their cart should get free shipping,
// but currently they don't. Find and fix the bug.

const cartTotal = 1000;

if (cartTotal >= 1000) {
  console.log("Free shipping unlocked!");
} else {
  console.log("Add more items for free shipping.");
}

// Fix:
// -> ลองรันดูก่อนเลย จะได้เห็นบัคต่าง ๆ และจุดที่บัคชัดเจน
// -> ไม่บัค กลับไปอ่านโจทย์ ลองดูว่าผิดเงื่อนไขอย่างไร
// -> โอเคปัญหาคือเครื่องหมายน้อยกว่าที่ใช้อยู่ ทำให้เปรียบเทียบ 1000 > 1000 = false
// -> ต้องเปลี่ยน operator เป็น `>=` เพื่อให้คนซื้อ 1000 ได้รับสิทธิ์ส่งฟรี
// -> ลองรัน -- โอเค
