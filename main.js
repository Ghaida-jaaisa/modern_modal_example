const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

// ✅ حساب عرض شريط التمرير لمنع "قفزة" المحتوى عند تجميد التمرير
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function lockScroll() {
  const scrollBarWidth = getScrollbarWidth();
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = scrollBarWidth + "px";
}

function unlockScroll() {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

// ✅ فتح المودال
openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  lockScroll();

  // جعل المودال في منتصف النافذة
  centerModal();
});

// ✅ إغلاق المودال
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  unlockScroll();
});

// ✅ تحديث تموضع المودال عند تغيير حجم النافذة
window.addEventListener("resize", () => {
  centerModal();
});

function centerModal() {
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  modal.style.maxHeight = Math.min(vh - 100, 500) + "px";
  console.log(`Viewport size: ${vw}×${vh}`);
}
