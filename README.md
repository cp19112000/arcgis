# Bản đồ Công viên Gia Định – IE402

> **Môn học:** Hệ Thống Thông Tin Địa Lý 3 Chiều (IE402)  
> **Đề tài:** Bản đồ Quản lý Công viên Công cộng – Công viên Gia Định  
> **Công nghệ:** ArcGIS API for JavaScript 4.29

---

## Cấu trúc dự án

```
arcgis/
├── index.html          ← Chương (PM) – setup Map, MapView, Widgets
├── css/
│   └── style.css       ← Tiên La   – giao diện, header, legend, popup
├── js/
│   ├── polygons.js     ← Mạnh      – 6 khu vực đa giác
│   ├── polylines.js    ← Hà        – 6 tuyến đường
│   └── points.js       ← Phúc      – 6 điểm tiện ích + icon
└── assets/
    └── icons/          ← Phúc      – icon PNG/SVG cho các điểm
```

---

## Phân công thành viên

| Thành viên | File | Nhiệm vụ |
|---|---|---|
| **Chương** | `index.html` | PM – setup Map, MapView, GraphicsLayer, Widgets |
| **Mạnh** | `js/polygons.js` | 6 đa giác màu khác nhau |
| **Hà** | `js/polylines.js` | 6 tuyến đường nét khác nhau |
| **Phúc** | `js/points.js` + `assets/icons/` | 6 điểm + PictureMarkerSymbol |
| **Phát** | Cập nhật `ImageUrl` trong cả 3 file JS | Thiết kế nội dung Popup |
| **Tiên La** | `css/style.css` | CSS giao diện tổng thể |

---

## Luồng dữ liệu (Kiến trúc AMD)

1. Browser load `index.html`
2. `<script src="js/polygons.js">` định nghĩa `window.initPolygons`
3. `<script src="js/polylines.js">` định nghĩa `window.initPolylines`  
4. `<script src="js/points.js">` định nghĩa `window.initPoints`
5. `require([...])` trong `index.html` khởi tạo Map, MapView, GraphicsLayer
6. `view.when()` gọi `initPolygons(layer)`, `initPolylines(layer)`, `initPoints(layer)`
7. Mỗi init function tự `require(["esri/Graphic"])` và add graphics vào layer

```
index.html
  └─ require(["esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer", ...])
       └─ view.when(function() {
            window.initPolygons(polygonLayer);
            window.initPolylines(polylineLayer);
            window.initPoints(pointLayer);
          })

polygons.js  → expose window.initPolygons  = function(layer) { require([...], cb) }
polylines.js → expose window.initPolylines = function(layer) { require([...], cb) }
points.js    → expose window.initPoints    = function(layer) { require([...], cb) }
```

---

## Coding Convention

| Rule | Đúng | Sai |
|---|---|---|
| Khai báo biến | `var` | `const`, `let` |
| String | `"..."` ghép bằng `+` | Template literal |
| Geometry | JSON autocast: `geometry: data` khi `data.type = "point"` | `new Point({...})` nếu không cần thiết |
| Symbol | JSON autocast: `symbol: { type: "simple-marker", ... }` | `new SimpleMarkerSymbol({...})` |
| Module style | `require([...], function(A, B) { ... })` | `import A from "..."` |
| Data definition | Plain JS object array ngoài `require()` | Class, factory pattern |
| createGraphic | `function createGraphic(data) { return new Graphic({...}) }` | Arrow function |

**Lưu ý:** Không dùng ES Modules (`import`/`export`); tất cả module dùng AMD `require()`.

---

## Chạy dự án

Vì dự án dùng ArcGIS CDN và load module bằng `<script>` động,  
**phải chạy qua HTTP server** (không mở file HTML trực tiếp bằng `file://`).

### Cách 1: VS Code Live Server (khuyên dùng)
1. Cài extension **Live Server** trong VS Code
2. Click chuột phải vào `index.html` → **Open with Live Server**

### Cách 2: Python HTTP Server
```bash
python -m http.server 5500
```
Sau đó mở: http://localhost:5500

### Cách 3: Node.js
```bash
npx serve .
```

---

## Checklist kiểm tra

- [ ] Bản đồ load đúng tọa độ Công viên Gia Định (zoom 17)
- [ ] Hiển thị đủ 6 đa giác với màu sắc khác nhau
- [ ] Hiển thị đủ 6 tuyến đường với nét/màu khác nhau
- [ ] Hiển thị đủ 6 điểm với icon khác nhau
- [ ] Click vào bất kỳ đối tượng nào → Popup hiển thị đúng Tên, Mô tả, Ảnh
- [ ] Legend (Chú giải) hiển thị đúng
- [ ] Giao diện có Header tiêu đề rõ ràng
- [ ] Responsive trên mobile cơ bản
- [ ] Console không có lỗi đỏ
- [ ] File load đúng thứ tự, không lỗi timing

---

## Tọa độ trung tâm

| Thông tin | Giá trị |
|---|---|
| Công viên | Công viên Gia Định, Q.Gò Vấp – Bình Thạnh |
| Center | `[106.674, 10.812]` |
| Zoom | `17` |
| Hệ tọa độ | WGS84 (wkid: 4326) |

---

## Ghi chú kỹ thuật

- Tất cả tọa độ dạng `[longitude, latitude]`
- Mỗi polygon cần điểm đầu = điểm cuối (để đóng vòng)
- Icon PNG nên là `32x32px` hoặc `36x36px` để hiển thị đẹp
- Ảnh trong Popup nên dùng link ảnh thực tế của công viên
- **Không dùng ES Modules / import-export**; tất cả module dùng AMD `require()`
- `PictureMarkerSymbol` cần `url` là đường dẫn accessible qua HTTP server
