/**
 * ============================================================
 * js/points.js
 * Thành viên phụ trách: PHÚC
 * Nhiệm vụ: Đặt 6 điểm tiện ích (Point) với PictureMarkerSymbol
 *           trên bản đồ Công viên Gia Định.
 * ============================================================
 *
 * HƯỚNG DẪN SỬ DỤNG:
 *   1. Tải icon PNG/SVG về thư mục assets/icons/
 *   2. Cập nhật `url` trỏ đến đúng file icon.
 *   3. Điều chỉnh tọa độ [longitude, latitude] nếu cần.
 *   4. Kích thước icon khuyến nghị: 32x32 px.
 *
 * Gợi ý tải icon miễn phí:
 *   - https://www.flaticon.com  (tìm: gate, fountain, food, toilet, monument, first-aid)
 *   - https://icons8.com/icons  (export PNG 32px)
 *
 * Tọa độ dạng: [longitude, latitude]  (WGS84)
 * ============================================================
 */

var popup_template_point = {
  title: "{Name}",
  content: "{Description}<br/><img src='{ImageUrl}' style='width:100%;border-radius:8px;margin-top:8px;'/>"
};

var jsondata_points = {
  points: [

    {
      type: "point",
      longitude: 106.6966,
      latitude:  10.8100,
      symbol: {
        type:   "picture-marker",
        url:    "assets/icons/gate.png",
        width:  "36px",
        height: "36px"
      },
      Name: "Cổng chính",
      Description: "Cổng ra vào chính của Công viên Gia Định, mở cửa từ 5:00 – 22:00 hàng ngày.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_point
    },

    {
      type: "point",
      longitude: 106.6966,
      latitude:  10.8132,
      symbol: {
        type:   "picture-marker",
        url:    "assets/icons/fountain.png",
        width:  "34px",
        height: "34px"
      },
      Name: "Đài phun nước",
      Description: "Đài phun nước nghệ thuật tại trung tâm quảng trường, hoạt động vào buổi tối có đèn LED rực rỡ.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_point
    },

    {
      type: "point",
      longitude: 106.6952,
      latitude:  10.8153,
      symbol: {
        type:   "picture-marker",
        url:    "assets/icons/drink.png",
        width:  "32px",
        height: "32px"
      },
      Name: "Quầy nước giải khát",
      Description: "Quầy bán nước, bánh và đồ ăn nhẹ phục vụ khách tham quan, gần khu vui chơi trẻ em.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_point
    },

    {
      type: "point",
      longitude: 106.6985,
      latitude:  10.8131,
      symbol: {
        type:   "picture-marker",
        url:    "assets/icons/restroom.png",
        width:  "32px",
        height: "32px"
      },
      Name: "Nhà vệ sinh công cộng",
      Description: "Nhà vệ sinh công cộng sạch sẽ, có phòng dành cho người khuyết tật và phòng cho mẹ và bé.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_point
    },

    {
      type: "point",
      longitude: 106.6967,
      latitude:  10.8145,
      symbol: {
        type:   "picture-marker",
        url:    "assets/icons/monument.png",
        width:  "36px",
        height: "42px"
      },
      Name: "Tượng đài",
      Description: "Tượng đài lịch sử – điểm check-in nổi tiếng của Công viên Gia Định, biểu tượng văn hóa địa phương.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_point
    },

    {
      type: "point",
      longitude: 106.6975,
      latitude:  10.8105,
      symbol: {
        type:   "picture-marker",
        url:    "assets/icons/first-aid.png",
        width:  "32px",
        height: "32px"
      },
      Name: "Trạm y tế & sơ cứu",
      Description: "Trạm y tế có nhân viên y tế trực 24/7, cung cấp dịch vụ sơ cứu và tư vấn sức khỏe miễn phí.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/320px-Gatto_europeo4.jpg",
      popupTemplate: popup_template_point
    }

  ]
};

window.initPoints = function (pointLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var createGraphic = function (data) {
      return new Graphic({
        geometry:      data,
        symbol:        data.symbol,
        attributes:    data,
        popupTemplate: data.popupTemplate
      });
    };

    jsondata_points.points.forEach(function (data) {
      pointLayer.add(createGraphic(data));
    });

    console.log("✅ points.js: Đã thêm " + jsondata_points.points.length + " điểm tiện ích vào bản đồ");
  });
};
