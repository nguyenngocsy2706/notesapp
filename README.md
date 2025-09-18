# Notes App

Ứng dụng web nhỏ cho phép viết và lưu ghi chú nhanh chóng. Ghi chú được lưu trữ trong **localStorage** của trình duyệt và có thể sử dụng **offline** nhờ Service Worker.

---

## Tính năng

* Thêm ghi chú mới.
* Xóa ghi chú.
* Lưu ghi chú bằng **localStorage** → không mất khi tải lại trang.
* Hỗ trợ **offline** nhờ Service Worker (mở lại app khi mất mạng vẫn hoạt động).
* (Tuỳ chọn) Có thể mở rộng để hỗ trợ **Markdown**.

---

## Công nghệ sử dụng

* **HTML**: xây dựng giao diện.
* **CSS**: thiết kế giao diện thân thiện.
* **JavaScript**: xử lý logic thêm/xóa/lưu ghi chú.
* **localStorage**: lưu trữ ghi chú trong trình duyệt.
* **Service Worker**: cache file để chạy offline.

---

## Cấu trúc thư mục

```
notes-app/
│── index.html
│── style.css
│── app.js
│── service-worker.js
│── README.md
```

---

## ▶Cách chạy

1. Clone hoặc tải project về:

   ```bash
   git clone <link-repo>
   ```
2. Mở thư mục bằng **Visual Studio Code**.
3. Cài extension **Live Server** trên VS Code.
4. Nhấn chuột phải vào `index.html` → **Open with Live Server**.
5. Trình duyệt sẽ mở ứng dụng tại địa chỉ:

   ```
   http://127.0.0.1:5500/
   ```

---

## Demo giao diện

*(thêm ảnh chụp màn hình app của bạn tại đây nếu muốn)*

---

## Ghi chú

* Khi chạy lần đầu cần kết nối mạng để Service Worker tải và lưu cache.
* Sau đó có thể mở lại app ở chế độ **Offline** vẫn dùng được.
