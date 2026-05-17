# Bản đồ 2D Nhà thờ Đức Bà Sài Gòn – IE402 (LOD0→LOD3.3)

> **Môn học:** Hệ Thống Thông Tin Địa Lý 3 Chiều (IE402)  
> **Đề tài:** Bản đồ 2D Nhà thờ Đức Bà Sài Gòn – Quận 1, TP. Hồ Chí Minh  
> **Mức chi tiết:** LOD0 (cảnh quan) → LOD3.3 (chi tiết kiến trúc mô phỏng 3D trên 2D)  
> **Công nghệ:** ArcGIS API for JavaScript 4.29 (MapView 2D, GraphicsLayer, SimpleFillSymbol, PictureMarkerSymbol)

---

## Kiến trúc dự án

```
arcgis/
├── index.html                    ← MapView, AMD require(), widgets, LayerList
├── css/
│   └── style.css                 ← Theme nâu đá cổ điển
├── js/
│   ├── basilica_utils.js         ← Hằng số, hàm chuyển mét→độ, shape factory
│   ├── lod0_terrain_2d.js        ← Quảng trường, đường xá, thảm cỏ, bãi đỗ
│   ├── lod1_blocks_2d.js         ← Footprint hình chữ thập + khối phụ
│   ├── lod2_roofs_2d.js          ← Mái dốc, tháp chuông 8 múi, chóp nhọn
│   ├── lod3_details_2d.js        ← 56 cửa sổ, 40 trụ bích, rose window, cửa vòm
│   └── features_2d.js            ← Tượng Đức Mẹ, hàng rào, cây xanh, đèn đường
└── README.md
```

## Mức chi tiết LOD

| LOD | Mô tả | Đối tượng | Số lượng |
|---|---|---|---|
| **LOD0** | Cảnh quan, giao thông | Quảng trường Công xã Paris, đường Đồng Khởi/Lê Duẩn/Phạm Ngọc Thạch, thảm cỏ, bãi đỗ | 10 polygon |
| **LOD1** | Khối nền (footprint) | Gian chính (Nave), cánh ngang (Transept), hậu cung (Apse), 2 tháp chuông, narthex, 2 phòng thánh | 9 polygon |
| **LOD2** | Mái & tháp (2D shading) | Mái dốc sáng/tối, mái cánh ngang, mái hậu cung, 5 nhà nguyện, tháp bát giác 4 múi, thánh giá | 20 polygon + 2 polyline |
| **LOD3** | Chi tiết kiến trúc | 56 cửa sổ kính màu, rose window 8 cánh, 3 cửa vòm, 40 trụ bích, bậc tam cấp, gờ chỉ, trụ bay | ~90 polygon/polyline |
| **Features** | Tiện ích | Tượng Đức Mẹ, thánh giá nóc, hàng rào sắt, 4 cổng, 12 cây xanh, 8 đèn, 6 ghế, biển chỉ dẫn | 1 point + 1 polyline + 35 features |

## Thông số kiến trúc

| Thông số | Giá trị |
|---|---|
| Chiều dài tổng thể | 93m |
| Chiều rộng gian chính | 35m |
| Cao độ đỉnh tháp chuông | 60.5m |
| Cao độ mái chính | ~21m |
| Số cửa sổ kính màu | 56 (hãng Lorin, Pháp) |
| Số trụ bích (buttresses) | ~40 |
| Số cửa vòm mặt tiền | 3 |
| Mặt bằng | Hình chữ thập (Basilica cruciform) |

## Tọa độ trung tâm

| Thông tin | Giá trị |
|---|---|
| Công trình | Nhà thờ Đức Bà Sài Gòn |
| Tọa độ | `[106.699, 10.7797]` (WGS84) |
| Zoom | 18 (~scale 1:1500) |
| Năm xây dựng | 1863–1880 |

## Coding Convention

| Rule | Đúng | Sai |
|---|---|---|
| Khai báo biến | `var` | `const`, `let` |
| String | `"..."` ghép bằng `+` | Template literal |
| Module | Module IIFE gắn vào `window` | ES6 `import/export` |
| Geometry | JSON autocast | `new Polygon()` |
| Symbol 2D | `type: "simple-fill"` | `new SimpleFillSymbol()` |

## Chạy dự án

```bash
# VS Code Live Server (khuyên dùng)
# Click chuột phải index.html → Open with Live Server

# Python
python -m http.server 5500

# Node
npx serve .
```

## Checklist kiểm tra

- [ ] MapView hiển thị Nhà thờ Đức Bà Sài Gòn, zoom 18, basemap satellite
- [ ] LOD0: Quảng trường, đường, thảm cỏ, bãi đỗ xe
- [ ] LOD1: Footprint hình chữ thập đầy đủ (nave, transept, apse, towers)
- [ ] LOD2: Mái dốc với hiệu ứng sáng/tối, tháp chuông 8 múi, thánh giá
- [ ] LOD3: Rose window, 56 cửa sổ kính, 40 trụ bích, 3 cửa vòm, bậc tam cấp
- [ ] Features: Tượng Đức Mẹ, 12 cây xanh, hàng rào, đèn đường, ghế đá
- [ ] Click từng đối tượng → popup hiển thị tên, loại, mô tả
- [ ] Legend hiển thị 5 layer
- [ ] LayerList widget cho phép bật/tắt layer
- [ ] ScaleBar, Home, Search hoạt động
- [ ] Header: tên đồ án + nhóm
- [ ] Console: không lỗi đỏ
- [ ] Tổng số: polygon ≥6, polyline ≥6, point ≥6 ✅
