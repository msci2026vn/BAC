# codebase-map.md

## 1. MỤC ĐÍCH

File này là bản đồ codebase của dự án.

AI dùng file này để:
- Biết file nào làm nhiệm vụ gì
- Tìm đúng file cần đọc/sửa
- Không đọc toàn bộ dự án khi không cần
- Không sửa nhầm file ngoài phạm vi
- Cập nhật bản đồ khi tạo file mới

---

## 2. CẤU TRÚC DỰ ÁN

```text
project/
│
├── .codex/
│   ├── codex.md
│   ├── rules.md
│   ├── codebase-map.md
│   └── skills/
│       ├── skill-html-css-js.md
│       ├── skill-ui-fix.md
│       ├── skill-form.md
│       ├── skill-responsive.md
│       ├── skill-animation.md
│       ├── skill-performance.md
│       ├── skill-debug.md
│       └── skill-git.md
│
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── gioi-thieu.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
└── pages/
    └── gioi-thieu.html

---

## 3. DANH MỤC FILE

### Trang HTML
- `index.html` — Trang chủ. Chứa hero, dịch vụ, tin tức, dữ liệu số, đối tác. Style từ `css/style.css` + `css/responsive.css`. Khi sửa menu navigation chính cần đồng bộ với `pages/gioi-thieu.html`.
- `pages/dich-vu-phat-trien.html` — Trang Dịch vụ & phát triển. Mở khi click "Xem Dịch vụ" ở hero `index.html` hoặc "Dịch vụ & phát triển" ở menu. Layout 2 cột: main (intro, info-grid, steps, benefits, CTA, related) + sidebar (danh mục, liên hệ, tài liệu). Style Inter font, inline trong file.
- `pages/dang-ki-tu-van.html` — Trang Đăng ký tư vấn. Hiển thị khi click nút "Đăng ký Tư vấn" ở hero `index.html`. Gồm layout 2 cột: trái (tiêu đề + feature cards), phải (form đăng ký). Style inline trong file. Có JS validate và thông báo thành công.
- `pages/gioi-thieu.html` — Trang Giới thiệu. Gồm topbar, header, hero/breadcrumb, tabs (Tổng quan/Cơ cấu/Lịch sử), 3 card thông tin (Tổng quan, Chức năng nhiệm vụ, Pháp lý), timeline lịch sử phát triển, footer. Style từ `css/gioi-thieu.css`. Mở khi click "Giới thiệu" ở menu `index.html`.

### CSS
- `css/style.css` — Style chung cho `index.html`.
- `css/responsive.css` — Responsive cho `index.html`.
- `css/gioi-thieu.css` — Style riêng cho `pages/gioi-thieu.html` (bao gồm cả phần responsive @media max-width:900px). Đọc khi cần sửa giao diện trang Giới thiệu.

### JS
- `js/main.js` — JS chung của dự án (sử dụng bởi `index.html`).
