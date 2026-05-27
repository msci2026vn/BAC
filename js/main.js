const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const subscribeForm = document.querySelector(".subscribe-form");
const searchBox = document.querySelector(".search-box");
const chatBox = document.querySelector(".chat");
const chatToggle = document.querySelector(".chat-head button");
const chatAvatar = document.querySelector(".chat-avatar");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? "×" : "☰";
  });
}

if (searchBox) {
  searchBox.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Chức năng tìm kiếm đang chờ tích hợp dữ liệu.");
  });
}

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = String(new FormData(subscribeForm).get("email") || "").trim();
    const status = document.querySelector(".form-status");
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!status) return;

    if (!isValidEmail) {
      status.textContent = "Vui lòng nhập email hợp lệ.";
      return;
    }

    status.textContent = "Đã ghi nhận email đăng ký.";
    subscribeForm.reset();
  });
}

if (chatBox && chatToggle) {
  chatToggle.addEventListener("click", () => {
    const isMinimized = chatBox.classList.toggle("is-minimized");
    chatToggle.textContent = isMinimized ? "+" : "−";
    chatToggle.setAttribute("aria-label", isMinimized ? "Mở rộng" : "Thu gọn");
  });
}

if (chatBox && chatAvatar) {
  chatAvatar.addEventListener("click", () => {
    chatBox.classList.remove("is-minimized");
    if (chatToggle) {
      chatToggle.textContent = "−";
      chatToggle.setAttribute("aria-label", "Thu gọn");
    }
  });
}
