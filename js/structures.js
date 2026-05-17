/**
 * ============================================================
 * js/structures.js
 * Thành viên phụ trách: PHÚC (Serpentine Bench) + PHÁT (Stairway + Viaducts)
 * Nhiệm vụ: Dựng khối 3D các cấu trúc cảnh quan của Park Güell:
 *           băng ghế rắn, cầu thang rồng, cầu mái vòm.
 * ============================================================
 *
 * Kỹ thuật: Polygon footprint + ExtrudeSymbol3DLayer
 * Tọa độ: WGS84 [longitude, latitude]
 * ============================================================
 */

var popup_template_structure = {
  title: "{Name}",
  content: "{Description}<br/><div style='width:100%;text-align:center;'><img src='{ImageUrl}' /></div>"
};

var jsondata_structures = {

  // ==========================================================
  // PHÚC (thành viên 3): Serpentine Bench (Banc de Trencadís)
  // ==========================================================
  bench: [
    {
      type: "polygon",
      rings: [
        [2.15279, 41.41436],
        [2.15292, 41.41437],
        [2.15293, 41.41438],
        [2.15279, 41.41437],
        [2.15279, 41.41436]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 0.6,
          material: { color: [250, 235, 200, 1] },
          edges: { type: "solid", color: [200, 180, 140, 0.3] }
        }]
      },
      Name: "Băng ghế rắn (Serpentine Bench) – Mặt Tây",
      Description: "Phần băng ghế uốn lượn dọc theo cạnh phía Tây của quảng trường. Mặt ghế được lát gốm mosaic trencadís với các mảnh gốm vỡ tái chế, tạo thành các họa tiết hình học và hoa văn trừu tượng đầy màu sắc. Đây là một trong những tác phẩm mosaic lớn nhất thế giới, dài tổng cộng hơn 110m.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Parc_G%C3%BCell_-_Banc_de_trencad%C3%ADs.jpg/320px-Parc_G%C3%BCell_-_Banc_de_trencad%C3%ADs.jpg",
      Material: "Gốm mosaic trencadís trên nền bê tông",
      Designer: "Josep Maria Jujol (cộng sự của Gaudí)",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15304, 41.41439],
        [2.15306, 41.41454],
        [2.15305, 41.41455],
        [2.15303, 41.41440],
        [2.15304, 41.41439]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 0.6,
          material: { color: [250, 235, 200, 1] },
          edges: { type: "solid", color: [200, 180, 140, 0.3] }
        }]
      },
      Name: "Băng ghế rắn (Serpentine Bench) – Mặt Đông",
      Description: "Phần băng ghế dọc cạnh phía Đông. Các mảnh gốm được Jujol sắp xếp theo trình tự màu sắc: trắng – xanh dương – vàng – cam – đỏ, tạo hiệu ứng chuyển sắc liên tục. Mỗi đoạn ghế có hoa văn riêng biệt, không đoạn nào giống đoạn nào.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Parc_G%C3%BCell_-_Trencadis_bench.jpg/320px-Parc_G%C3%BCell_-_Trencadis_bench.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15278, 41.41454],
        [2.15306, 41.41456],
        [2.15306, 41.41455],
        [2.15279, 41.41453],
        [2.15278, 41.41454]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 0.6,
          material: { color: [250, 235, 200, 1] },
          edges: { type: "solid", color: [200, 180, 140, 0.3] }
        }]
      },
      Name: "Băng ghế rắn (Serpentine Bench) – Mặt Bắc",
      Description: "Phần băng ghế phía Bắc có tầm nhìn toàn cảnh thành phố Barcelona và biển Địa Trung Hải. Đây là khu vực được du khách yêu thích nhất để chụp ảnh. Lưng ghế uốn cong theo hình sin, được thiết kế dựa trên đường cong tự nhiên của cột sống con người, tạo tư thế ngồi thoải mái.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Parc_G%C3%BCell_1900.jpg/320px-Parc_G%C3%BCell_1900.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15278, 41.41436],
        [2.15279, 41.41435],
        [2.15278, 41.41452],
        [2.15277, 41.41452],
        [2.15278, 41.41436]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 0.6,
          material: { color: [250, 235, 200, 1] },
          edges: { type: "solid", color: [200, 180, 140, 0.3] }
        }]
      },
      Name: "Băng ghế rắn (Serpentine Bench) – Mặt Tây Nam",
      Description: "Đoạn băng ghế ngắn nhất ở phía Tây Nam quảng trường. Đây là ranh giới giữa quảng trường trên cao và khu vực cầu thang rồng phía dưới. Từ đây có thể nhìn thấy toàn bộ kiến trúc cầu thang và tượng rồng mosaic nổi tiếng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Park_G%C3%BCell_%28Barcelona%29_-_1.jpg/320px-Park_G%C3%BCell_%28Barcelona%29_-_1.jpg",
      popupTemplate: popup_template_structure
    }
  ],

  // ==========================================================
  // PHÁT (thành viên 4 + 5): Cầu thang Rồng + Cầu mái vòm
  // ==========================================================

  // Phần A: Cầu thang Rồng (Escalinata del Dragón)
  stairway: [
    {
      type: "polygon",
      rings: [
        [2.15266, 41.41433],
        [2.15276, 41.41434],
        [2.15276, 41.41435],
        [2.15266, 41.41434],
        [2.15266, 41.41433]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 0.6,
          material: { color: [200, 180, 155, 0.9] },
          edges: { type: "solid", color: [120, 100, 80, 0.4] }
        }]
      },
      Name: "Cầu thang Rồng – Bậc dưới (Escalinata del Dragón)",
      Description: "Bậc thang dưới cùng của cầu thang chính dẫn từ cổng vào lên quảng trường. Rộng 10m, được chia làm 3 nhánh: hai bên dẫn lên và nhánh giữa dẫn đến đài phun nước rồng (El Drac). Các bậc được lát đá tự nhiên, hai bên là tường đá ốp gốm mosaic xanh trắng.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Parc_G%C3%BCell_-_Escalinata_del_Drag%C3%B3n.jpg/320px-Parc_G%C3%BCell_-_Escalinata_del_Drag%C3%B3n.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15267, 41.41435],
        [2.15277, 41.41436],
        [2.15277, 41.41437],
        [2.15267, 41.41436],
        [2.15267, 41.41435]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 1.2,
          material: { color: [200, 180, 155, 0.9] },
          edges: { type: "solid", color: [120, 100, 80, 0.4] }
        }]
      },
      Name: "Cầu thang Rồng – Bậc giữa",
      Description: "Bậc thang giữa dẫn đến bệ tượng rồng. Tại chiếu nghỉ giữa là đài phun nước nhỏ hình mặt nạ (Cara de Barcelona) bằng đá, nước chảy từ miệng mặt nạ xuống bể chứa bên dưới. Hệ thống nước được Gaudí thiết kế thành một vòng tuần hoàn khép kín.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Parc_Guell_%283548366531%29.jpg/320px-Parc_Guell_%283548366531%29.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15268, 41.41437],
        [2.15278, 41.41438],
        [2.15278, 41.41440],
        [2.15268, 41.41439],
        [2.15268, 41.41437]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 1.8,
          material: { color: [200, 180, 155, 0.9] },
          edges: { type: "solid", color: [120, 100, 80, 0.4] }
        }]
      },
      Name: "Cầu thang Rồng – Bậc trên (Đài phun nước Rồng)",
      Description: "Bậc trên cùng của cầu thang, nơi đặt tượng rồng El Drac – biểu tượng nổi tiếng nhất của Park Güell. Tượng rồng cao 2m được ốp hoàn toàn bằng gốm mosaic màu sắc sặc sỡ (đỏ, vàng, xanh lam). Từ miệng rồng có vòi nước chảy xuống bể đá bên dưới. Đây là điểm chụp ảnh được du khách yêu thích nhất trong công viên.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/El_Drac_-_Park_G%C3%BCell.jpg/320px-El_Drac_-_Park_G%C3%BCell.jpg",
      popupTemplate: popup_template_structure
    }
  ],

  // Phần B: Cầu mái vòm (Els Viaductes / Les Voltes)
  viaducts: [
    {
      type: "polygon",
      rings: [
        [2.15295, 41.41425],
        [2.15298, 41.41427],
        [2.15290, 41.41439],
        [2.15287, 41.41437],
        [2.15295, 41.41425]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 3.5,
          material: { color: [190, 170, 145, 0.9] },
          edges: { type: "solid", color: [100, 85, 65, 0.5], size: 0.8 }
        }]
      },
      Name: "Cầu mái vòm phía Nam (Viaducte de les Santas)",
      Description: "Cầu đá uốn cong dài 45m nối từ khu vực cổng vào lên sườn đồi phía Nam. Mái vòm được chống đỡ bởi các cột nghiêng (inclined columns) – một sáng tạo kết cấu của Gaudí, tạo cảm giác như những thân cây đang vươn lên. Hai bên cầu có ghế đá để du khách nghỉ chân.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Park_G%C3%BCell_-_Viaduct.jpg/320px-Park_G%C3%BCell_-_Viaduct.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15315, 41.41442],
        [2.15320, 41.41444],
        [2.15322, 41.41452],
        [2.15317, 41.41450],
        [2.15315, 41.41442]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 4,
          material: { color: [185, 165, 140, 0.9] },
          edges: { type: "solid", color: [100, 85, 65, 0.5], size: 0.8 }
        }]
      },
      Name: "Cầu mái vòm phía Đông (Viaducte del Jardí)",
      Description: "Cầu đá dài nhất trong hệ thống cầu mái vòm của Park Güell, chạy dọc theo rìa phía Đông của khu di tích. Cầu cao 4m, có các trụ nghiêng đỡ mái vòm cong. Ven theo cầu là các bồn hoa và cây leo, tạo không gian đi bộ mát mẻ vào mùa hè.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Parc_G%C3%BCell_%284441337553%29.jpg/320px-Parc_G%C3%BCell_%284441337553%29.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15310, 41.41455],
        [2.15318, 41.41458],
        [2.15322, 41.41462],
        [2.15318, 41.41465],
        [2.15308, 41.41460],
        [2.15310, 41.41455]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 3,
          material: { color: [180, 160, 135, 0.9] },
          edges: { type: "solid", color: [100, 85, 65, 0.5], size: 0.8 }
        }]
      },
      Name: "Cầu mái vòm phía Bắc (Viaducte del Calvari)",
      Description: "Cầu đá phía Bắc dẫn lên đồi Calvary, hẹp và dốc hơn các cầu khác. Được xây với kỹ thuật vòm cuốn (barrel vault) bằng đá bazan tự nhiên, tạo hiệu ứng ánh sáng và bóng đổ độc đáo. Đây là tuyến đường chính để lên đỉnh đồi ngắm toàn cảnh Barcelona.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Parc_G%C3%BCell_%284637488477%29.jpg/320px-Parc_G%C3%BCell_%284637488477%29.jpg",
      popupTemplate: popup_template_structure
    },
    {
      type: "polygon",
      rings: [
        [2.15285, 41.41422],
        [2.15292, 41.41424],
        [2.15297, 41.41426],
        [2.15295, 41.41428],
        [2.15288, 41.41426],
        [2.15283, 41.41424],
        [2.15285, 41.41422]
      ],
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "extrude",
          size: 2.8,
          material: { color: [195, 175, 150, 0.9] },
          edges: { type: "solid", color: [100, 85, 65, 0.5], size: 0.8 }
        }]
      },
      Name: "Cầu mái vòm phía Tây (Viaducte de la Font)",
      Description: "Cầu vòm ngắn nhất chạy dọc theo sườn phía Tây, gần khu vực đài phun nước. Điểm đặc biệt của cầu này là mái vòm được ốp gạch ceramic màu nâu đỏ, tạo sự tương phản với màu đá xám tự nhiên của các trụ cầu. Dọc theo cầu là dãy ghế đá có lưng tựa.",
      ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Parc_G%C3%BCell_-_Les_Voltes_del_Carrer_de_Olot.jpg/320px-Parc_G%C3%BCell_-_Les_Voltes_del_Carrer_de_Olot.jpg",
      popupTemplate: popup_template_structure
    }
  ]
};

window.initStructures = function (structureLayer) {
  require(["esri/Graphic"], function (Graphic) {

    var createGraphic = function (data) {
      var geom = { type: data.type, rings: data.rings };
      return new Graphic({
        geometry: geom,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate
      });
    };

    jsondata_structures.bench.forEach(function (data) {
      structureLayer.add(createGraphic(data));
    });

    jsondata_structures.stairway.forEach(function (data) {
      structureLayer.add(createGraphic(data));
    });

    jsondata_structures.viaducts.forEach(function (data) {
      structureLayer.add(createGraphic(data));
    });

    console.log("✅ structures.js: Đã thêm " + (jsondata_structures.bench.length + jsondata_structures.stairway.length + jsondata_structures.viaducts.length) + " cấu trúc cảnh quan");
  });
};
