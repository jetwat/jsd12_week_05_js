// Exercise 1
// ----------
// GOAL: Log "In stock" if stockStatus is "available", otherwise log "Out of stock".
// There is one bug on the if condition line. Find and fix it.

const stockStatus = "available";

if (stockStatus === "available") {
  console.log("In stock");
} else {
  console.log("Out of stock");
}

// Fix:
// -> เริ่มจากการสังเกต syntax เนื่องจาก README บอกว่าต้อง Debug
// -> เห็นว่าใช้ เครื่องหมาย `=` ตัวเดียว ซึ่งตามหลักไวยากรณ์คือการ assign ค่า
// แต่เคสนี้เราต้องการสร้างเงื่อนไขเปรียบเทียบ เราต้องใช้ operator `==` หรือ `===`
// -> เลือกใช้ เป็น `===` เพื่อความ strict
// -> ลองรัน -- ได้ผลลัพธ์ "In stock"
//
