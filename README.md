# Bản đồ 3D Park Güell – IE402

> **Môn học:** Hệ Thống Thông Tin Địa Lý 3 Chiều (IE402)  
> **Đề tài:** Bản đồ 3D Công viên Park Güell – Barcelona (Antoni Gaudí)  
> **Công nghệ:** ArcGIS API for JavaScript 4.29 (3D: SceneView, ExtrudeSymbol3DLayer, ObjectSymbol3DLayer)

---

## Kiến trúc dự án (3D)

```
arcgis/
├── index.html              ← PM Chương – SceneView, camera, widgets, AMD require()
├── css/
│   └── style.css           ← Tiên La – giao diện mosaic/Gaudí theme
├── js/
│   ├── buildings.js        ← Mạnh + Hà   – 3D công trình kiến trúc (Sala Hipóstila + Porter's Lodge)
│   ├── structures.js       ← Phúc + Phát – 3D cấu trúc cảnh quan (Ghế rắn + Cầu thang Rồng + Cầu vòm)
│   └── features.js         ← Chương      – 3D điểm tiện ích (cây cone, biển chỉ dẫn, ghế đá)
└── assets/
    └── icons/              ← (không cần – dùng ObjectSymbol3DLayer primitive)
```

---

## Phân công thành viên

| Thành viên | File | Khối 3D | Số đối tượng |
|---|---|---|---|
| **Chương** | `index.html` + `js/features.js` | PM – SceneView + Điểm tiện ích 3D | 6 cây + 6 amenities |
| **Mạnh** | `js/buildings.js` | Sala Hipóstila (Sảnh cột Doric) | 3 khối |
| **Hà** | `js/buildings.js` | Porter's Lodge (Nhà bảo vệ + Cổng) | 5 khối |
| **Phúc** | `js/structures.js` | Serpentine Bench (Băng ghế rắn) | 4 đoạn |
| **Phát** | `js/structures.js` | Cầu thang Rồng + Cầu mái vòm | 3 + 4 khối |
| **Tiên La** | `css/style.css` | CSS mosaic/Gaudí theme | — |

**Tổng số đối tượng 3D:** 3 + 5 + 4 + 3 + 4 + 6 + 6 = **31 đối tượng**

---

## Luồng dữ liệu (Kiến trúc AMD 3D)

```
index.html
  └─ require(["esri/WebScene", "esri/views/SceneView", ...])
       └─ view.when(function() {
            window.initBuildings(buildingLayer);   ← từ buildings.js
            window.initStructures(structureLayer);  ← từ structures.js
            window.initFeatures(featureLayer);      ← từ features.js
          })

buildings.js  → window.initBuildings   = function(layer) { require(["esri/Graphic"], cb) }
structures.js → window.initStructures  = function(layer) { require(["esri/Graphic"], cb) }
features.js   → window.initFeatures    = function(layer) { require(["esri/Graphic"], cb) }
```

---

## Coding Convention

| Rule | Đúng | Sai |
|---|---|---|
| Khai báo biến | `var` | `const`, `let` |
| String | `"..."` ghép bằng `+` | Template literal |
| Module | AMD `require([...], function(...){...})` | ES6 `import/export` |
| Geometry 3D | JSON autocast: `type: "polygon"` + rings | `new Polygon({...})` |
| Symbol 3D | `type: "polygon-3d"` / `"point-3d"` | `new PolygonSymbol3D()` |
| Extrude | `ExtrudeSymbol3DLayer`: `size` (m) | `new ExtrudeSymbol3DLayer()` |
| Object 3D | `ObjectSymbol3DLayer`: `primitive: "cone"` | `new ObjectSymbol3DLayer()` |
| Data | Plain JS object array ngoài `require()` | Class/factory |

---

## Chi tiết các khối 3D

### 1. Sala Hipóstila (Mạnh)
- Sảnh cột Doric 86 cột, cao 6m, chịu toàn bộ quảng trường phía trên
- Trần mosaic trencadís xanh trắng
- **Kỹ thuật:** Polygon extrude 6m + 1.2m (mái)

### 2. Porter's Lodge (Hà)
- 2 tòa nhà bánh gừng (gingerbread) màu hồng cam + trắng kem
- Tháp chuông cao 9.5m, cổng sắt rèn 8m
- **Kỹ thuật:** Polygon extrude 5.5–9.5m

### 3. Serpentine Bench (Phúc)
- Băng ghế uốn lượn dài 110m, mosaic trencadís
- Chia làm 4 đoạn bao quanh quảng trường
- **Kỹ thuật:** Polygon cong extrude 0.6m

### 4. Dragon Stairway (Phát)
- Cầu thang 3 bậc từ cổng lên quảng trường
- Tượng rồng El Drac mosaic tại bậc trên cùng
- **Kỹ thuật:** Polygon bậc thang extrude 0.6–1.8m

### 5. Viaducts (Phát)
- 4 cầu mái vòm đá (3.5–4m) bao quanh đồi
- Cột nghiêng style Gaudí
- **Kỹ thuật:** Polygon extrude 2.8–4m

### 6. Features (Chương)
- 6 cây Địa Trung Hải dùng cone primitive
- 6 điểm: tượng rồng, đài phun nước, ghế đá, đồi Calvary
- **Kỹ thuật:** ObjectSymbol3DLayer cone + IconSymbol3DLayer circle

---

## Chạy dự án

Phải chạy qua HTTP server (ArcGIS CDN không hoạt động với `file://`):

```bash
# VS Code Live Server (khuyên dùng)
# Click chuột phải index.html → Open with Live Server

# Hoặc Python
python -m http.server 5500
# Mở: http://localhost:5500

# Hoặc Node
npx serve .
```

---

## Tọa độ trung tâm

| Thông tin | Giá trị |
|---|---|
| Công trình | Park Güell, Barcelona, Tây Ban Nha |
| Kiến trúc sư | Antoni Gaudí (1852–1926) |
| Năm xây dựng | 1900–1914 |
| Camera position | `[2.1530, 41.4145, 380]` (tilt: 55°, heading: 190°) |
| Hệ tọa độ | WGS84 (wkid: 4326) |
| UNESCO | Di sản thế giới từ 1984 |

---

## Checklist kiểm tra

- [ ] SceneView 3D load đúng vị trí Park Güell, Barcelona
- [ ] Camera góc nghiêng 55° nhìn rõ toàn bộ khu di tích
- [ ] 3+1+1+3+4+6 = 18 khối công trình 3D hiển thị (buildings + structures)
- [ ] 6 điểm cây cone xanh + 6 điểm amenities hiển thị
- [ ] Click từng đối tượng → Popup hiển thị Tên + Mô tả + Ảnh
- [ ] Popup ảnh có max-height 200px, border-radius, box-shadow
- [ ] Màu sắc khối 3D khác nhau: vàng kem (cột), hồng cam (nhà), xám (cầu)
- [ ] Legend hiển thị 3 layer
- [ ] Compass, ScaleBar, Home button hoạt động
- [ ] Header hiển thị tên nhóm đầy đủ
- [ ] Console không có lỗi đỏ

---

## Kết quả mong đợi

```
✅ Scene initialized – Park Güell, Barcelona
✅ buildings.js: Đã thêm 8 khối công trình
✅ structures.js: Đã thêm 11 cấu trúc cảnh quan
✅ features.js: Đã thêm 12 điểm tiện ích 3D
```

**Tổng cộng:** 31 đối tượng 3D, 6 thành viên, 1 công trình di sản UNESCO.
