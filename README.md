<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 💻 NetTech - Backend Core (NestJS Migration)

Dự án Hệ thống Quản lý và Kinh doanh Linh kiện PC (NetTech). Backend đã được chuyển đổi từ ExpressJS sang **NestJS Framework** với kiến trúc **Data-centered** chuẩn chỉnh.

## 🚀 Tính năng API đã hoàn thiện

Hiện tại, hệ thống đã thông tuyến các Module cốt lõi sau:

* **🔐 Module Auth (Tài khoản):** * Đăng ký tài khoản khách hàng.
    * Đăng nhập hệ thống & Cấp thẻ xác thực **JWT (JSON Web Token)**.
* **📦 Module Products (Sản phẩm):** * Truy xuất danh sách sản phẩm thực tế từ **MongoDB Atlas**.
    * Hỗ trợ lọc nâng cao (CPU, VGA, Khoảng giá).
    * Xem chi tiết thông số kỹ thuật sản phẩm.
* **🛒 Module Sales (Mua hàng):** * Xử lý logic **Checkout**.
    * Lưu vết đơn hàng (Orders) vào cơ sở dữ liệu.

## 🛠️ Công nghệ sử dụng

- **Framework:** NestJS (Node.js)
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Language:** TypeScript
- **Security:** JWT Authentication
- **Tools:** Postman, ESLint, Git

## ⚙️ Hướng dẫn cài đặt cho thành viên nhóm

Để chạy dự án trên máy cá nhân, các thành viên thực hiện các bước sau:

1. **Clone dự án:**
   ```bash
   git clone https://github.com/TheBottomOfTheDeepDarkOcean/Castone_Project.git

2. **Cài đặt thư viện:**
npm install --legacy-peer-deps

3. **Cấu hình môi trường:**
Tạo file .env ở thư mục gốc.
Dán chuỗi "MONGODB_URI=mongodb://localhost:27017/my_store_db"

4. **Khởi chạy Server:**
# Chế độ lập trình (Auto-reload)
npm run start:dev

**Trạng thái phát triển** 
[x] Khởi tạo kiến trúc NestJS.

[x] Kết nối Database Atlas.

[x] Hoàn thiện API Auth/Product/Sales.