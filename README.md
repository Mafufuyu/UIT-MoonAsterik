#  UIT MoonAsterisk — Web Job-Fair (Nhóm 6)

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

##  Giới thiệu dự án

**UIT MoonAsterik – Job Fair Website** là đồ án môn học được xây dựng với mục tiêu tạo ra một nền tảng kết nối hiệu quả giữa doanh nghiệp và sinh viên IT.

* **Doanh nghiệp:** Đăng tin tuyển dụng, quản lý hồ sơ ứng viên và quảng bá thương hiệu.
* **Sinh viên:** Tạo CV trực tuyến, tìm kiếm việc làm phù hợp và tương tác với nhà tuyển dụng.
* **Đặc điểm:** Giao diện thân thiện, responsive, sử dụng Mock Data (JSON) và được triển khai tự động trên Vercel.

---

##  Giảng viên & Nhóm thực hiện

* **Môn học:** Internet và Công nghệ Web (IE104.Q12.CNVN)
* **GVHD:** ThS. Võ Tấn Khoa
* **Nhóm:** 06

###  Danh sách thành viên

| STT | Họ và tên | MSSV | Vai trò |
|:---:|:---|:---:|:---|
| 1 | **Nguyễn Đình Chiến** | 23520182 | Thành viên |
| 2 | **Phan Trần Văn Khang** | 23520708 | Thành viên |
| 3 | **Nguyễn Minh Đức** | 23520312 | Thành viên |
| 4 | **Võ Thành Đạt** | 23520279 | Thành viên |

---

## Hướng dẫn cài đặt & Sử dụng

Bạn có thể trải nghiệm dự án theo 2 cách dưới đây:

###  Cách 1: Truy cập trực tiếp (Khuyên dùng)
Dự án đã được triển khai (deploy) trên nền tảng Vercel. Bạn không cần cài đặt gì thêm.

 **Link Demo:** [**https://uit-moon-asterik.vercel.app/**](https://uit-moon-asterik.vercel.app/)

### 💻 Cách 2: Chạy trên máy cục bộ (Local)

**Bước 1: Clone dự án về máy**
```bash
git clone [https://github.com/Mafufuyu/UIT-MoonAsterik.git](https://github.com/Mafufuyu/UIT-MoonAsterik.git)
cd UIT-MoonAsterik
````

**Bước 2: Mở dự án**

  * Mở thư mục vừa clone bằng **VS Code**.

**Bước 3: Chạy Server**

  * Cài đặt Extension **Live Server** trên VS Code.
  * Chuột phải vào file `index.html` -\> Chọn **"Open with Live Server"**.

-----

##  Cấu trúc Dự án (Project Structure)

Dưới đây là cây thư mục chi tiết của mã nguồn:

```text
UIT-MoonAsterik/
├── index.html                  # Trang chủ (Landing Page)
├── README.md                   # Tài liệu hướng dẫn dự án
│
├── 📂 assets/                  # Tài nguyên tĩnh
│   ├── 📂 data/                # Mock Data (Giả lập Database dạng JSON)
│   │   ├── applications.json     # Dữ liệu các đơn ứng tuyển
│   │   ├── blogs.json            # Dữ liệu bài viết tin tức
│   │   ├── companies.json        # Danh sách thông tin công ty
│   │   ├── company-accounts.json # Tài khoản đăng nhập doanh nghiệp
│   │   ├── jobs.json             # Danh sách việc làm đang tuyển
│   │   ├── stats.json            # Số liệu thống kê hệ thống
│   │   └── student-accounts.json # Tài khoản đăng nhập sinh viên
│   └── 📂 logos/               # Thư mục chứa logo đối tác
│
├── 📂 js/                      # Mã nguồn JavaScript (Logic xử lý)
│   │
│   ├── 📂 modules/             # Các module chức năng (Components Logic)
│   │   ├── applicants-list.js      # Render danh sách ứng viên
│   │   ├── applicants-status.js    # Cập nhật trạng thái đơn (Pending/Accepted)
│   │   ├── company-job-edit.js     # Logic chỉnh sửa bài đăng tuyển dụng
│   │   ├── company-job-post.js     # Logic đăng bài tuyển dụng mới
│   │   ├── company-profile-form.js # Xử lý form hồ sơ công ty
│   │   ├── company-profile-loader.js # Load dữ liệu hồ sơ công ty
│   │   ├── company-profile-save.js   # Logic lưu hồ sơ công ty
│   │   ├── dashboard-applications.js # Quản lý đơn tại dashboard
│   │   ├── dashboard-recommended.js  # Gợi ý việc làm phù hợp
│   │   ├── job-detail.js           # Xử lý trang chi tiết công việc
│   │   ├── job-display.js          # Render thẻ công việc (Job Cards)
│   │   ├── job-filter.js           # Bộ lọc và tìm kiếm việc làm
│   │   ├── login.js                # Xử lý đăng nhập
│   │   ├── notification.js         # Hệ thống thông báo (Alerts/Toasts)
│   │   ├── profile-edit.js         # Chỉnh sửa profile sinh viên
│   │   ├── profile-loader.js       # Load dữ liệu profile sinh viên
│   │   └── signup.js               # Xử lý đăng ký tài khoản
│   │
│   ├── 📂 pages/               # Script riêng cho từng trang (Page Logic)
│   │   ├── blogs.js                # Logic trang tin tức
│   │   └── index.js                # Logic trang chủ
│   │
│   ├── company-applicants.js   # Điều khiển trang quản lý ứng viên
│   ├── company-dashboard.js    # Điều khiển Dashboard doanh nghiệp
│   ├── company-profile.js      # Điều khiển trang hồ sơ công ty
│   ├── jobs.js                 # Điều khiển trang tìm việc
│   ├── profile.js              # Điều khiển trang hồ sơ cá nhân
│   ├── site.js                 # Cấu hình chung (Global config)
│   └── student-dashboard.js    # Điều khiển Dashboard sinh viên
│
├── 📂 pages/                   # Giao diện HTML
│   └── 📂 html/
│       ├── applications.html       # Quản lý đơn ứng tuyển (My Applications)
│       ├── blogs.html              # Trang Tin tức/Blog
│       ├── company-applicants.html # Danh sách ứng viên (Doanh nghiệp)
│       ├── company-dashboard.html  # Dashboard (Doanh nghiệp)
│       ├── company-detail.html     # Chi tiết công ty (Public view)
│       ├── jobs.html               # Trang danh sách việc làm
│       ├── profile.html            # Hồ sơ cá nhân (Sinh viên)
│       └── student-dashboard.html  # Dashboard (Sinh viên)
│
└── 📂 styles/                  # Mã nguồn CSS (Giao diện & Định dạng)
    ├── blogs.css               # Style trang Blog
    ├── company-applicants.css  # Style trang quản lý ứng viên
    ├── company-dashboard.css   # Style dashboard doanh nghiệp
    ├── company-forms.css       # Style các form doanh nghiệp
    ├── company-modals.css      # Style cửa sổ popup (Modal)
    ├── company-profile.css     # Style trang hồ sơ công ty
    ├── index.css               # Style trang chủ
    ├── jobs.css                # Style trang việc làm
    ├── main.css                # Global CSS (Dùng chung)
    ├── notification.css        # Style thông báo hệ thống
    ├── profile-styles.css      # Style bổ sung profile
    ├── profile.css             # Style chính trang profile
    └── student-dashboard.css   # Style dashboard sinh viên
```

###  Ghi chú kỹ thuật:

  * **Kiến trúc:** Dự án thuần Frontend (HTML/CSS/JS).
  * **Database:** Sử dụng `JSON` files trong thư mục `assets/data/` làm Mock Database. Không yêu cầu Backend Server.
  * **Modular:** Code JS được chia nhỏ thành các module để dễ bảo trì và tái sử dụng.

-----

##  Triển khai (Deployment)

Dự án được cấu hình **CI/CD** tự động với Vercel.

  * Mỗi khi có commit mới được `push` lên nhánh `main`, Vercel sẽ tự động build và cập nhật phiên bản mới nhất.

-----

## 📞 Liên hệ

Mọi ý kiến đóng góp xin vui lòng liên hệ với nhóm phát triển 

