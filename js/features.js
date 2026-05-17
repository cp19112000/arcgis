/**
 * ============================================================
 * js/features.js
 * Thành viên phụ trách: CHƯƠNG (PM)
 * Nhiệm vụ: Đặt các điểm tiện ích 3D (cây, đài phun nước,
 *           ghế đá, biển chỉ dẫn) trên bản đồ Park Güell.
 * ============================================================
 *
 * Kỹ thuật: PointSymbol3D với ObjectSymbol3DLayer (cone, sphere)
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var popup_template_feature = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' /></div>"
};

var jsondata_features = {

  // ==========================================================
  // Cây xanh (Tree markers) – ObjectSymbol3DLayer cone (xanh lá)
  // ==========================================================
  trees: [
    {
      type: "point",
      longitude: 2.15255,
      latitude: 41.41416,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "cone" },
          material: { color: [60, 140, 60, 1] },
          height: 8,
          width: 4,
          depth: 4
        }]
      },
      Name: "Cây thông Địa Trung Hải (Pinus pinea)",
      Description: "Cây thông dù (stone pine) đặc trưng của vùng Địa Trung Hải, cao 8m. Đây là loài cây được Gaudí giữ lại khi thiết kế công viên, tận dụng tán cây tự nhiên để tạo bóng mát cho lối đi bộ. Nhiều cây trong công viên có tuổi đời trên 150 năm.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Stone_pine_in_Park_G%C3%BCell.jpg/320px-Stone_pine_in_Park_G%C3%BCell.jpg",
      Species: "Pinus pinea (Stone pine)",
      Height_m: 8,
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15270,
      latitude: 41.41448,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "cone" },
          material: { color: [50, 130, 50, 1] },
          height: 6,
          width: 3.5,
          depth: 3.5
        }]
      },
      Name: "Cây oliu châu Âu (Olea europaea)",
      Description: "Cây oliu cổ thụ cao 6m, có thân xoắn đặc trưng của những cây hàng trăm năm tuổi. Gaudí đặc biệt yêu thích vẻ đẹp của những cây oliu già và bố trí chúng ở các vị trí chiến lược trong công viên để tạo điểm nhấn cảnh quan.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Viejos_olivos_en_Barcelona.jpg/320px-Viejos_olivos_en_Barcelona.jpg",
      Species: "Olea europaea (Olive tree)",
      Height_m: 6,
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15290,
      latitude: 41.41445,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "cone" },
          material: { color: [55, 145, 55, 1] },
          height: 7,
          width: 5,
          depth: 5
        }]
      },
      Name: "Cây bách Địa Trung Hải (Cupressus sempervirens)",
      Description: "Cây bách cao 7m, tán hình tháp đặc trưng, thường được trồng làm cây cảnh quan trong các khu vườn Địa Trung Hải. Gaudí sử dụng cây bách để tạo các hàng rào xanh và điểm nhấn dọc theo các lối đi trong công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cupressus_sempervirens_stricta_%282%29.jpg/320px-Cupressus_sempervirens_stricta_%282%29.jpg",
      Species: "Cupressus sempervirens (Mediterranean cypress)",
      Height_m: 7,
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15305,
      latitude: 41.41452,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "cone" },
          material: { color: [70, 150, 70, 1] },
          height: 5,
          width: 3,
          depth: 3
        }]
      },
      Name: "Cây chanh vàng (Citrus limon)",
      Description: "Cây chanh vàng cao 5m với quả vàng rực vào mùa hè, là một trong nhiều cây ăn quả được trồng trong khu vườn Áo (Austria Gardens) phía Bắc công viên. Các cây ăn quả vừa tạo cảnh quan vừa cung cấp bóng mát cho du khách.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Citrus_limon_in_Botanical_Garden.jpg/320px-Citrus_limon_in_Botanical_Garden.jpg",
      Species: "Citrus limon (Lemon tree)",
      Height_m: 5,
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15315,
      latitude: 41.41438,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "cone" },
          material: { color: [65, 135, 65, 1] },
          height: 10,
          width: 5,
          depth: 5
        }]
      },
      Name: "Cây sồi thường (Quercus ilex)",
      Description: "Cây sồi holm cao 10m, tán lá rộng, cung cấp bóng mát lý tưởng cho khu vực ghế đá nghỉ chân dọc theo các cầu mái vòm. Đây là loài cây bản địa của vùng Địa Trung Hải, có sức sống mãnh liệt và tuổi thọ cao.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Holm_oak_%284134349626%29.jpg/320px-Holm_oak_%284134349626%29.jpg",
      Species: "Quercus ilex (Holm oak)",
      Height_m: 10,
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15300,
      latitude: 41.41430,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "cone" },
          material: { color: [60, 140, 55, 1] },
          height: 4,
          width: 2.5,
          depth: 2.5
        }]
      },
      Name: "Cây sim (Myrtus communis)",
      Description: "Cây sim Địa Trung Hải cao 4m, lá xanh quanh năm và hoa trắng thơm vào mùa hè. Gaudí bố trí các cây sim dọc theo lối đi lát đá để tạo không gian thơm mát và gần gũi với thiên nhiên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Myrtus_communis_flowers.jpg/320px-Myrtus_communis_flowers.jpg",
      Species: "Myrtus communis (Common myrtle)",
      Height_m: 4,
      popupTemplate: popup_template_feature
    }
  ],

  // ==========================================================
  // Điểm tiện ích & tham quan (Point markers)
  // ==========================================================
  amenities: [
    {
      type: "point",
      longitude: 2.15272,
      latitude: 41.41438,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "icon",
          resource: { primitive: "circle" },
          material: { color: [200, 150, 50, 1] },
          size: 12,
          outline: { color: [255, 255, 255, 0.8], size: 2 }
        }]
      },
      Name: "Tượng Rồng El Drac (The Dragon)",
      Description: "Tượng rồng biểu tượng của Park Güell, được ốp bằng kỹ thuật trencadís (gốm vỡ mosaic) với các mảnh gốm màu đỏ, cam, vàng. Tượng cao 2m, nặng ~500kg. Đây là một trong những tác phẩm nghệ thuật công cộng nổi tiếng nhất thế giới, thường xuất hiện trong các sách hướng dẫn du lịch Barcelona.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Parc_G%C3%BCell_-_Drac.jpg/320px-Parc_G%C3%BCell_-_Drac.jpg",
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15267,
      latitude: 41.41436,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "icon",
          resource: { primitive: "circle" },
          material: { color: [100, 180, 230, 1] },
          size: 10,
          outline: { color: [255, 255, 255, 0.8], size: 2 }
        }]
      },
      Name: "Đài phun nước Mặt nạ (Cara de Barcelona)",
      Description: "Đài phun nước hình mặt nạ bằng đá tại chiếu nghỉ giữa cầu thang. Gaudí thiết kế mặt nạ cách điệu với các đường nét uốn cong mềm mại, nước chảy từ miệng ra bể đá bên dưới. Đây là một phần trong hệ thống thủy lực tự nhiên của công viên, nước được thu gom và tái sử dụng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cara_de_Barcelona.jpg/320px-Cara_de_Barcelona.jpg",
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15245,
      latitude: 41.41415,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "icon",
          resource: { primitive: "circle" },
          material: { color: [180, 180, 180, 1] },
          size: 8,
          outline: { color: [255, 255, 255, 0.8], size: 2 }
        }]
      },
      Name: "Biển chỉ dẫn lối vào",
      Description: "Biển chỉ dẫn du lịch đặt tại lối vào chính, cung cấp thông tin về lịch sử công viên, bản đồ khu di tích và các quy định tham quan. Park Güell mở cửa từ 9:30 – 19:30 (mùa hè) và 9:30 – 17:30 (mùa đông). Giá vé tham quan khu di tích chính: 10€/người lớn.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Parc_G%C3%BCell_sign.jpg/320px-Parc_G%C3%BCell_sign.jpg",
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15330,
      latitude: 41.41485,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "icon",
          resource: { primitive: "circle" },
          material: { color: [230, 200, 160, 1] },
          size: 14,
          outline: { color: [255, 255, 255, 0.8], size: 2 }
        }]
      },
      Name: "Đồi Calvary (El Calvari) – Điểm cao nhất",
      Description: "Đỉnh đồi cao nhất trong công viên (cao 182m so với mực nước biển), nơi đặt ba cây thánh giá bằng đá tượng trưng cho đồi Golgotha. Từ đây có tầm nhìn 360° toàn cảnh Barcelona: khu phố Eixample, tháp Agbar, xa hơn là biển Địa Trung Hải. Đây là điểm kết thúc của con đường đàng thánh giá (Via Crucis) trong công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Parc_G%C3%BCell_-_Calvari_%283%29.jpg/320px-Parc_G%C3%BCell_-_Calvari_%283%29.jpg",
      Elevation_m: 182,
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15280,
      latitude: 41.41420,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "icon",
          resource: { primitive: "circle" },
          material: { color: [80, 170, 80, 1] },
          size: 8,
          outline: { color: [255, 255, 255, 0.8], size: 2 }
        }]
      },
      Name: "Khu vực Áustria Gardens (Jardins d'Àustria)",
      Description: "Khu vườn phía Nam công viên, được đặt tên để vinh danh nữ bá tước Áo tài trợ kinh phí duy trì công viên những năm 1930. Nơi đây trồng nhiều cây bản địa Địa Trung Hải và các loài hoa theo mùa. Có lối đi bộ lát đá và ghế đá nghỉ chân dưới bóng cây.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Parque_G%C3%BCell_-_Jardines_de_Austria.jpg/320px-Parque_G%C3%BCell_-_Jardines_de_Austria.jpg",
      popupTemplate: popup_template_feature
    },
    {
      type: "point",
      longitude: 2.15315,
      latitude: 41.41460,
      symbol: {
        type: "point-3d",
        symbolLayers: [{
          type: "icon",
          resource: { primitive: "circle" },
          material: { color: [230, 180, 140, 1] },
          size: 10,
          outline: { color: [255, 255, 255, 0.8], size: 2 }
        }]
      },
      Name: "Ghế đá nghỉ chân (Mirador)",
      Description: "Điểm ngắm cảnh (mirador) với ghế đá dọc theo cầu mái vòm phía Đông. Du khách có thể ngồi nghỉ và ngắm nhìn toàn cảnh quảng trường trung tâm và thành phố Barcelona phía xa. Đây là một trong những điểm check-in phổ biến nhất trong công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Parc_G%C3%BCell_viewpoint.jpg/320px-Parc_G%C3%BCell_viewpoint.jpg",
      popupTemplate: popup_template_feature
    }
  ]
};

window.initFeatures = function (featureLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var createGraphic = function (data) {
      var geom = { type: data.type, longitude: data.longitude, latitude: data.latitude };
      return new Graphic({
        geometry: geom,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      });
    };

    jsondata_features.trees.forEach(function (data) {
      featureLayer.add(createGraphic(data));
    });

    jsondata_features.amenities.forEach(function (data) {
      featureLayer.add(createGraphic(data));
    });

    console.log("✅ features.js: Đã thêm " + (jsondata_features.trees.length + jsondata_features.amenities.length) + " điểm tiện ích 3D");
  });
};
