/**
 * ============================================================
 * js/park_boundary.js
 * Ranh giới Công viên Gia Định & các lớp cảnh quan nền
 * ============================================================
 *
 * Vẽ: ranh giới công viên, thảm cỏ (63.000m2), hồ nước (117m2),
 *     vườn hoa (650m2), đường đi bộ, bãi đỗ xe, cầu đi bộ.
 * Kỹ thuật: Polygon / Polyline với SimpleFillSymbol / SimpleLineSymbol
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var park_popup = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' /></div>"
};

var jsondata_park = {

  // ==========================================================
  // RANH GIỚI CÔNG VIÊN
  // ==========================================================
  boundary: [
    {
      type: "polygon",
      rings: [[
        [106.6715, 10.8140],
        [106.6835, 10.8140],
        [106.6835, 10.8090],
        [106.6715, 10.8090],
        [106.6715, 10.8140]
      ]],
      symbol: {
        type: "simple-fill",
        color: [200, 220, 180, 0.15],
        outline: {
          color: [80, 140, 60, 0.8],
          width: 2.5,
          type: "simple-line",
          style: "solid"
        }
      },
      Name: "Công viên Gia Định",
      Description: "Công viên cây xanh lớn nhất TP. Hồ Chí Minh, diện tích ~32ha. Nằm giáp ranh giữa quận Gò Vấp và Phú Nhuận. Được quy hoạch từ năm 1950 (sân golf), trở thành công viên từ năm 1978. Chia làm 2 khu: Gia Định 1 và Gia Định 2, ngăn cách bởi đường Đặng Văn Sâm. Là 'lá phổi xanh' của thành phố với hơn 1.000 cây xanh các loại.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Gia_Dinh_Park_-_panoramio.jpg/320px-Gia_Dinh_Park_-_panoramio.jpg",
      Area_ha: 32,
      Established: 1978,
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // ZONE: Gia Định 1 (Tây) & Gia Định 2 (Đông)
  // ==========================================================
  zones: [
    {
      type: "polygon",
      rings: [[
        [106.6715, 10.8140],
        [106.6770, 10.8140],
        [106.6770, 10.8090],
        [106.6715, 10.8090],
        [106.6715, 10.8140]
      ]],
      symbol: {
        type: "simple-fill",
        color: [180, 210, 160, 0.1],
        outline: {
          color: [100, 160, 80, 0.5],
          width: 1,
          type: "simple-line",
          style: "dash"
        }
      },
      Name: "Gia Định 1 (Khu Tây)",
      Description: "Khu vực phía Tây công viên, rộng ~15ha. Bao gồm khu vui chơi trẻ em (8.300m²), vườn hoa cảnh, hồ nước, và các lối đi bộ rợp bóng cây. Có cổng chính ra đường Hoàng Minh Giám. Khu vực này có mật độ cây xanh dày đặc nhất với nhiều cây cổ thụ như sọ khỉ, lim xẹt, me tây.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Parque_G%C3%BCell_-_Jardines_de_Austria.jpg/320px-Parque_G%C3%BCell_-_Jardines_de_Austria.jpg",
      popupTemplate: park_popup
    },
    {
      type: "polygon",
      rings: [[
        [106.6770, 10.8140],
        [106.6835, 10.8140],
        [106.6835, 10.8090],
        [106.6770, 10.8090],
        [106.6770, 10.8140]
      ]],
      symbol: {
        type: "simple-fill",
        color: [170, 200, 150, 0.1],
        outline: {
          color: [100, 160, 80, 0.5],
          width: 1,
          type: "simple-line",
          style: "dash"
        }
      },
      Name: "Gia Định 2 (Khu Đông)",
      Description: "Khu vực phía Đông công viên, rộng ~17ha. Khu vực này có đoàn xiếc TP. HCM, rạp xiếc Gia Định, bãi đỗ xe ô tô, và nhiều lối đi bộ rộng rãi. Phần mở rộng thêm 15,7ha (khu C và D) được đầu tư năm 2015-2017, trồng bổ sung nhiều cây xanh và xây dựng cơ sở hạ tầng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Gia_Dinh_Park_-_panoramio.jpg/320px-Gia_Dinh_Park_-_panoramio.jpg",
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // HỒ NƯỚC (117m2)
  // ==========================================================
  water: [
    {
      type: "polygon",
      rings: [[
        [106.6767, 10.8112],
        [106.6769, 10.8111],
        [106.6771, 10.8112],
        [106.6772, 10.8113],
        [106.6770, 10.8114],
        [106.6768, 10.8114],
        [106.6767, 10.8112]
      ]],
      symbol: {
        type: "simple-fill",
        color: [100, 180, 230, 0.7],
        outline: {
          color: [40, 100, 160, 0.9],
          width: 1.5,
          type: "simple-line",
          style: "solid"
        }
      },
      Name: "Hồ nước cảnh quan",
      Description: "Hồ nước nhân tạo rộng 117m² nằm tại khu vực trung tâm Gia Định 1. Xung quanh hồ có thảm cỏ xanh, ghế đá và cây cảnh. Hồ tạo không gian hài hòa, thoáng mát và là điểm check-in được nhiều bạn trẻ yêu thích. Trong hồ có thả sen súng và nuôi cá cảnh.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Park_G%C3%BCell_-_Porter%27s_Lodge.jpg/320px-Park_G%C3%BCell_-_Porter%27s_Lodge.jpg",
      Area_m2: 117,
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // THẢM CỎ (63.000m2)
  // ==========================================================
  grass: [
    {
      type: "polygon",
      rings: [[
        [106.6725, 10.8130],
        [106.6760, 10.8130],
        [106.6760, 10.8100],
        [106.6725, 10.8100],
        [106.6725, 10.8130]
      ]],
      symbol: {
        type: "simple-fill",
        color: [140, 200, 110, 0.25],
        outline: { color: [100, 170, 70, 0.3], width: 0.5, type: "simple-line", style: "solid" }
      },
      Name: "Thảm cỏ Gia Định 1",
      Description: "Thảm cỏ rộng lớn tại Gia Định 1, là nơi tổ chức dã ngoại, cắm trại, thể dục thể thao ngoài trời.",
      popupTemplate: park_popup
    },
    {
      type: "polygon",
      rings: [[
        [106.6780, 10.8130],
        [106.6825, 10.8130],
        [106.6825, 10.8100],
        [106.6780, 10.8100],
        [106.6780, 10.8130]
      ]],
      symbol: {
        type: "simple-fill",
        color: [130, 190, 100, 0.25],
        outline: { color: [100, 170, 70, 0.3], width: 0.5, type: "simple-line", style: "solid" }
      },
      Name: "Thảm cỏ Gia Định 2",
      Description: "Thảm cỏ rộng tại Gia Định 2, khu vực yên tĩnh thích hợp đi dạo và thư giãn.",
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // VƯỜN HOA (650m2)
  // ==========================================================
  flower_beds: [
    {
      type: "polygon",
      rings: [[
        [106.6758, 10.8118],
        [106.6762, 10.8118],
        [106.6762, 10.8121],
        [106.6758, 10.8121],
        [106.6758, 10.8118]
      ]],
      symbol: {
        type: "simple-fill",
        color: [255, 200, 150, 0.6],
        outline: {
          color: [200, 120, 60, 0.8],
          width: 1.5,
          type: "simple-line",
          style: "solid"
        }
      },
      Name: "Vườn hoa cảnh",
      Description: "Vườn hoa rộng 650m² được trang trí với nhiều loài hoa đủ màu sắc thay đổi theo mùa: hoa giấy, hoa mười giờ, hoa dừa cạn, hoa mào gà. Các bồn hoa được thiết kế theo chủ đề hình học, tạo điểm nhấn cảnh quan cho công viên. Vườn hoa thường xuyên được thay mới vào các dịp lễ Tết.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Garden_path_in_Park_G%C3%BCell.jpg/320px-Garden_path_in_Park_G%C3%BCell.jpg",
      Area_m2: 650,
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // ĐƯỜNG ĐI BỘ CHÍNH
  // ==========================================================
  paths: [
    {
      type: "polyline",
      paths: [[
        [106.6725, 10.8110],
        [106.6745, 10.8110],
        [106.6760, 10.8110]
      ]],
      symbol: {
        type: "simple-line",
        color: [210, 190, 160, 0.8],
        width: 3,
        style: "solid"
      },
      Name: "Đường đi bộ chính Tây",
      Description: "Lối đi bộ chính rộng 3m lát gạch terrazzo, chạy xuyên suốt Gia Định 1 từ cổng Hoàng Minh Giám vào trung tâm công viên.",
      popupTemplate: park_popup
    },
    {
      type: "polyline",
      paths: [[
        [106.6785, 10.8110],
        [106.6805, 10.8110],
        [106.6825, 10.8110]
      ]],
      symbol: {
        type: "simple-line",
        color: [210, 190, 160, 0.8],
        width: 3,
        style: "solid"
      },
      Name: "Đường đi bộ chính Đông",
      Description: "Lối đi bộ chính tại Gia Định 2, kết nối các khu chức năng.",
      popupTemplate: park_popup
    },
    {
      type: "polyline",
      paths: [[
        [106.6745, 10.8100],
        [106.6745, 10.8110],
        [106.6745, 10.8125],
        [106.6745, 10.8135]
      ]],
      symbol: {
        type: "simple-line",
        color: [210, 190, 160, 0.6],
        width: 2,
        style: "solid"
      },
      Name: "Đường đi bộ phụ Tây",
      Description: "Lối đi phụ kết nối khu vui chơi trẻ em với các khu vực khác.",
      popupTemplate: park_popup
    },
    {
      type: "polyline",
      paths: [[
        [106.6760, 10.8105],
        [106.6760, 10.8110],
        [106.6760, 10.8118],
        [106.6760, 10.8128]
      ]],
      symbol: {
        type: "simple-line",
        color: [210, 190, 160, 0.6],
        width: 2,
        style: "solid"
      },
      Name: "Đường đi bộ trung tâm",
      Description: "Lối đi xuyên qua khu vực trung tâm, cạnh vườn hoa và hồ nước.",
      popupTemplate: park_popup
    },
    {
      type: "polyline",
      paths: [[
        [106.6780, 10.8105],
        [106.6790, 10.8115],
        [106.6800, 10.8125],
        [106.6810, 10.8135]
      ]],
      symbol: {
        type: "simple-line",
        color: [210, 190, 160, 0.6],
        width: 2,
        style: "solid"
      },
      Name: "Đường đi bộ chéo Đông",
      Description: "Lối đi chéo qua Gia Định 2, kết nối bãi xe với khu vực đoàn xiếc.",
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // ĐƯỜNG ĐẶNG VĂN SÂM (phân cách 2 khu)
  // ==========================================================
  road: [
    {
      type: "polyline",
      paths: [[
        [106.6770, 10.8090],
        [106.6770, 10.8140]
      ]],
      symbol: {
        type: "simple-line",
        color: [160, 150, 140, 0.9],
        width: 5,
        style: "solid"
      },
      Name: "Đường Đặng Văn Sâm",
      Description: "Đường nội bộ dài 650m phân cách Công viên Gia Định thành 2 khu: Gia Định 1 (phía Tây) và Gia Định 2 (phía Đông). Được xây dựng từ năm 2015 trên nền kênh Nhật Bản cũ, vừa là đường giao thông vừa là trục cảnh quan chính của công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dang_Van_Sam_Street.jpg/320px-Dang_Van_Sam_Street.jpg",
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // CẦU ĐI BỘ
  // ==========================================================
  bridge: [
    {
      type: "polyline",
      paths: [[
        [106.6770, 10.8113],
        [106.6780, 10.8113]
      ]],
      symbol: {
        type: "simple-line",
        color: [180, 130, 80, 0.9],
        width: 4,
        style: "solid"
      },
      Name: "Cầu đi bộ qua đường Đặng Văn Sâm",
      Description: "Cầu đi bộ bắc qua đường Đặng Văn Sâm, nối liền Gia Định 1 và Gia Định 2. Cầu có mái che, lan can sắt trang trí, dài khoảng 30m. Đây là tuyến di chuyển chính cho người đi bộ giữa hai khu của công viên mà không phải qua đường.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Footbridge_in_Gia_Dinh_Park.jpg/320px-Footbridge_in_Gia_Dinh_Park.jpg",
      popupTemplate: park_popup
    }
  ],

  // ==========================================================
  // BÃI ĐỖ XE
  // ==========================================================
  parking: [
    {
      type: "polygon",
      rings: [[
        [106.6725, 10.8094],
        [106.6735, 10.8094],
        [106.6735, 10.8097],
        [106.6725, 10.8097],
        [106.6725, 10.8094]
      ]],
      symbol: {
        type: "simple-fill",
        color: [180, 180, 180, 0.6],
        outline: {
          color: [100, 100, 100, 0.9],
          width: 1.5,
          type: "simple-line",
          style: "solid"
        }
      },
      Name: "Bãi đỗ xe Gia Định 1",
      Description: "Bãi giữ xe máy và ô tô gần cổng chính Hoàng Minh Giám. Sức chứa khoảng 200 xe máy và 30 ô tô. Giá gửi xe: 5.000-10.000đ/xe máy, 20.000-30.000đ/ô tô.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Parking_lot_in_Park_G%C3%BCell.jpg/320px-Parking_lot_in_Park_G%C3%BCell.jpg",
      popupTemplate: park_popup
    },
    {
      type: "polygon",
      rings: [[
        [106.6815, 10.8094],
        [106.6825, 10.8094],
        [106.6825, 10.8098],
        [106.6815, 10.8098],
        [106.6815, 10.8094]
      ]],
      symbol: {
        type: "simple-fill",
        color: [180, 180, 180, 0.6],
        outline: {
          color: [100, 100, 100, 0.9],
          width: 1.5,
          type: "simple-line",
          style: "solid"
        }
      },
      Name: "Bãi đỗ xe Gia Định 2",
      Description: "Bãi giữ xe phía Đông, phục vụ du khách tham quan Gia Định 2 và đoàn xiếc.",
      popupTemplate: park_popup
    }
  ]
};

window.initParkBoundary = function (parkLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var createPolygon = function (data) {
      var geom = { type: data.type, rings: data.rings };
      return new Graphic({
        geometry: geom,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      });
    };

    var createPolyline = function (data) {
      var geom = { type: data.type, paths: data.paths };
      return new Graphic({
        geometry: geom,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      });
    };

    jsondata_park.boundary.forEach(function (d) { parkLayer.add(createPolygon(d)); });
    jsondata_park.zones.forEach(function (d) { parkLayer.add(createPolygon(d)); });
    jsondata_park.water.forEach(function (d) { parkLayer.add(createPolygon(d)); });
    jsondata_park.grass.forEach(function (d) { parkLayer.add(createPolygon(d)); });
    jsondata_park.flower_beds.forEach(function (d) { parkLayer.add(createPolygon(d)); });
    jsondata_park.parking.forEach(function (d) { parkLayer.add(createPolygon(d)); });
    jsondata_park.paths.forEach(function (d) { parkLayer.add(createPolyline(d)); });
    jsondata_park.road.forEach(function (d) { parkLayer.add(createPolyline(d)); });
    jsondata_park.bridge.forEach(function (d) { parkLayer.add(createPolyline(d)); });

    console.log("✅ park_boundary.js: Đã thêm cảnh quan nền");
  });
};
