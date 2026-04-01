// Exercise 8 — Refactor
// ---------------------
// GOAL: The if...else below works correctly. Rewrite it as a single ternary
//       expression that assigns the value to shippingLabel.
// Hint: you only need one line to replace the entire if...else block.

const cartTotal = 1200;
let shippingLabel = cartTotal >= 1000 ? "FREE" : "$9.99";

// if (cartTotal >= 1000) {
//   shippingLabel = "FREE";
// } else {
//   shippingLabel = "$9.99";
// }

console.log("Shipping: " + shippingLabel);

// Refactor:
// -> โจทย์อยากให้ refactor โดยใช้ ternary เท่านั้น
// -> แก้โดยก้อปคอนดิชันและผลต่าง ๆ ไปวาง ในบรรทัด 12
// -> ลองรัน -- ok
