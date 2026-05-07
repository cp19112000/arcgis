/**
 * ============================================================
 * js/polygons.js
 * Thành viên phụ trách: MẠNH
 * Nhiệm vụ: Vẽ 6 khu vực chức năng của Công viên Gia Định
 *           dưới dạng đa giác (Polygon) lên bản đồ.
 * ============================================================
 *
 * HƯỚNG DẪN SỬ DỤNG:
 *   1. Mở file này lên.
 *   2. Cập nhật tọa độ `rings` cho từng polygon nếu cần điều chỉnh.
 *   3. Đảm bảo mỗi polygon có màu (color) KHÁC NHAU.
 *
 * Tọa độ dạng: [longitude, latitude]  (WGS84)
 * ============================================================
 */

var popup_template_polygon = {
  title: "{Name}",
  content:
    "{Description}<br/><img src='{ImageUrl}' style='width:100%;border-radius:8px;margin-top:8px;'/>",
};

var jsondata_polygons = {
  polygons: [
    {
      type: "polygon",
      rings: [
        [106.67310974317421, 10.81223406123936],
        [106.67353279375821, 10.811866839383558],
        [106.67417228882707, 10.812639937504388],
        [106.67378859178577, 10.812978167305786],
        [106.67310974317421, 10.81223406123936],
      ],
      symbol: {
        type: "simple-fill",
        color: [255, 215, 0, 0.5],
        outline: { color: [184, 134, 11], width: 2 },
      },
      Name: "Khu vui chơi trẻ em",
      Description:
        "Khu vực vui chơi giải trí dành riêng cho trẻ em với các thiết bị leo trèo, cầu trượt và xích đu.",
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polygon,
    },

    {
      type: "polygon",
      rings: [
        [106.67420480463534, 10.811592296910083],
        [106.67408721493241, 10.81153268275824],
        [106.67403031668907, 10.811446987394227],
        [106.67404169633774, 10.811357566118733],
        [106.6741023877973, 10.811227160044169],
        [106.67432998077068, 10.811167545819783],
        [106.67447412298716, 10.811301677808002],
        [106.67447412298716, 10.811439535622284],
        [106.67423894358134, 10.811599748678223],
        [106.67420480463534, 10.811592296910083],
      ],
      symbol: {
        type: "simple-fill",
        color: [160, 196, 255, 0.5],
        outline: { color: [30, 100, 200], width: 2 },
      },
      Name: "Quảng trường trung tâm",
      Description:
        "Khu vực quảng trường rộng lớn ở trung tâm công viên, thường tổ chức sự kiện văn hóa và biểu diễn nghệ thuật.",
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polygon,
    },

    {
      type: "polygon",
      rings: [
        [106.6943, 10.8105],
        [106.6963, 10.8105],
        [106.6966, 10.8118],
        [106.696, 10.8122],
        [106.6943, 10.812],
        [106.6943, 10.8105],
      ],
      symbol: {
        type: "simple-fill",
        color: [100, 210, 255, 0.6],
        outline: { color: [0, 120, 180], width: 2 },
      },
      Name: "Hồ nước lớn",
      Description:
        "Hồ nước tự nhiên rộng lớn, điểm nhấn cảnh quan của công viên, phục vụ câu cá và ngắm cảnh.",
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polygon,
    },

    {
      type: "polygon",
      rings: [
        [106.6976, 10.8146],
        [106.6993, 10.8146],
        [106.6993, 10.8162],
        [106.6976, 10.8162],
        [106.6976, 10.8146],
      ],
      symbol: {
        type: "simple-fill",
        color: [178, 242, 187, 0.6],
        outline: { color: [30, 160, 60], width: 2 },
      },
      Name: "Khu máy tập thể dục ngoài trời",
      Description:
        "Khu vực trang bị nhiều loại máy tập thể dục ngoài trời miễn phí cho người dân tập luyện sức khỏe.",
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polygon,
    },

    {
      type: "polygon",
      rings: [
        [106.67531282872753, 10.812224385882672],
        [106.67570711343787, 10.811999128149935],
        [106.67549521893368, 10.811780456738827],
        [106.67516664834173, 10.812076848673327],
        [106.67531282872753, 10.812224385882672],
      ],
      symbol: {
        type: "simple-fill",
        color: [206, 212, 218, 0.7],
        outline: { color: [80, 80, 80], width: 2 },
      },
      Name: "Bãi giữ xe",
      Description:
        "Khu bãi giữ xe có sức chứa lớn phục vụ khách tham quan, có bảo vệ 24/7.",
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polygon,
    },

    {
      type: "polygon",
      rings: [
        [106.6748841945213, 10.812021968409582],
        [106.67519995890179, 10.811689655108594],
        [106.67480299796632, 10.811242139281681],
        [106.67446016806751, 10.811552298836679],
        [106.6748841945213, 10.812021968409582],
      ],
      symbol: {
        type: "simple-fill",
        color: [247, 131, 172, 0.5],
        outline: { color: [180, 40, 90], width: 2 },
      },
      Name: "Vườn hoa & cảnh quan",
      Description:
        "Khu vườn hoa đủ màu sắc theo mùa, thảm cỏ xanh được chăm sóc kỹ lưỡng, điểm check-in yêu thích.",
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_polygon,
    },
  ],
};

window.initPolygons = function (polygonLayer) {
  require(["esri/Graphic"], function (Graphic) {
    var createGraphic = function (data) {
      return new Graphic({
        geometry: data,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate,
      });
    };

    jsondata_polygons.polygons.forEach(function (data) {
      polygonLayer.add(createGraphic(data));
    });

    console.log(
      "✅ polygons.js: Đã thêm " +
        jsondata_polygons.polygons.length +
        " đa giác vào bản đồ",
    );
  });
};
