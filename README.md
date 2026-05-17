# Bản đồ 2D Công viên Gia Định – IE402 (LOD3.3)

> **Môn học:** Hệ Thống Thông Tin Địa Lý 3 Chiều (IE402)  
> **Đề tài:** Bản đồ 2D Công viên Gia Định – TP. Hồ Chí Minh  
> **Mức chi tiết:** LOD3.3 (CityGML Architectural Model – ngoại thất)  
> **Công nghệ:** ArcGIS API for JavaScript 4.29 (MapView 2D, SimpleFillSymbol, SimpleMarkerSymbol)

---

## Kiến trúc dự án

```
arcgis/
├── index.html                ← MapView, AMD require(), widgets, LayerList
├── css/
│   └── style.css             ← Theme xanh lá cây, popup, legend, LOD badge
├── js/
│   ├── park_boundary.js      ← Ranh giới, zone, hồ nước, thảm cỏ, đường đi, bãi xe
│   ├── buildings_lod3.js     ← 9 công trình LOD3 (tường + mái + cửa sổ + cửa + cột)
│   └── features.js           ← Cây xanh, ghế đá, trạm TDTT, đài phun, biển chỉ dẫn
└── README.md
```

## Mức chi tiết LOD3.3

| Bộ phận | Thể hiện trên bản đồ | Kỹ thuật ArcGIS |
|---|---|---|
| **WallSurface** (tường) | Footprint màu kem/gạch | `SimpleFillSymbol` nét liền |
| **RoofSurface** (mái) | Polygon đua rộng hơn tường | `SimpleFillSymbol` nét đứt (dash) |
| **Window** (cửa sổ) | Hình chữ nhật xanh dương | `SimpleFillSymbol` màu kính |
| **Door** (cửa) | Hình chữ nhật nâu | `SimpleFillSymbol` màu gỗ |
| **Column** (cột) | Hình vuông xám | `SimpleFillSymbol` màu ghi |

> **Tổng số:** 9 công trình × (1 tường + 1 mái + N cửa sổ + N cửa + N cột) = ~80+ đối tượng LOD3

## Công trình LOD3

| # | Công trình | Khu | Wall | Roof | Windows | Doors | Columns |
|---|---|---|---|---|---|---|---|
| 1 | Nhà hành chính | GĐ1 | ✅ | ✅ | 4 | 1 | 2 |
| 2 | Chòi nghỉ chân 1 | GĐ1 | ✅ | ✅ | 0 | 1 | 4 |
| 3 | Chòi nghỉ chân 2 | GĐ2 | ✅ | ✅ | 0 | 1 | 4 |
| 4 | Nhà vệ sinh 1 | GĐ1 | ✅ | ✅ | 1 | 2 | 0 |
| 5 | Nhà vệ sinh 2 | GĐ2 | ✅ | ✅ | 1 | 2 | 0 |
| 6 | Ki-ốt 1 | GĐ1 | ✅ | ✅ | 1 | 1 | 2 |
| 7 | Ki-ốt 2 | GĐ2 | ✅ | ✅ | 1 | 1 | 2 |
| 8 | Rạp xiếc Gia Định | GĐ2 | ✅ | ✅ | 2 | 2 | 4 |
| 9 | Cầu trượt trẻ em | GĐ1 | ✅ | ✅ | 0 | 0 | 2 |

## Cảnh quan & Tiện ích

- Ranh giới công viên (~32ha) – 1 polygon
- Zone Gia Định 1 & 2 – 2 polygons
- Hồ nước (117m²) – 1 polygon
- Thảm cỏ (63.000m²) – 2 polygons
- Vườn hoa (650m²) – 1 polygon
- Đường đi bộ – 5 polylines
- Đường Đặng Văn Sâm – 1 polyline
- Cầu đi bộ – 1 polyline
- Bãi đỗ xe – 2 polygons
- Cây xanh – 6 điểm + 2 vòng tán
- Ghế đá – 3 điểm
- Trạm tập thể dục – 1 điểm
- Đài phun nước – 1 điểm
- Biển chỉ dẫn – 1 điểm
- Trạm xe đạp – 1 điểm

## Chạy dự án

```bash
# VS Code Live Server (khuyên dùng)
# Click chuột phải index.html → Open with Live Server

# Python
python -m http.server 5500

# Node
npx serve .
```

## Tọa độ trung tâm

| Thông tin | Giá trị |
|---|---|
| Công trình | Công viên Gia Định, TP. Hồ Chí Minh |
| Diện tích | ~32 ha |
| Tọa độ trung tâm | `[106.677, 10.8115]` (WGS84) |
| Zoom | 16 (~scale 1:3000) |
| Năm thành lập | 1978 |

## Coding Convention

| Rule | Đúng | Sai |
|---|---|---|
| Khai báo biến | `var` | `const`, `let` |
| String | `"..."` ghép bằng `+` | Template literal |
| Module | AMD `require([...], ...)` | ES6 `import/export` |
| Geometry | JSON autocast: `type: "polygon"` + `rings` | `new Polygon()` |
| Symbol 2D | `type: "simple-fill"` / `"simple-marker"` | `new SimpleFillSymbol()` |

## Checklist kiểm tra

- [ ] MapView hiển thị Công viên Gia Định, zoom 16
- [ ] Ranh giới công viên + 2 zone Gia Định 1 & 2
- [ ] 9 công trình có đủ tường + mái (tối thiểu LOD3)
- [ ] Cửa sổ, cửa ra vào, cột hiển thị đúng vị trí trên từng công trình
- [ ] Hồ nước, thảm cỏ, vườn hoa, bãi đỗ xe
- [ ] Đường đi bộ, đường Đặng Văn Sâm, cầu đi bộ
- [ ] 6 cây xanh + vòng tán + 3 ghế đá + đài phun + biển chỉ dẫn
- [ ] Click từng đối tượng → popup: Tên, Mô tả, Ảnh
- [ ] Legend hiển thị 4 layer
- [ ] LayerList widget cho phép bật/tắt layer
- [ ] ScaleBar, Home hoạt động
- [ ] Header: tên đồ án + nhóm
- [ ] Console: không lỗi đỏ
