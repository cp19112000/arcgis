/**
 * ============================================================
 * js/buildings_lod3.js
 * Công trình Công viên Gia Định – MỨC CHI TIẾT LOD3.3
 * ============================================================
 *
 * LOD3 = Architectural Model (Exterior)
 * Bao gồm:
 *   - Tường (WallSurface): footprint + màu sắc
 *   - Mái (RoofSurface): polygon đua mái, nét đứt
 *   - Cửa sổ (Window): hình chữ nhật nhỏ, màu kính
 *   - Cửa ra vào (Door): hình chữ nhật, màu gỗ
 *   - Cột (Column): hình vuông nhỏ, màu ghi
 *
 * Kỹ thuật: Polygon 2D với SimpleFillSymbol
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var popup_building = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' /></div>"
};

/**
 * Hàm tiện ích: tạo mảng rings cho hình chữ nhật
 * center: [lon, lat], width/latSpan: độ kinh/vĩ
 */
function makeRect(center, lonSpan, latSpan) {
  var cx = center[0], cy = center[1];
  var hw = lonSpan / 2, hh = latSpan / 2;
  return [[
    [cx - hw, cy - hh],
    [cx + hw, cy - hh],
    [cx + hw, cy + hh],
    [cx - hw, cy + hh],
    [cx - hw, cy - hh]
  ]];
}

// ============================================================
// ĐỊNH NGHĨA CÔNG TRÌNH LOD3
// Mỗi công trình là một mảng các đối tượng con:
//   walls    → tường (main footprint)
//   roof     → mái đua (polygon lớn hơn, nét đứt)
//   windows  → mảng cửa sổ
//   doors    → mảng cửa ra vào
//   columns  → mảng cột
// ============================================================

var LOD3_BUILDINGS = [];

// ============================================================
// 1. NHÀ HÀNH CHÍNH (Administration Building)
// ============================================================
(function () {
  var cx = 106.6764, cy = 10.8105;
  var bw = 0.00014, bh = 0.00009; // ~15m x 10m

  var walls = {
    type: "polygon",
    rings: makeRect([cx, cy], bw, bh)[0],
    symbol: {
      type: "simple-fill",
      color: [240, 230, 210, 0.9],
      outline: { color: [80, 60, 40, 1], width: 1.5, type: "simple-line", style: "solid" }
    },
    Name: "Nhà hành chính công viên",
    Description: "Tòa nhà quản lý hành chính của công viên, diện tích ~150m². Gồm 1 tầng trệt, tường sơn màu kem, mái ngói đỏ. Trong nhà có văn phòng ban quản lý, phòng họp và khu vực tiếp khách. Được xây dựng từ năm 1980 và cải tạo năm 2015.",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Sala_Hipostila_Park_G%C3%BCell_3.jpg/320px-Sala_Hipostila_Park_G%C3%BCell_3.jpg",
    Component: "WallSurface",
    LOD_Level: 3,
    popupTemplate: popup_building
  };

  var roof = {
    type: "polygon",
    rings: makeRect([cx, cy], bw + 0.00002, bh + 0.00002)[0],
    symbol: {
      type: "simple-fill",
      color: [200, 80, 60, 0.3],
      outline: { color: [180, 60, 40, 0.8], width: 1, type: "simple-line", style: "dash" }
    },
    Name: "Mái ngói đỏ – Nhà hành chính",
    Description: "Mái ngói đỏ 2 mái dốc, đua ra 1m so với tường. Kết cấu vì kèo thép, lợp ngói vảy cá. Chiều cao đỉnh mái 5m so với nền.",
    Component: "RoofSurface",
    LOD_Level: 3,
    popupTemplate: popup_building
  };

  var windows = [
    { center: [cx - 0.000035, cy + 0.000025], label: "Cửa sổ văn phòng 1" },
    { center: [cx - 0.000035, cy - 0.000025], label: "Cửa sổ văn phòng 2" },
    { center: [cx + 0.000035, cy + 0.000025], label: "Cửa sổ kho 1" },
    { center: [cx + 0.000035, cy - 0.000025], label: "Cửa sổ kho 2" }
  ];

  var doors = [
    { center: [cx, cy - 0.00004], label: "Cửa ra vào chính" }
  ];

  var columns = [
    { center: [cx - 0.00005, cy - 0.00004], label: "Cột hiên trái" },
    { center: [cx + 0.00005, cy - 0.00004], label: "Cột hiên phải" }
  ];

  LOD3_BUILDINGS.push({
    walls: walls,
    roof: roof,
    windows: windows,
    doors: doors,
    columns: columns
  });
})();

// ============================================================
// 2. NHÀ CHỜ / CHÒI NGHỈ CHÂN 1 (Gia Định 1)
// ============================================================
(function () {
  var cx = 106.6745, cy = 10.8118;
  var bw = 0.00010, bh = 0.00008;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [220, 210, 190, 0.85],
        outline: { color: [120, 100, 80, 1], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Chòi nghỉ chân 1 (Gia Định 1)",
      Description: "Chòi nghỉ chân kiểu hở với mái ngói đỏ và 4 cột gạch. Diện tích ~10m x 8m. Trong chòi có ghế đá dài cho du khách nghỉ ngơi, tránh nắng mưa. Đây là công trình kiểu nhà vườn truyền thống Nam Bộ, hòa hợp với cảnh quan thiên nhiên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Parc_G%C3%BCell_-_Les_Voltes_del_Carrer_de_Olot.jpg/320px-Parc_G%C3%BCell_-_Les_Voltes_del_Carrer_de_Olot.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.000025, bh + 0.000025)[0],
      symbol: {
        type: "simple-fill",
        color: [180, 70, 50, 0.25],
        outline: { color: [160, 50, 30, 0.7], width: 1, type: "simple-line", style: "dash" }
      },
      Name: "Mái chòi – Gia Định 1",
      Description: "Mái ngói đỏ 4 mái dốc, đỉnh cao 4.5m. Kết cấu gỗ + thép, lợp ngói vảy cá màu đỏ tươi.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [],
    doors: [
      { center: [cx, cy - 0.000035], label: "Lối vào chòi" }
    ],
    columns: [
      { center: [cx - 0.00004, cy - 0.000035], label: "Cột gạch 1" },
      { center: [cx + 0.00004, cy - 0.000035], label: "Cột gạch 2" },
      { center: [cx - 0.00004, cy + 0.000035], label: "Cột gạch 3" },
      { center: [cx + 0.00004, cy + 0.000035], label: "Cột gạch 4" }
    ]
  });
})();

// ============================================================
// 3. NHÀ CHỜ / CHÒI NGHỈ CHÂN 2 (Gia Định 2)
// ============================================================
(function () {
  var cx = 106.6800, cy = 10.8118;
  var bw = 0.00010, bh = 0.00008;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [220, 210, 190, 0.85],
        outline: { color: [120, 100, 80, 1], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Chòi nghỉ chân 2 (Gia Định 2)",
      Description: "Chòi nghỉ chân thứ hai tại Gia Định 2, thiết kế tương tự chòi 1 nhưng có thêm bồn hoa trang trí xung quanh. Đây là điểm dừng chân phổ biến cho người đi bộ và đi xe đạp trong công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Parc_G%C3%BCell_%284441337553%29.jpg/320px-Parc_G%C3%BCell_%284441337553%29.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.000025, bh + 0.000025)[0],
      symbol: {
        type: "simple-fill",
        color: [180, 70, 50, 0.25],
        outline: { color: [160, 50, 30, 0.7], width: 1, type: "simple-line", style: "dash" }
      },
      Name: "Mái chòi – Gia Định 2",
      Description: "Mái ngói đỏ 4 mái dốc, diện tích đua rộng hơn tường 1.5m mỗi bên.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [],
    doors: [
      { center: [cx, cy - 0.000035], label: "Lối vào chòi" }
    ],
    columns: [
      { center: [cx - 0.00004, cy - 0.000035], label: "Cột gạch 1" },
      { center: [cx + 0.00004, cy - 0.000035], label: "Cột gạch 2" },
      { center: [cx - 0.00004, cy + 0.000035], label: "Cột gạch 3" },
      { center: [cx + 0.00004, cy + 0.000035], label: "Cột gạch 4" }
    ]
  });
})();

// ============================================================
// 4. NHÀ VỆ SINH 1 (Gia Định 1)
// ============================================================
(function () {
  var cx = 106.6738, cy = 10.8113;
  var bw = 0.00006, bh = 0.00005;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [200, 210, 220, 0.9],
        outline: { color: [80, 90, 100, 1], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Nhà vệ sinh công cộng 1",
      Description: "Nhà vệ sinh công cộng tại Gia Định 1, gần khu vui chơi trẻ em. Gồm 2 khu riêng biệt nam/nữ, mỗi khu có 3 buồng vệ sinh và 2 bồn rửa tay. Tường ốp gạch men trắng, nền lát gạch chống trơn. Có người dọn vệ sinh thường xuyên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Park_G%C3%BCell_-_El_pabell%C3%B3n_de_la_porter%C3%ADa_-_01.jpg/320px-Park_G%C3%BCell_-_El_pabell%C3%B3n_de_la_porter%C3%ADa_-_01.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.000015, bh + 0.000015)[0],
      symbol: {
        type: "simple-fill",
        color: [150, 160, 170, 0.3],
        outline: { color: [100, 110, 120, 0.7], width: 0.8, type: "simple-line", style: "dash" }
      },
      Name: "Mái bằng – Nhà vệ sinh 1",
      Description: "Mái bê tông cốt thép bằng, chống thấm, cao 3.2m.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [
      { center: [cx + 0.000025, cy], label: "Cửa sổ thông gió" }
    ],
    doors: [
      { center: [cx, cy - 0.000022], label: "Cửa ra vào nam" },
      { center: [cx, cy + 0.000022], label: "Cửa ra vào nữ" }
    ],
    columns: []
  });
})();

// ============================================================
// 5. NHÀ VỆ SINH 2 (Gia Định 2)
// ============================================================
(function () {
  var cx = 106.6800, cy = 10.8110;
  var bw = 0.00006, bh = 0.00005;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [200, 210, 220, 0.9],
        outline: { color: [80, 90, 100, 1], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Nhà vệ sinh công cộng 2",
      Description: "Nhà vệ sinh công cộng tại Gia Định 2, gần bãi đỗ xe và khu vực đoàn xiếc. Thiết kế tương tự nhà vệ sinh 1. Được xây dựng năm 2015 trong đợt mở rộng công viên.",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.000015, bh + 0.000015)[0],
      symbol: {
        type: "simple-fill",
        color: [150, 160, 170, 0.3],
        outline: { color: [100, 110, 120, 0.7], width: 0.8, type: "simple-line", style: "dash" }
      },
      Name: "Mái bằng – Nhà vệ sinh 2",
      Description: "Mái bê tông cốt thép bằng, cao 3.2m.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [
      { center: [cx + 0.000025, cy], label: "Cửa sổ thông gió" }
    ],
    doors: [
      { center: [cx, cy - 0.000022], label: "Cửa ra vào nam" },
      { center: [cx, cy + 0.000022], label: "Cửa ra vào nữ" }
    ],
    columns: []
  });
})();

// ============================================================
// 6. QUÁN NƯỚC / KI-ỐT 1 (gần khu vui chơi)
// ============================================================
(function () {
  var cx = 106.6755, cy = 10.8123;
  var bw = 0.00005, bh = 0.00004;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [255, 220, 180, 0.9],
        outline: { color: [180, 120, 60, 1], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Ki-ốt bán nước giải khát 1",
      Description: "Quán nước giải khát nhỏ phục vụ các loại nước uống: nước dừa, cà phê sữa đá, nước mía, trà đá. Có bàn ghế nhựa cho khách ngồi lại. Giá cả bình dân: 5.000-20.000đ/ly. Hoạt động từ 6h00-21h00 hàng ngày.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Drinks_stall_in_Saigon.jpg/320px-Drinks_stall_in_Saigon.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.000015, bh + 0.000015)[0],
      symbol: {
        type: "simple-fill",
        color: [180, 140, 100, 0.3],
        outline: { color: [150, 110, 70, 0.7], width: 0.8, type: "simple-line", style: "dash" }
      },
      Name: "Mái hiên – Ki-ốt 1",
      Description: "Mái tôn giả ngói màu xanh, đua ra 1m tạo hiên che nắng cho khách.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [
      { center: [cx + 0.00002, cy], label: "Cửa sổ bán hàng" }
    ],
    doors: [
      { center: [cx, cy - 0.000018], label: "Cửa ra vào" }
    ],
    columns: [
      { center: [cx - 0.00002, cy - 0.000018], label: "Cột hiên" },
      { center: [cx + 0.00002, cy - 0.000018], label: "Cột hiên" }
    ]
  });
})();

// ============================================================
// 7. KI-ỐT 2 (Gia Định 2)
// ============================================================
(function () {
  var cx = 106.6795, cy = 10.8098;
  var bw = 0.00005, bh = 0.00004;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [255, 220, 180, 0.9],
        outline: { color: [180, 120, 60, 1], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Ki-ốt bán nước giải khát 2",
      Description: "Quán nước nhỏ gần bãi đỗ xe Gia Định 2. Phục vụ nước uống và đồ ăn nhẹ: bánh mì, xôi, bắp xào. Phục vụ chủ yếu khách đến tham quan đoàn xiếc và người tập thể dục buổi sáng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Drinks_stall_in_Saigon.jpg/320px-Drinks_stall_in_Saigon.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.000015, bh + 0.000015)[0],
      symbol: {
        type: "simple-fill",
        color: [180, 140, 100, 0.3],
        outline: { color: [150, 110, 70, 0.7], width: 0.8, type: "simple-line", style: "dash" }
      },
      Name: "Mái hiên – Ki-ốt 2",
      Description: "Mái tôn giả ngói màu xanh, đua ra 1m.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [
      { center: [cx + 0.00002, cy], label: "Cửa sổ bán hàng" }
    ],
    doors: [
      { center: [cx, cy - 0.000018], label: "Cửa ra vào" }
    ],
    columns: [
      { center: [cx - 0.00002, cy - 0.000018], label: "Cột hiên" },
      { center: [cx + 0.00002, cy - 0.000018], label: "Cột hiên" }
    ]
  });
})();

// ============================================================
// 8. RẠP XIẾC GIA ĐỊNH (Circus Theater)
// ============================================================
(function () {
  var cx = 106.6805, cy = 10.8125;
  var bw = 0.00016, bh = 0.00012;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [220, 200, 180, 0.9],
        outline: { color: [100, 80, 60, 1.5], width: 1.5, type: "simple-line", style: "solid" }
      },
      Name: "Rạp xiếc Gia Định",
      Description: "Nhà hát xiếc trung tâm của Đoàn xiếc TP. Hồ Chí Minh, di dời từ công viên 23/9 về đây từ năm 2013. Sức chứa khoảng 500 khán giả. Mặt tiền hình vòm lớn, mái vòm thép cao 12m. Đây là địa điểm biểu diễn nghệ thuật xiếc, ảo thuật và các chương trình giải trí dành cho thiếu nhi và gia đình.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Circus_in_Vietnam.jpg/320px-Circus_in_Vietnam.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy], bw + 0.00002, bh + 0.00002)[0],
      symbol: {
        type: "simple-fill",
        color: [200, 80, 60, 0.2],
        outline: { color: [180, 60, 40, 0.7], width: 1.5, type: "simple-line", style: "dash" }
      },
      Name: "Mái vòm – Rạp xiếc",
      Description: "Mái vòm thép không gian (space frame) cao 12m, lợp tôn màu đỏ. Đây là công trình có khẩu độ lớn nhất trong công viên.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [
      { center: [cx - 0.00004, cy + 0.00004], label: "Cửa sổ phòng vé" },
      { center: [cx - 0.00004, cy - 0.00004], label: "Cửa sổ hậu đài" }
    ],
    doors: [
      { center: [cx, cy - 0.000055], label: "Cửa ra vào chính" },
      { center: [cx, cy + 0.000055], label: "Cửa ra vào phụ" }
    ],
    columns: [
      { center: [cx - 0.00006, cy - 0.000045], label: "Cột trang trí mặt tiền" },
      { center: [cx - 0.00002, cy - 0.000055], label: "Cột trang trí mặt tiền" },
      { center: [cx + 0.00002, cy - 0.000055], label: "Cột trang trí mặt tiền" },
      { center: [cx + 0.00006, cy - 0.000045], label: "Cột trang trí mặt tiền" }
    ]
  });
})();

// ============================================================
// THIẾT BỊ KHU VUI CHƠI TRẺ EM (Children's Playground)
// ============================================================
(function () {
  var cx = 106.6755, cy = 10.8128;
  var bw = 0.00008, bh = 0.00006;

  LOD3_BUILDINGS.push({
    walls: {
      type: "polygon",
      rings: makeRect([cx, cy], bw, bh)[0],
      symbol: {
        type: "simple-fill",
        color: [255, 200, 100, 0.7],
        outline: { color: [200, 140, 40, 1.2], width: 1.2, type: "simple-line", style: "solid" }
      },
      Name: "Khu vui chơi trẻ em – Cầu trượt lớn",
      Description: "Cầu trượt liên hoàn cao 4m với 3 đường trượt, là trung tâm của khu vui chơi trẻ em rộng 8.300m². Khu vui chơi được phân khu theo độ tuổi: 3-6 tuổi, 7-11 tuổi và 12-15 tuổi. Trang bị xích đu, thang leo, vòi nước, cầu trượt, nhà banh. Đầu tư 12 tỷ đồng từ năm 2012.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Playground_in_Gia_Dinh_Park.jpg/320px-Playground_in_Gia_Dinh_Park.jpg",
      Component: "WallSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    roof: {
      type: "polygon",
      rings: makeRect([cx, cy + 0.00002], bw + 0.00001, bh * 0.3)[0],
      symbol: {
        type: "simple-fill",
        color: [255, 180, 50, 0.4],
        outline: { color: [220, 140, 20, 0.8], width: 1, type: "simple-line", style: "dash" }
      },
      Name: "Mái che khu vui chơi",
      Description: "Mái che hình nấm nhiều màu sắc, tạo bóng mát cho khu vui chơi.",
      Component: "RoofSurface",
      LOD_Level: 3,
      popupTemplate: popup_building
    },
    windows: [],
    doors: [],
    columns: [
      { center: [cx - 0.000035, cy + 0.00002], label: "Trụ đỡ cầu trượt" },
      { center: [cx + 0.000035, cy + 0.00002], label: "Trụ đỡ cầu trượt" }
    ]
  });
})();


// ============================================================
// INIT: Đẩy tất cả lên bản đồ
// ============================================================
window.initBuildingsLOD3 = function (buildingLayer, detailLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var addPolygon = function (layer, data) {
      var geom = { type: data.type, rings: data.rings };
      layer.add(new Graphic({
        geometry: geom,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      }));
    };

    var count = 0;

    LOD3_BUILDINGS.forEach(function (bld) {
      // Thêm tường vào buildingLayer
      addPolygon(buildingLayer, bld.walls);
      count++;

      // Thêm mái vào buildingLayer
      addPolygon(buildingLayer, bld.roof);
      count++;

      // Thêm cửa sổ vào detailLayer
      bld.windows.forEach(function (w) {
        var ws = 0.000006, hs = 0.000008;
        var winData = {
          type: "polygon",
          rings: makeRect(w.center, ws, hs)[0],
          symbol: {
            type: "simple-fill",
            color: [180, 220, 255, 0.85],
            outline: { color: [60, 100, 160, 0.8], width: 0.5, type: "simple-line", style: "solid" }
          },
          Name: w.label,
          Description: "Cửa sổ kính khung nhôm xanh, kích thước 1.2m x 1.5m. Phân loại: Window theo chuẩn CityGML LOD3.",
          Component: "Window",
          LOD_Level: 3,
          popupTemplate: popup_building
        };
        addPolygon(detailLayer, winData);
        count++;
      });

      // Thêm cửa vào detailLayer
      bld.doors.forEach(function (d) {
        var ds = 0.000008, dh = 0.000012;
        var doorData = {
          type: "polygon",
          rings: makeRect(d.center, ds, dh)[0],
          symbol: {
            type: "simple-fill",
            color: [160, 110, 70, 0.9],
            outline: { color: [100, 60, 30, 0.9], width: 0.8, type: "simple-line", style: "solid" }
          },
          Name: d.label,
          Description: "Cửa gỗ kích thước 1.5m x 2.5m. Phân loại: Door theo chuẩn CityGML LOD3.",
          Component: "Door",
          LOD_Level: 3,
          popupTemplate: popup_building
        };
        addPolygon(detailLayer, doorData);
        count++;
      });

      // Thêm cột vào detailLayer
      bld.columns.forEach(function (c) {
        var cs = 0.000006;
        var colData = {
          type: "polygon",
          rings: makeRect(c.center, cs, cs)[0],
          symbol: {
            type: "simple-fill",
            color: [180, 170, 160, 0.9],
            outline: { color: [100, 90, 80, 0.8], width: 0.5, type: "simple-line", style: "solid" }
          },
          Name: c.label,
          Description: "Cột gạch/xi măng tiết diện 0.6m x 0.6m. Phân loại: Column theo chuẩn CityGML LOD3.",
          Component: "Column",
          LOD_Level: 3,
          popupTemplate: popup_building
        };
        addPolygon(detailLayer, colData);
        count++;
      });
    });

    console.log("✅ buildings_lod3.js: Đã thêm " + count + " đối tượng LOD3 (tường+mái+windows+doors+columns)");
  });
};
