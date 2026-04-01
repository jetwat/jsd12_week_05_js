// Exercise 3
// ----------
// GOAL: Log "Proceed to checkout" if the user is logged in.
//       Log "Please log in first." if the user is NOT logged in.
// When isLoggedIn is false, nothing is logged at all. Fix the code.

const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Proceed to checkout");
} else {
  console.log("Please log in first");
}

// Fix:
// -> ลองรันแล้ว ไม่มีค่าอะไรส่งออกคอนโซล
// -> อ่านโจทย์ พบว่า โค้ดดั้งเดิมลืมใส่เงื่อนไข else ทำให้ไม่มีค่าส่งกลับหากเงื่อนไขเป็นเท็จ
//    ทำให้ไม่มีค่าส่งกลับเมื่อ user ไม่ได้ล็อกอิน
// -> เพิ่ม else statement แล้วลองรัน -- ok
