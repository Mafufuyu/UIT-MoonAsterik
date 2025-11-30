# UIT MoonAsterik — Web Job-Fair (Nhóm 6)

## Giới thiệu dự án
Dự án **UIT MoonAsterik – Job Fair Website** được xây dựng với mục tiêu tạo ra một nền tảng giúp kết nối doanh nghiệp và sinh viên IT. Website hỗ trợ doanh nghiệp đăng tuyển, quản lý ứng viên; sinh viên có thể tạo hồ sơ, xem việc làm, và tương tác với hệ thống.  
Dự án cục khoa học, giao diện thân thiện, và được triển khai trên Vercel.

---

## Giảng viên hướng dẫn & Thông tin nhóm

- **GVHD:** ThS. Võ Tấn Khoa  
- **Lớp:** IE104.Q12.CNVN  
- **Nhóm thực hiện:** Nhóm 6

### Danh sách thành viên

| STT | Họ và tên | MSSV |
|----:|-----------|:-----:|
| 1 | Nguyễn Đình Chiến | 23520182 |
| 2 | Phan Trần Văn Khang | 23520708 |
| 3 | Nguyễn Minh Đức | 23520312 |
| 4 | Võ Thành Đạt | 23520279 |

---

## Hướng dẫn sử dụng dự án

Dự án có **2 cách sử dụng**:

---

### Cách 1 — Chạy trên máy cục bộ (Local)

1. Clone repository:
   ```bash
   git clone https://github.com/Mafufuyu/UIT-MoonAsterik.git
   cd UIT-MoonAsterik
````

2. Mở dự án bằng **VS Code**.

3. Chạy bằng **Live Server**:

   * Nhấn chuột phải vào `index.html`
   * Chọn **Open with Live Server**

---

### Cách 2 — Truy cập bản triển khai (không cần cài đặt)

Dự án đã được triển khai bằng **Vercel**, người dùng chỉ cần truy cập:

**[https://uit-moon-asterik.vercel.app/](https://uit-moon-asterik.vercel.app/)**

---

## Cấu trúc dự án

Cấu trúc thư mục chính của dự án như sau:
## 📂 Cấu trúc Dự án (Project Structure)

### 📁 Root Directory
```text
UIT-MoonAsterik/
├── index.html                  # Trang chủ (Landing Page)
├── README.md                   # Tài liệu hướng dẫn dự án
│
├── 📂 assets/                  # Tài nguyên tĩnh
│   ├── 📂 data/                # Cơ sở dữ liệu mẫu (Mock Data dạng JSON)
│   │   ├── applications.json     # Dữ liệu các đơn ứng tuyển
│   │   ├── blogs.json            # Dữ liệu bài viết tin tức
│   │   ├── companies.json        # Thông tin danh sách các công ty
│   │   ├── company-accounts.json # Tài khoản đăng nhập doanh nghiệp
│   │   ├── jobs.json             # Danh sách các công việc đang tuyển
│   │   ├── stats.json            # Số liệu thống kê hệ thống
│   │   └── student-accounts.json # Tài khoản đăng nhập sinh viên
│   └── 📂 logos/               # Thư mục chứa logo các đối tác (Image files)
│
├── 📂 js/                      # Mã nguồn JavaScript (Logic xử lý)
│   │
│   ├── 📂 modules/             # Các module chức năng  (Components Logic)
│   │   ├── applicants-list.js      # Xử lý render danh sách ứng viên
│   │   ├── applicants-status.js    # Xử lý cập nhật trạng thái đơn (Pending/Accepted...)
│   │   ├── company-job-edit.js     # Logic chỉnh sửa bài đăng tuyển dụng
│   │   ├── company-job-post.js     # Logic đăng bài tuyển dụng mới
│   │   ├── company-profile-form.js # Xử lý form nhập liệu hồ sơ công ty
│   │   ├── company-profile-loader.js # Load dữ liệu hồ sơ công ty lên giao diện
│   │   ├── company-profile-save.js   # Logic lưu hồ sơ công ty
│   │   ├── dashboard-applications.js # Logic quản lý đơn tại dashboard
│   │   ├── dashboard-recommended.js  # Gợi ý việc làm phù hợp
│   │   ├── job-detail.js           # Xử lý trang chi tiết công việc
│   │   ├── job-display.js          # Render danh sách thẻ công việc (Cards)
│   │   ├── job-filter.js           # Logic bộ lọc và tìm kiếm việc làm
│   │   ├── login.js                # Xử lý logic đăng nhập
│   │   ├── notification.js         # Hệ thống thông báo (Alerts/Toasts)
│   │   ├── profile-edit.js         # Chức năng chỉnh sửa profile sinh viên
│   │   ├── profile-loader.js       # Load dữ liệu profile sinh viên
│   │   └── signup.js               # Xử lý logic đăng ký tài khoản
│   │
│   ├── 📂 pages/               # Script riêng biệt cho các trang chính (Page-specific logic)
│   │   ├── blogs.js                # Logic cho trang tin tức
│   │   └── index.js                # Logic cho trang chủ (Home)
│   │
│   ├── company-applicants.js   # Điều khiển chính trang quản lý ứng viên
│   ├── company-dashboard.js    # Điều khiển chính Dashboard doanh nghiệp
│   ├── company-profile.js      # Điều khiển chính trang hồ sơ công ty
│   ├── jobs.js                 # Điều khiển chính trang tìm việc
│   ├── profile.js              # Điều khiển chính trang hồ sơ cá nhân
│   ├── site.js                 # Script cấu hình chung toàn trang
│   └── student-dashboard.js    # Điều khiển chính Dashboard sinh viên
│
├── 📂 pages/                   # Giao diện HTML
│   └── 📂 html/
│       ├── applications.html       # Giao diện quản lý đơn ứng tuyển (My Applications)
│       ├── blogs.html              # Giao diện trang tin tức/Blog
│       ├── company-applicants.html # Giao diện xem danh sách ứng viên (Doanh nghiệp)
│       ├── company-dashboard.html  # Giao diện Dashboard (Doanh nghiệp)
│       ├── company-detail.html     # Giao diện chi tiết công ty (Public view)
│       ├── jobs.html               # Giao diện trang danh sách việc làm
│       ├── profile.html            # Giao diện hồ sơ cá nhân (Sinh viên)
│       └── student-dashboard.html  # Giao diện Dashboard (Sinh viên)
│
└── 📂 styles/                  # Mã nguồn CSS (Giao diện & Định dạng)
    ├── blogs.css               # Style cho trang Blog
    ├── company-applicants.css  # Style cho trang quản lý ứng viên
    ├── company-dashboard.css   # Style cho dashboard doanh nghiệp
    ├── company-forms.css       # Style cho các form của doanh nghiệp
    ├── company-modals.css      # Style cho các cửa sổ popup (Modal)
    ├── company-profile.css     # Style cho trang hồ sơ công ty
    ├── index.css               # Style riêng cho trang chủ
    ├── jobs.css                # Style cho trang việc làm
    ├── main.css                # CSS Global (dùng chung cho toàn web)
    ├── notification.css        # Style cho thông báo hệ thống
    ├── profile-styles.css      # Style bổ sung cho profile
    ├── profile.css             # Style chính cho trang profile
    └── student-dashboard.css   # Style cho dashboard sinh viên

---
### 📝 Ghi chú về cấu trúc:
* **Dữ liệu (Assets/Data):** Dự án sử dụng các file JSON trong `assets/data` để đóng vai trò như một cơ sở dữ liệu giả lập (Mock Database), giúp trang web hoạt động đầy đủ chức năng mà không cần Backend Server thực tế.
* **Modular JavaScript:** Mã nguồn JS được chia nhỏ thành các `modules` trong thư mục `js/modules/` (ví dụ: `job-filter.js`, `login.js`) để dễ dàng bảo trì và tái sử dụng code cho nhiều trang khác nhau.
* **Giao diện (Pages & Styles):** Mỗi trang HTML trong `pages/html` đều có các file CSS và JS tương ứng để đảm bảo tính độc lập và dễ quản lý giao diện.

## Triển khai (Deployment)

Dự án được triển khai tự động trên Vercel.
Mỗi lần `git push` lên `main` → Vercel tự build và deploy bản mới.

---

## Liên hệ / Góp ý

Mọi trao đổi hoặc yêu cầu cập nhật dự án có thể liên hệ thành viên 

