const btn = document.querySelector(".btn");

// ถ้ามีปุ่ม btn ในอนาคต ใช้เพิ่ม interaction ได้
if (btn) {
  btn.addEventListener("click", function () {
    console.log("Open Resume clicked");
  });
}