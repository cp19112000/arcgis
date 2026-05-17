/**
 * ============================================================
 * js/polylines.js
 * Thành viên phụ trách: HÀ
 * Nhiệm vụ: Vẽ 6 tuyến đường nội khu Công viên Gia Định
 *           dưới dạng đường (Polyline) lên bản đồ.
 * ============================================================
 *
 * HƯỚNG DẪN SỬ DỤNG:
 *   1. Cập nhật tọa độ `paths` cho từng tuyến đường.
 *   2. Đảm bảo mỗi đường có màu (color) và nét (style) KHÁC NHAU.
 *   3. style có thể là: "solid" | "dash" | "dot" | "dash-dot"
 *
 * Tọa độ dạng: [longitude, latitude]  (WGS84)
 * ============================================================
 */

var popup_template_polyline = {
  title: "{Name}",
  content: "{Description}<br/><img src='{ImageUrl}' style='width:100%;border-radius:8px;margin-top:8px;'/>"
};

var jsondata_polylines = {
  lines: [

    {
      type: "polyline",
      paths: [
        [106.6723, 10.8103],
        [106.6718, 10.8112],
        [106.6721, 10.8122],
        [106.6733, 10.8128],
        [106.6743, 10.8125],
        [106.6747, 10.8118],
        [106.6745, 10.8107],
        [106.6735, 10.8102],
        [106.6723, 10.8103]
      ],
      symbol: {
        type: "simple-line",
        color: [34, 139, 230],
        style: "solid",
        width: 3
      },
      Name: "Đường chạy bộ vòng hồ",
      Description: "Tuyến đường dài ~600m chạy vòng quanh hồ nước, trải nhựa phẳng, phù hợp chạy bộ buổi sáng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polyline
    },

    {
      type: "polyline",
      paths: [
        [106.6720, 10.8133],
        [106.6730, 10.8133],
        [106.6740, 10.8133],
        [106.6750, 10.8133],
        [106.6760, 10.8133],
        [106.6773, 10.8133]
      ],
      symbol: {
        type: "simple-line",
        color: [247, 103, 7],
        style: "solid",
        width: 4
      },
      Name: "Lối đi lát gạch trung tâm",
      Description: "Con đường lát gạch đỏ cắt ngang công viên, dài ~400m, có hàng cây xanh hai bên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polyline
    },

    {
      type: "polyline",
      paths: [
        [106.6773, 10.8100],
        [106.6773, 10.8115],
        [106.6773, 10.8130],
        [106.6773, 10.8145],
        [106.6773, 10.8162]
      ],
      symbol: {
        type: "simple-line",
        color: [64, 192, 87],
        style: "dash",
        width: 3
      },
      Name: "Đường nội bộ xe đạp",
      Description: "Tuyến đường dành riêng cho xe đạp và người đi bộ ven phía Đông công viên, dài ~500m.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polyline
    },

    {
      type: "polyline",
      paths: [
        [106.6746, 10.8100],
        [106.6746, 10.8112],
        [106.6746, 10.8123]
      ],
      symbol: {
        type: "simple-line",
        color: [134, 142, 150],
        style: "solid",
        width: 5
      },
      Name: "Lối vào từ cổng chính",
      Description: "Đường trải nhựa rộng 6m dẫn từ cổng chính vào trung tâm công viên, có vỉa hè hai bên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polyline
    },

    {
      type: "polyline",
      paths: [
        [106.6720, 10.8130],
        [106.6725, 10.8136],
        [106.6730, 10.8140],
        [106.6728, 10.8147],
        [106.6722, 10.8148]
      ],
      symbol: {
        type: "simple-line",
        color: [247, 131, 172],
        style: "dash-dot",
        width: 2
      },
      Name: "Đường dạo khu vườn hoa",
      Description: "Lối đi nhỏ uốn lượn qua các luống hoa, lát đá cuội, thích hợp dạo bộ thư giãn.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polyline
    },

    {
      type: "polyline",
      paths: [
        [106.6735, 10.8148],
        [106.6737, 10.8142],
        [106.6739, 10.8138]
      ],
      symbol: {
        type: "simple-line",
        color: [204, 93, 232],
        style: "solid",
        width: 2
      },
      Name: "Đường nối khu trẻ em – quảng trường",
      Description: "Tuyến đường nối khu vui chơi trẻ em với quảng trường trung tâm, có biển báo an toàn cho trẻ.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polyline
    }

  ]
};

window.initPolylines = function (polylineLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var createGraphic = function (data) {
      return new Graphic({
        geometry:      data,
        symbol:        data.symbol,
        attributes:    data,
        popupTemplate: data.popupTemplate
      });
    };

    jsondata_polylines.lines.forEach(function (data) {
      polylineLayer.add(createGraphic(data));
    });

    console.log("✅ polylines.js: Đã thêm " + jsondata_polylines.lines.length + " tuyến đường vào bản đồ");
  });
};
