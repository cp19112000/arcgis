/**
 * ============================================================
 * js/features.js
 * Điểm tiện ích & Cây xanh – Công viên Gia Định
 * ============================================================
 *
 * Vẽ: cây xanh (point + canopy circle), trạm tập thể dục,
 *     ghế đá, đài phun nước, biển chỉ dẫn
 * Kỹ thuật: Point với SimpleMarkerSymbol + Polygon vòng tán
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var popup_feature = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' /></div>"
};

var jsondata_features = {

  // ==========================================================
  // CÂY XANH (điểm + vòng tròn tán lá)
  // Dùng SimpleMarkerSymbol + Polygon cho tán
  // ==========================================================
  trees: [
    {
      type: "point",
      longitude: 106.6730,
      latitude: 10.8125,
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [50, 130, 50, 0.9],
        size: 8,
        outline: { color: [30, 80, 30, 1], width: 1 }
      },
      Name: "Cây sọ khỉ (Monkeypod)",
      Description: "Cây sọ khỉ (Albizia saman) cổ thụ cao 25m, tán rộng 30m. Đường kính thân 1.2m. Đây là loài cây bóng mát chủ đạo trong công viên, có tuổi đời trên 80 năm. Tán lá rộng che bóng mát cho khu vực ghế đá nghỉ chân.",
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
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [60, 140, 60, 0.9],
        size: 7,
        outline: { color: [30, 80, 30, 1], width: 1 }
      },
      Name: "Cây lim xẹt (Cajeput)",
      Description: "Cây lim xẹt (Melaleuca cajuputi) cao 20m, thân thẳng, vỏ trắng xốp. Đặc trưng của vùng đất ngập nước Nam Bộ. Lá có tinh dầu khuynh diệp thơm đặc trưng. Cung cấp bóng mát dọc theo lối đi bộ chính.",
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
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [70, 150, 70, 0.9],
        size: 6,
        outline: { color: [30, 80, 30, 1], width: 1 }
      },
      Name: "Cây me tây (Tamarind)",
      Description: "Cây me tây (Tamarindus indica) cao 15m, tán rộng. Quả me chua được dùng làm gia vị và nước giải khát. Cây có tuổi đời khoảng 50 năm, là điểm nhấn cảnh quan gần hồ nước.",
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
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [55, 135, 55, 0.9],
        size: 7,
        outline: { color: [30, 80, 30, 1], width: 1 }
      },
      Name: "Cây bò cạp nước (Water mimosa)",
      Description: "Cây bò cạp nước (Neptunia oleracea) mọc gần khu vực ẩm ướt, ven hồ. Thân cây có phao xốp giúp nổi trên mặt nước. Lá cây có thể làm rau ăn, có vị chua nhẹ.",
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
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [65, 145, 65, 0.9],
        size: 8,
        outline: { color: [30, 80, 30, 1], width: 1 }
      },
      Name: "Cây thông (Pine)",
      Description: "Cây thông nhựa (Pinus merkusii) cao 18m, thân thẳng, tán hình tháp. Là loài cây lá kim duy nhất trong công viên, tạo điểm nhấn cảnh quan khác biệt.",
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
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [50, 125, 50, 0.9],
        size: 6,
        outline: { color: [30, 80, 30, 1], width: 1 }
      },
      Name: "Cây bàng (Terminalia catappa)",
      Description: "Cây bàng cao 12m, tán lá rộng xòe như chiếc ô. Lá bàng to, rụng theo mùa. Quả bàng có thể ăn được. Cây trồng nhiều dọc các lối đi trong công viên, tạo bóng mát và cảnh quan đẹp.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Terminalia_catappa.jpg/320px-Terminalia_catappa.jpg",
      Species: "Terminalia catappa",
      Height_m: 12,
      Canopy_m: 14,
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // VÒNG TRÒN TÁN CÂY (Canopy)
  // ==========================================================
  canopies: [
    {
      type: "polygon",
      rings: (function () {
        var cx = 106.6730, cy = 10.8125, r = 0.00013;
        var pts = [];
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
      Name: "Tán cây sọ khỉ",
      popupTemplate: popup_feature
    },
    {
      type: "polygon",
      rings: (function () {
        var cx = 106.6740, cy = 10.8120, r = 0.00007;
        var pts = [];
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
      Name: "Tán cây lim xẹt",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // GHẾ ĐÁ / GHẾ NGỒI
  // ==========================================================
  benches: [
    {
      type: "point",
      longitude: 106.6735,
      latitude: 10.8118,
      symbol: {
        type: "simple-marker",
        style: "square",
        color: [160, 130, 100, 0.9],
        size: 6,
        outline: { color: [100, 80, 60, 1], width: 0.8 }
      },
      Name: "Ghế đá nghỉ chân 1",
      Description: "Ghế đá granit dài 1.8m, đặt dưới tán cây sọ khỉ. Vị trí mát mẻ, thích hợp ngồi đọc sách và thư giãn.",
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6762,
      latitude: 10.8115,
      symbol: {
        type: "simple-marker",
        style: "square",
        color: [160, 130, 100, 0.9],
        size: 6,
        outline: { color: [100, 80, 60, 1], width: 0.8 }
      },
      Name: "Ghế đá nghỉ chân 2",
      Description: "Ghế đá cạnh hồ nước, có tầm nhìn đẹp ra mặt hồ và vườn hoa. Được nhiều bạn trẻ chọn làm điểm chụp ảnh.",
      popupTemplate: popup_feature
    },
    {
      type: "point",
      longitude: 106.6785,
      latitude: 10.8120,
      symbol: {
        type: "simple-marker",
        style: "square",
        color: [160, 130, 100, 0.9],
        size: 6,
        outline: { color: [100, 80, 60, 1], width: 0.8 }
      },
      Name: "Ghế đá nghỉ chân 3",
      Description: "Ghế đá dọc đường đi bộ Gia Định 2, gần khu vực đoàn xiếc.",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // TRẠM TẬP THỂ DỤC NGOÀI TRỜI
  // ==========================================================
  fitness: [
    {
      type: "point",
      longitude: 106.6748,
      latitude: 10.8125,
      symbol: {
        type: "simple-marker",
        style: "triangle",
        color: [60, 120, 180, 0.9],
        size: 10,
        outline: { color: [30, 80, 130, 1], width: 1 }
      },
      Name: "Trạm tập thể dục ngoài trời",
      Description: "Khu tập thể dục ngoài trời với các thiết bị: xà đơn, xà kép, máy tập đạp chân, ghế tập bụng, máy kéo tay. Trang bị miễn phí cho người dân tập luyện hàng ngày. Hoạt động tốt nhất vào sáng sớm (5h-7h) và chiều tối (17h-19h).",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Outdoor_fitness_park.jpg/320px-Outdoor_fitness_park.jpg",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // ĐÀI PHUN NƯỚC
  // ==========================================================
  fountain: [
    {
      type: "point",
      longitude: 106.6760,
      latitude: 10.8110,
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: [100, 180, 230, 0.9],
        size: 12,
        outline: { color: [40, 100, 180, 1], width: 1.5 }
      },
      Name: "Đài phun nước trung tâm",
      Description: "Đài phun nước nghệ thuật đặt tại quảng trường nhỏ trung tâm Gia Định 1. Phun nước theo nhạc vào các buổi tối cuối tuần. Xung quanh có bồn hoa và ghế đá, là điểm hẹn hò quen thuộc của các bạn trẻ. Cao 3m, đường kính bể 5m.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Fountain_in_park.jpg/320px-Fountain_in_park.jpg",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // BIỂN CHỈ DẪN
  // ==========================================================
  signs: [
    {
      type: "point",
      longitude: 106.6760,
      latitude: 10.8098,
      symbol: {
        type: "simple-marker",
        style: "diamond",
        color: [200, 180, 140, 0.9],
        size: 8,
        outline: { color: [120, 100, 60, 1], width: 1 }
      },
      Name: "Biển chỉ dẫn lối vào",
      Description: "Biển chỉ dẫn đặt tại cổng chính Hoàng Minh Giám. Cung cấp thông tin: sơ đồ công viên, giờ mở cửa (6h-22h), nội quy, số điện thoại khẩn cấp. Có mã QR tra cứu thông tin trực tuyến.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Park_sign.jpg/320px-Park_sign.jpg",
      popupTemplate: popup_feature
    }
  ],

  // ==========================================================
  // TRẠM XE ĐẠP CÔNG CỘNG
  // ==========================================================
  bicycle: [
    {
      type: "point",
      longitude: 106.6748,
      latitude: 10.8100,
      symbol: {
        type: "simple-marker",
        style: "square",
        color: [50, 150, 180, 0.9],
        size: 10,
        outline: { color: [30, 100, 130, 1], width: 1 }
      },
      Name: "Trạm xe đạp công cộng",
      Description: "Trạm cho thuê xe đạp công cộng phục vụ du khách đi dạo trong công viên. Giá thuê: 10.000đ/giờ. Có 20 xe đạp đơn và 5 xe đạp đôi. Hoạt động 6h-21h hàng ngày.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Public_bicycle_station.jpg/320px-Public_bicycle_station.jpg",
      popupTemplate: popup_feature
    }
  ]
};

window.initFeatures = function (featureLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var addPoint = function (data) {
      var geom = { type: data.type, longitude: data.longitude, latitude: data.latitude };
      featureLayer.add(new Graphic({
        geometry: geom,
        symbol: data.symbol,
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

    jsondata_features.trees.forEach(function (d) { addPoint(d); });
    jsondata_features.canopies.forEach(function (d) { addPolygon(d); });
    jsondata_features.benches.forEach(function (d) { addPoint(d); });
    jsondata_features.fitness.forEach(function (d) { addPoint(d); });
    jsondata_features.fountain.forEach(function (d) { addPoint(d); });
    jsondata_features.signs.forEach(function (d) { addPoint(d); });
    jsondata_features.bicycle.forEach(function (d) { addPoint(d); });

    console.log("✅ features.js: Đã thêm " + (
      jsondata_features.trees.length +
      jsondata_features.canopies.length +
      jsondata_features.benches.length +
      jsondata_features.fitness.length +
      jsondata_features.fountain.length +
      jsondata_features.signs.length +
      jsondata_features.bicycle.length
    ) + " điểm tiện ích & cây xanh");
  });
};
