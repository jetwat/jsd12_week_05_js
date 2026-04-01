// Exercise 7
// ----------
// GOAL: Log the matching message for each order status:
//   "processing" → "Your order is being processed."
//   "shipped"    → "Your order is on the way!"
//   "delivered"  → "Your order has been delivered."
//   anything else → "Status unknown. Please contact support."
// When orderStatus is "cancelled", nothing is logged. Fix the code.

const orderStatus = "ป";

if (orderStatus === "processing") {
  console.log("Your order is being processed.");
} else if (orderStatus === "shipped") {
  console.log("Your order is on the way!");
} else if (orderStatus === "delivered") {
  console.log("Your order has been delivered.");
} else if (orderStatus === "cancelled") {
  console.log("");
}

// Fix:
// -> อ่านโจทย์ก่อน ขี้เกียจเขียนครับ
// -> เท่าที่เห็น น่าจะไม่มีค่าออกมาเพราะไม่มีการเขียน `else` ไว้
//    ทำให้ ไม่สามารถส่งค่า "Status unknown. Please contact support." ออกมาได้
//    อีกทั้งยังไม่มีการใส่เงื่อนไขหากเป็น "cancelled" ซึ่งหากไม่มีเงื่อนไข anything else ก็คงพอถูไถไปได้
// -> เพิ่ม else if cancelled ลองรัน -- ok
