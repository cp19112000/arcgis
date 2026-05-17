/* lod0_terrain_2d.js – Ground, plaza, pathways – 3 sublayers, compound ~103×81m */
(function (g) {
  "use strict";

  g.loadLOD0 = function (layers) {
    var L01 = layers.lod0_1, L02 = layers.lod0_2, L03 = layers.lod0_3;

    // --- LOD 0.1 – Mặt đất & Thảm cỏ ---
    L01.add(g.makePolygon(g.rectRings(-52, -36, 58, 52),
      { Name: "Quảng trường Công xã Paris", Type: "Plaza", LOD: "LOD 0.1" },
      g.symbol.fill([210, 200, 180, 0.7], [160, 150, 130, 0.5], 0.5)));

    L01.add(g.makePolygon(g.rectRings(-48, 22, 55, 48),
      { Name: "Bồn cỏ phía Bắc", Type: "Lawn", LOD: "LOD 0.1" },
      g.symbol.fill([130, 180, 100, 0.8], [100, 150, 70, 0.4], 0.5)));

    L01.add(g.makePolygon(g.rectRings(-48, -33, 55, -17),
      { Name: "Bồn cỏ phía Nam", Type: "Lawn", LOD: "LOD 0.1" },
      g.symbol.fill([130, 180, 100, 0.8], [100, 150, 70, 0.4], 0.5)));

    // --- LOD 0.2 – Giao thông ---
    L02.add(g.makePolygon(g.rectRings(56, -38, 63, 54),
      { Name: "Đường Đồng Khởi", Type: "Road", LOD: "LOD 0.2" },
      g.symbol.fill([80, 80, 80, 0.8], [60, 60, 60, 0.6], 0.5)));

    L02.add(g.makePolygon(g.rectRings(-55, 50, 63, 57),
      { Name: "Đường Lê Duẩn", Type: "Road", LOD: "LOD 0.2" },
      g.symbol.fill([80, 80, 80, 0.8], [60, 60, 60, 0.6], 0.5)));

    L02.add(g.makePolygon(g.rectRings(-55, -38, 63, -32),
      { Name: "Đường Phạm Ngọc Thạch", Type: "Road", LOD: "LOD 0.2" },
      g.symbol.fill([80, 80, 80, 0.8], [60, 60, 60, 0.6], 0.5)));

    L02.add(g.makePolygon(g.rectRings(-60, -38, -52, 52),
      { Name: "Đường phía Tây", Type: "Road", LOD: "LOD 0.2" },
      g.symbol.fill([80, 80, 80, 0.8], [60, 60, 60, 0.6], 0.5)));

    // --- LOD 0.3 – Công trình phụ ---
    L03.add(g.makePolygon(g.rectRings(22, -4, 50, 4),
      { Name: "Đường đi chính giữa ra Đồng Khởi", Type: "Walkway", LOD: "LOD 0.3" },
      g.symbol.fill([190, 185, 170, 0.8], [170, 165, 150, 0.5], 0.5)));

    L03.add(g.makePolygon([g.circleRings(35, 0, 3.5, 32)],
      { Name: "Đài phun nước trung tâm", Type: "Fountain", LOD: "LOD 0.3" },
      g.symbol.fill([100, 150, 200, 0.6], [70, 120, 180, 0.8], 1)));

    L03.add(g.makePolygon(g.rectRings(-50, 28, -32, 47),
      { Name: "Bãi đỗ xe Bắc", Type: "Parking", LOD: "LOD 0.3" },
      g.symbol.fill([140, 140, 140, 0.6], [120, 120, 120, 0.4], 0.5)));

    L03.add(g.makePolygon(g.rectRings(-50, -33, -32, -20),
      { Name: "Bãi đỗ xe Nam", Type: "Parking", LOD: "LOD 0.3" },
      g.symbol.fill([140, 140, 140, 0.6], [120, 120, 120, 0.4], 0.5)));

    console.log("✅ LOD0: 0.1 mặt đất (3), 0.2 giao thông (4), 0.3 phụ trợ (4) – compound ~103×81m");
  };
})(window);