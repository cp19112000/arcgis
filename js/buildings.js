/**
 * ============================================================
 * js/buildings.js
 * Thành viên phụ trách: MẠNH (Sala Hipóstila) + HÀ (Porter's Lodge)
 * Nhiệm vụ: Dựng khối 3D các công trình kiến trúc chính
 *           của Park Güell, Barcelona.
 * ============================================================
 *
 * Kỹ thuật: Polygon footprint + ExtrudeSymbol3DLayer
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var popup_template_building = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' style='width:100%;max-height:200px;object-fit:cover;border-radius:8px;margin-top:10px;box-shadow:0 2px 4px rgba(0,0,0,0.1);display:block;'/></div>"
};

var jsondata_buildings = {

  // ==========================================================
  // MẠNH (thành viên 1): Sala Hipóstila / Hypostyle Room
  // ==========================================================
  hypostyle: [

    // Tầng dưới: Sảnh cột Doric chính (86 cột chịu lực)
    {
      type: "polygon",
      rings: [
        [2.15278, 41.41435],
        [2.15308, 41.41438],
        [2.15306, 41.41456],
        [2.15276, 41.41453],
        [2.15278, 41.41435]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 6,
          material: { color: [210, 190, 160, 0.95] },
          edges: { type: "solid", color: [130, 110, 85, 0.6], size: 1 }
        }]
      },
      Name: "Sala Hipóstila (Sảnh cột Doric)",
      Description: "Sảnh lớn chứa 86 cột Doric bằng đá vôi xếp thành 10 hàng, chịu toàn bộ trọng lượng của quảng trường phía trên. Các cột có hệ thống thu nước mưa dẫn xuống bể ngầm. Trần sảnh được trang trí bằng gốm mosaic trencadís màu xanh trắng. Mỗi cột cách nhau 2.5m, tạo hiệu ứng thị giác như một khu rừng cột đá.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Sala_Hipostila_Park_G%C3%BCell_3.jpg/320px-Sala_Hipostila_Park_G%C3%BCell_3.jpg",
      YearBuilt: "1900–1914",
      ArchStyle: "Modernisme català (Art Nouveau)",
      popupTemplate: popup_template_building
    },

    // Hàng cột Doric riêng lẻ (mô phỏng 20 cột nổi bật nhất)
    {
      type: "polygon",
      rings: [
        [2.15284, 41.41439],
        [2.15286, 41.41439],
        [2.15286, 41.41440],
        [2.15284, 41.41440],
        [2.15284, 41.41439]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 5.5,
          material: { color: [190, 175, 150, 1] },
          edges: { type: "sketch", color: [100, 90, 75, 0.3], size: 0.5 }
        }]
      },
      Name: "Hàng cột Doric (Doric Columns)",
      Description: "Mỗi cột Doric cao 5.5m, đường kính 0.6m, làm từ đá vôi Montjuïc. Phần thân cột có khía rãnh dọc (fluting) đặc trưng của kiến trúc Hy Lạp cổ đại. Các cột được bố trí nghiêng một góc nhỏ để tạo hiệu ứng thị giác phối cảnh.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Park_G%C3%BCell_%286413699145%29.jpg/320px-Park_G%C3%BCell_%286413699145%29.jpg",
      popupTemplate: popup_template_building
    },

    // Tầng trên: Quảng trường Plaça de la Natura (mái của sảnh cột)
    {
      type: "polygon",
      rings: [
        [2.15279, 41.41436],
        [2.15307, 41.41439],
        [2.15305, 41.41455],
        [2.15277, 41.41452],
        [2.15279, 41.41436]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 1.2,
          material: { color: [230, 215, 185, 1] },
          edges: { type: "solid", color: [160, 140, 110, 0.4], size: 0.8 }
        }]
      },
      Name: "Plaça de la Natura (Quảng trường Thiên nhiên)",
      Description: "Mái bằng rộng ~800m² của sảnh cột phía dưới, được lát đá tự nhiên và trang trí gốm mosaic nhiều màu sắc theo phong cách trencadís đặc trưng của Gaudí. Đây là nơi diễn ra các sự kiện văn hóa và là điểm ngắm cảnh trung tâm của công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Parc_G%C3%BCell_-_Pla%C3%A7a_de_la_Natura.jpg/320px-Parc_G%C3%BCell_-_Pla%C3%A7a_de_la_Natura.jpg",
      popupTemplate: popup_template_building
    }
  ],

  // ==========================================================
  // HÀ (thành viên 2): Porter's Lodge (Casa del Guarda)
  // ==========================================================
  lodge: [

    // Nhà bảo vệ chính (Main Pavilion) - nay là Bảo tàng Gaudí
    {
      type: "polygon",
      rings: [
        [2.15250, 41.41425],
        [2.15260, 41.41426],
        [2.15260, 41.41434],
        [2.15250, 41.41433],
        [2.15250, 41.41425]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 7,
          material: { color: [215, 170, 120, 0.95] },
          edges: { type: "solid", color: [140, 100, 60, 0.5], size: 1 }
        }]
      },
      Name: "Casa del Guarda (Nhà bảo vệ chính)",
      Description: "Tòa nhà màu hồng cam với mái vòm hình nấm, nay là Bảo tàng Gaudí (Museu Gaudí). Đây nguyên là nhà của người gác cổng, được xây dựng theo phong cách nhà bánh gừng (gingerbread house) đặc trưng. Tầng trệt có trần vòm cao 3.5m, tầng trên là gác xép. Nội thất trưng bày các món đồ nội thất do chính Gaudí thiết kế.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Parc_G%C3%BCell_-_Porter%27s_Lodge.jpg/320px-Parc_G%C3%BCell_-_Porter%27s_Lodge.jpg",
      YearBuilt: "1901–1903",
      popupTemplate: popup_template_building
    },

    // Tháp chuông của nhà bảo vệ chính
    {
      type: "polygon",
      rings: [
        [2.15253, 41.41427],
        [2.15256, 41.41427],
        [2.15256, 41.41430],
        [2.15253, 41.41430],
        [2.15253, 41.41427]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 9.5,
          material: { color: [200, 155, 110, 0.95] },
          edges: { type: "solid", color: [140, 100, 60, 0.5], size: 0.8 }
        }]
      },
      Name: "Tháp chuông Casa del Guarda",
      Description: "Tháp chuông cao 9.5m của tòa nhà bảo vệ chính, đỉnh tháp được trang trí bằng chữ thập Gaudí (có 4 nhánh) đặc trưng. Mặt ngoài tháp ốp gốm mosaic màu xanh lá và trắng theo kỹ thuật trencadís. Đây là một trong những biểu tượng dễ nhận biết nhất của Park Güell.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Park_G%C3%BCell_-_Porter%27s_lodge_%2817%29.jpg/320px-Park_G%C3%BCell_-_Porter%27s_lodge_%2817%29.jpg",
      popupTemplate: popup_template_building
    },

    // Nhà bảo vệ nhỏ (Small Pavilion) - nay là cửa hàng lưu niệm
    {
      type: "polygon",
      rings: [
        [2.15242, 41.41420],
        [2.15249, 41.41421],
        [2.15249, 41.41427],
        [2.15242, 41.41426],
        [2.15242, 41.41420]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 5.5,
          material: { color: [225, 180, 130, 0.95] },
          edges: { type: "solid", color: [140, 100, 60, 0.5], size: 0.8 }
        }]
      },
      Name: "Nhà bảo vệ nhỏ (Small Pavilion)",
      Description: "Tòa nhà nhỏ hơn ở phía Nam cổng vào, có màu trắng kem với mái vòm hình nón ngược. Ngày nay là cửa hàng lưu niệm bán đồ thủ công mỹ nghệ và sách về Gaudí. Mặt tiền được trang trí bằng gốm sứ vỡ mosaic tạo hình hoa hướng dương và các họa tiết thiên nhiên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Park_G%C3%BCell_-_El_pabell%C3%B3n_de_la_porter%C3%ADa_-_01.jpg/320px-Park_G%C3%BCell_-_El_pabell%C3%B3n_de_la_porter%C3%ADa_-_01.jpg",
      popupTemplate: popup_template_building
    },

    // Cổng vào chính (Main Gate) giữa 2 tòa nhà
    {
      type: "polygon",
      rings: [
        [2.15248, 41.41427],
        [2.15252, 41.41427],
        [2.15252, 41.41433],
        [2.15248, 41.41433],
        [2.15248, 41.41427]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 8,
          material: { color: [175, 145, 110, 0.7] },
          edges: { type: "solid", color: [100, 80, 55, 0.8], size: 1.5 }
        }]
      },
      Name: "Cổng vào chính (Porta d'accés)",
      Description: "Cổng sắt rèn nghệ thuật cao 8m, được thiết kế bởi Gaudí với các họa tiết lá cây cách điệu hình trái tim và bông hoa. Hai bên cổng là trụ đá ốp gốm mosaic xanh. Phía trên cổng là dòng chữ 'PARK GÜELL' bằng sắt rèn. Đây là lối vào chính thức của khu di tích.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Parc_G%C3%BCell_-_Main_entrance.jpg/320px-Parc_G%C3%BCell_-_Main_entrance.jpg",
      popupTemplate: popup_template_building
    },

    // Hàng rào đá bao quanh khu nhà bảo vệ
    {
      type: "polygon",
      rings: [
        [2.15240, 41.41419],
        [2.15262, 41.41420],
        [2.15262, 41.41421],
        [2.15240, 41.41420],
        [2.15240, 41.41419]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 2.5,
          material: { color: [165, 140, 110, 0.8] },
          edges: { type: "solid", color: [100, 80, 60, 0.3] }
        }]
      },
      Name: "Tường rào đá tự nhiên",
      Description: "Tường rào bằng đá tự nhiên cao 2.5m bao quanh khu vực cổng vào, sử dụng kỹ thuật xếp đá khô (dry stone) truyền thống của vùng Catalonia. Phần đỉnh tường được ốp gạch gốm màu nâu đỏ tạo đường viền trang trí.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Park_G%C3%BCell_%28Barcelona%29_-_3.jpg/320px-Park_G%C3%BCell_%28Barcelona%29_-_3.jpg",
      popupTemplate: popup_template_building
    }
  ]

};

window.initBuildings = function (buildingLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var createGraphic = function (data) {
      return new Graphic({
        geometry: data,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      });
    };

    jsondata_buildings.hypostyle.forEach(function (data) {
      buildingLayer.add(createGraphic(data));
    });

    jsondata_buildings.lodge.forEach(function (data) {
      buildingLayer.add(createGraphic(data));
    });

    console.log("✅ buildings.js: Đã thêm " + (jsondata_buildings.hypostyle.length + jsondata_buildings.lodge.length) + " khối công trình");
  });
};
