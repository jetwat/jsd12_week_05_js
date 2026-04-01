// Exercise 5
// ----------
// GOAL: Assign salePrice to displayPrice when isOnSale is true,
//       otherwise assign originalPrice.
// The code has a syntax error. Find and fix it.

const isOnSale = true;
const salePrice = 29.99;
const originalPrice = 49.99;

const displayPrice = isOnSale ? salePrice : originalPrice;
console.log("Price: $" + displayPrice);

// Fix:
// -> เปิดมาโค้ดก็แดงเลย extension ช่วย ไม่ต้องลองรัน 555
// -> colon หายไป จาก ternary operator ลองใส่แล้วหายแดง
// -> ลองรัน ผล "Price: $29.99" ออกหน้าคอนโซล
// -> กลับไปอ่านโจทย์ สรุปว่าโอเคแล้ว
