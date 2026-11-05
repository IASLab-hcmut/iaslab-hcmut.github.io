# Intelligent Autonomous Systems Lab (IAS Lab) — website

Website tĩnh cho GitHub Pages. Không cần build.

## Cập nhật nội dung
Hầu hết nội dung nằm trong `assets/data.js`:

| Nội dung | Mục trong `data.js` |
|---|---|
| Tên lab, email, địa chỉ | `LAB` |
| Hướng nghiên cứu | `RESEARCH` |
| Giảng viên (ảnh: `photo: 'assets/img/hieu.jpg'`) | `PROFESSOR` |
| Thành viên / cựu thành viên | `MEMBERS`, `ALUMNI` |
| Dự án (`status: 'ongoing'` / `'completed'`) | `PROJECTS` |
| Bài báo (`type`: ij / ic / dj / dc; `link`: DOI) | `PUBS` |
| Tin tức / thiết bị (`board: 'news'` / `'equipment'`) | `POSTS` |

Ví dụ:
```js
window.MEMBERS = [
  { name: 'Nguyen Van A', role: 'M.S. Student', area: 'Multi-drone cooperation', email: 'a@hcmut.edu.vn' },
];
window.PROJECTS = [
  { status: 'ongoing', name: 'Tên đề tài', content: 'Mô tả ngắn', agency: 'Cơ quan tài trợ', period: '2027. 03 ~ 2029. 02' },
];
// thêm vào POSTS:
{ board: 'news', title: 'Tiêu đề', author: 'Admin', date: '2027-03-01', body: '<p>Nội dung</p>' },
```

Sửa trực tiếp trên GitHub: mở file → biểu tượng bút chì → sửa → **Commit changes**. Trang tự cập nhật sau ~1 phút.
