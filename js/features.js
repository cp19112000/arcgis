/**
 * ============================================================
 * js/features.js
 * Điểm tiện ích & Cây xanh – Công viên Gia Định
 * ============================================================
 *
 * Vẽ: cây xanh, ghế đá, trạm TDTT, đài phun nước, biển chỉ dẫn
 * Kỹ thuật: PictureMarkerSymbol (SVG data URI)
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var popup_feature = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' /></div>"
};

// ============================================================
// Định nghĩa SVG icons dùng PictureMarkerSymbol
// ============================================================
var SVG_ICONS = {
  tree: [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
    "<polygon points='16,2 4,18 28,18' fill='%232d7d46' stroke='%231a5c30' stroke-width='1.5'/>",
    "<rect x='13' y='18' width='6' height='10' fill='%238b6b4d'/>",
    "</svg>"
  ].join(""),
  bench: [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
    "<rect x='3' y='11' width='26' height='7' rx='2' fill='%23a0784c' stroke='%237a5a30' stroke-width='1.5'/>",
    "<rect x='7' y='18' width='4' height='8' fill='%238b6b4d'/>",
    "<rect x='21' y='18' width='4' height='8' fill='%238b6b4d'/>",
    "</svg>"
  ].join(""),
  fitness: [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
    "<rect x='2' y='11' width='7' height='10' rx='3' fill='%232a6b96' stroke='%231a4a70' stroke-width='1'/>",
    "<rect x='23' y='11' width='7' height='10' rx='3' fill='%232a6b96' stroke='%231a4a70' stroke-width='1'/>",
    "<rect x='9' y='13' width='14' height='6' rx='2' fill='%23c0392b'/>",
    "</svg>"
  ].join(""),
  fountain: [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
    "<ellipse cx='16' cy='22' rx='11' ry='5' fill='%2364b5f6' stroke='%231565c0' stroke-width='1.5'/>",
    "<path d='M11,17 Q16,4 21,17' fill='none' stroke='%2342a5f5' stroke-width='2.5'/>",
    "<circle cx='16' cy='11' r='2.5' fill='%2390caf9'/>",
    "</svg>"
  ].join(""),
  sign: [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
    "<rect x='5' y='4' width='22' height='18' rx='3' fill='%23f5e8d0' stroke='%23c9a84c' stroke-width='2'/>",
    "<rect x='14' y='22' width='4' height='6' fill='%238b6b4d'/>",
    "<circle cx='16' cy='11' r='3.5' fill='%232a6b96'/>",
    "<text x='16' y='14' text-anchor='middle' fill='white' font-size='9' font-weight='bold'>i</text>",
    "</svg>"
  ].join(""),
  bicycle: [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
    "<circle cx='8' cy='22' r='6' fill='none' stroke='%232d7d46' stroke-width='2.5'/>",
    "<circle cx='24' cy='22' r='6' fill='none' stroke='%232d7d46' stroke-width='2.5'/>",
    "<line x1='14' y1='22' x2='20' y2='12' stroke='%232d7d46' stroke-width='2'/>",
    "<line x1='20' y1='12' x2='26' y2='16' stroke='%232d7d46' stroke-width='2'/>",
    "<line x1='20' y1='12' x2='16' y2='16' stroke='%232d7d46' stroke-width='2'/>",
    "<line x1='12' y1='16' x2='20' y2='16' stroke='%232d7d46' stroke-width='2'/>",
    "</svg>"
  ].join("")
};

function makePictureMarker(svgContent, w, h) {
  return {
    type: "picture-marker",
    url: "data:image/svg+xml," + encodeURIComponent(svgContent),
    width: w || 28,
    height: h || 28
  };
}

var jsondata_features = {

  // ==========================================================
  // CÂY XANH (6 cây)
  // ==========================================================
  trees: [
    {
      type: "point",
      longitude: 106.6730,
      latitude: 10.8125,
      Name: "Cây sọ khỉ (Monkeypod)",
      Description: "Cây sọ khỉ (Albizia saman) cổ thụ cao 25m, tán rộng 30m. Đường kính thân 1.2m. Đây là loài cây bóng mát chủ đạo trong công viên, có tuổi đời trên 80 năm.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Raintree_in_Saigon.jpg/320px-Raintree_in_Saigon.jpg",
      Species: "Albizia saman",
      Height_m: 25,
      Canopy_m: 30,
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6740,
      latitude: 10.8120,
      Name: "Cây lim xẹt (Cajeput)",
      Description: "Cây lim xẹt (Melaleuca cajuputi) cao 20m, thân thẳng, vỏ trắng xốp. Đặc trưng của vùng đất ngập nước Nam Bộ. Lá có tinh dầu khuynh diệp thơm đặc trưng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cajeput_tree.jpg/320px-Cajeput_tree.jpg",
      Species: "Melaleuca cajuputi",
      Height_m: 20,
      Canopy_m: 15,
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6760,
      latitude: 10.8115,
      Name: "Cây me tây (Tamarind)",
      Description: "Cây me tây (Tamarindus indica) cao 15m, tán rộng. Quả me chua được dùng làm gia vị và nước giải khát. Cây có tuổi đời khoảng 50 năm.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tamarind_tree.jpg/320px-Tamarind_tree.jpg",
      Species: "Tamarindus indica",
      Height_m: 15,
      Canopy_m: 12,
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6780,
      latitude: 10.8130,
      Name: "Cây bò cạp nước (Water mimosa)",
      Description: "Cây bò cạp nước (Neptunia oleracea) mọc gần khu vực ẩm ướt, ven hồ. Thân cây có phao xốp giúp nổi trên mặt nước.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Neptunia_oleracea.jpg/320px-Neptunia_oleracea.jpg",
      Species: "Neptunia oleracea",
      Height_m: 5,
      Canopy_m: 4,
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6765,
      latitude: 10.8102,
      Name: "Cây thông (Pine)",
      Description: "Cây thông nhựa (Pinus merkusii) cao 18m, thân thẳng, tán hình tháp. Là loài cây lá kim duy nhất trong công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Pine_tree_in_park.jpg/320px-Pine_tree_in_park.jpg",
      Species: "Pinus merkusii",
      Height_m: 18,
      Canopy_m: 10,
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6790,
      latitude: 10.8105,
      Name: "Cây bàng (Terminalia catappa)",
      Description: "Cây bàng cao 12m, tán lá rộng xòe như chiếc ô. Lá bàng to, rụng theo mùa. Quả bàng có thể ăn được.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Terminalia_catappa.jpg/320px-Terminalia_catappa.jpg",
      Species: "Terminalia catappa",
      Height_m: 12,
      Canopy_m: 14,
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // VÒNG TRÒN TÁN CÂY (polygon – màu xanh nhạt)
  // ==========================================================
  canopies: [
    {
      type: "polygon",
      rings: (function () {
        var cx = 106.6730, cy = 10.8125, r = 0.00013, pts = [];
        for (var a = 0; a <= 360; a += 15) {
          pts.push([cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)]);
        }
        return [pts];
      })(),
      symbol: {
        type: "simple-fill",
        color: [70, 160, 70, 0.12],
        outline: { color: [50, 130, 50, 0.3], width: 0.5, type: "simple-line", style: "dash" }
      },
      popupTemplate: popup_feature
    },
    {
      type: "polygon",
      rings: (function () {
        var cx = 106.6740, cy = 10.8120, r = 0.00007, pts = [];
        for (var a = 0; a <= 360; a += 15) {
          pts.push([cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)]);
        }
        return [pts];
      })(),
      symbol: {
        type: "simple-fill",
        color: [60, 150, 60, 0.1],
        outline: { color: [50, 130, 50, 0.3], width: 0.5, type: "simple-line", style: "dash" }
      },
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // GHẾ ĐÁ (3 điểm)
  // ==========================================================
  benches: [
    {
      longitude: 106.6735, latitude: 10.8118,
      Name: "Ghế đá nghỉ chân 1",
      Description: "Ghế đá granit dài 1.8m, đặt dưới tán cây sọ khỉ. Vị trí mát mẻ, thích hợp ngồi đọc sách và thư giãn.",
      popupTemplate: popup_feature
    },
    {
      longitude: 106.6762, latitude: 10.8115,
      Name: "Ghế đá nghỉ chân 2",
      Description: "Ghế đá cạnh hồ nước, có tầm nhìn đẹp ra mặt hồ và vườn hoa. Được nhiều bạn trẻ chọn làm điểm chụp ảnh.",
      popupTemplate: popup_feature
    },
    {
      longitude: 106.6785, latitude: 10.8120,
      Name: "Ghế đá nghỉ chân 3",
      Description: "Ghế đá dọc đường đi bộ Gia Định 2, gần khu vực đoàn xiếc.",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // TRẠM TẬP THỂ DỤC
  // ==========================================================
  fitness: [
    {
      longitude: 106.6748, latitude: 10.8125,
      Name: "Trạm tập thể dục ngoài trời",
      Description: "Khu tập thể dục ngoài trời với các thiết bị: xà đơn, xà kép, máy tập đạp chân, ghế tập bụng, máy kéo tay. Trang bị miễn phí cho người dân tập luyện hàng ngày.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Outdoor_fitness_park.jpg/320px-Outdoor_fitness_park.jpg",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // ĐÀI PHUN NƯỚC
  // ==========================================================
  fountain: [
    {
      longitude: 106.6760, latitude: 10.8110,
      Name: "Đài phun nước trung tâm",
      Description: "Đài phun nước nghệ thuật đặt tại quảng trường nhỏ trung tâm Gia Định 1. Phun nước theo nhạc vào các buổi tối cuối tuần. Cao 3m, đường kính bể 5m.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Fountain_in_park.jpg/320px-Fountain_in_park.jpg",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // BIỂN CHỈ DẪN
  // ==========================================================
  signs: [
    {
      longitude: 106.6760, latitude: 10.8098,
      Name: "Biển chỉ dẫn lối vào",
      Description: "Biển chỉ dẫn đặt tại cổng chính Hoàng Minh Giám. Cung cấp thông tin: sơ đồ công viên, giờ mở cửa (6h-22h), nội quy, số điện thoại khẩn cấp.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Park_sign.jpg/320px-Park_sign.jpg",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // TRẠM XE ĐẠP
  // ==========================================================
  bicycle: [
    {
      longitude: 106.6748, latitude: 10.8100,
      Name: "Trạm xe đạp công cộng",
      Description: "Trạm cho thuê xe đạp công cộng phục vụ du khách đi dạo trong công viên. Giá thuê: 10.000đ/giờ. Có 20 xe đạp đơn và 5 xe đạp đôi.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Public_bicycle_station.jpg/320px-Public_bicycle_station.jpg",
      popupTemplate: popup_feature
    }
  ]
};

window.initFeatures = function (featureLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var addPoint = function (data, symbol) {
      var geom = { type: "point", longitude: data.longitude, latitude: data.latitude };
      featureLayer.add(new Graphic({
        geometry: geom,
        symbol: symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      }));
    };

    var addPolygon = function (data) {
      var geom = { type: data.type, rings: data.rings };
      featureLayer.add(new Graphic({
        geometry: geom,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      }));
    };

    // Thêm cây xanh (dùng PictureMarkerSymbol)
    var treeIcon = makePictureMarker(SVG_ICONS.tree, 28, 28);
    jsondata_features.trees.forEach(function (d) { addPoint(d, treeIcon); });

    // Thêm vòng tán cây (polygon đơn thuần, không symbol đặc biệt)
    jsondata_features.canopies.forEach(function (d) { addPolygon(d); });

    // Thêm ghế đá
    var benchIcon = makePictureMarker(SVG_ICONS.bench, 26, 26);
    jsondata_features.benches.forEach(function (d) { addPoint(d, benchIcon); });

    // Thêm trạm tập thể dục
    var fitnessIcon = makePictureMarker(SVG_ICONS.fitness, 28, 28);
    jsondata_features.fitness.forEach(function (d) { addPoint(d, fitnessIcon); });

    // Thêm đài phun nước
    var fountainIcon = makePictureMarker(SVG_ICONS.fountain, 30, 30);
    jsondata_features.fountain.forEach(function (d) { addPoint(d, fountainIcon); });

    // Thêm biển chỉ dẫn
    var signIcon = makePictureMarker(SVG_ICONS.sign, 28, 28);
    jsondata_features.signs.forEach(function (d) { addPoint(d, signIcon); });

    // Thêm trạm xe đạp
    var bicycleIcon = makePictureMarker(SVG_ICONS.bicycle, 28, 28);
    jsondata_features.bicycle.forEach(function (d) { addPoint(d, bicycleIcon); });

    console.log("✅ features.js: Đã thêm điểm với PictureMarkerSymbol");
  });
};
