/* lod1_blocks_2d.js – Cruciform footprint – 3D extruded walls */
(function (g) {
  "use strict";

  g.loadLOD1 = function (layers) {
    var L11 = layers.lod1_1, L12 = layers.lod1_2, L13 = layers.lod1_3;

    // --- LOD 1.1 – Gian chính ---
    L11.add(g.makePolygon(g.rectRings(-20, -17.5, 35, 17.5),
      { Name: "Gian chính (Nave)", Type: "Main Body", LOD: "LOD 1.1", Length: "55m", Width: "35m", Height: "20m" },
      g.symbol3D.extrude(20, [170, 150, 130, 0.85], [100, 85, 70, 0.8], 1.5)));

    L11.add(g.makePolygon(g.rectRings(-15, -32, 10, 32),
      { Name: "Cánh ngang (Transept)", Type: "Crossing", LOD: "LOD 1.1", Span: "64m", Height: "20m" },
      g.symbol3D.extrude(20, [170, 150, 130, 0.85], [100, 85, 70, 0.8], 1.5)));

    // --- LOD 1.2 – Hậu cung ---
    L12.add(g.makePolygon(g.rectRings(-35, -17.5, -20, 17.5),
      { Name: "Cung thánh (Choir)", Type: "Chancel", LOD: "LOD 1.2", Length: "15m", Height: "15m" },
      g.symbol3D.extrude(15, [180, 160, 140, 0.85], [100, 85, 70, 0.8], 1.5)));

    var apseRings = g.arcRings(-35, 0, 17.5, 90, 270, 20);
    apseRings.unshift(g.toGeo(-35, -17.5));
    apseRings.push(g.toGeo(-35, 17.5));
    L12.add(g.makePolygon([apseRings],
      { Name: "Hậu cung bán nguyệt (Apse)", Type: "Apse", LOD: "LOD 1.2", Radius: "17.5m", Height: "15m" },
      g.symbol3D.extrude(15, [180, 160, 140, 0.85], [100, 85, 70, 0.8], 1.5)));

    // --- LOD 1.3 – Tháp chuông & Phụ trợ ---
    L13.add(g.makePolygon(g.rectRings(33, 2, 40, 17.5),
      { Name: "Tháp chuông Bắc", Type: "Bell Tower", LOD: "LOD 1.3", Height: "60.5m" },
      g.symbol3D.extrude(60.5, [160, 140, 120, 0.9], [90, 75, 60, 0.9], 2)));

    L13.add(g.makePolygon(g.rectRings(33, -17.5, 40, -2),
      { Name: "Tháp chuông Nam", Type: "Bell Tower", LOD: "LOD 1.3", Height: "60.5m" },
      g.symbol3D.extrude(60.5, [160, 140, 120, 0.9], [90, 75, 60, 0.9], 2)));

    L13.add(g.makePolygon(g.rectRings(33, -2, 40, 2),
      { Name: "Narthex (Tiền sảnh)", Type: "Entrance", LOD: "LOD 1.3", Height: "15m" },
      g.symbol3D.extrude(15, [160, 140, 120, 0.85], [100, 85, 70, 0.8], 1.5)));

    L13.add(g.makePolygon(g.rectRings(-20, -17.5, -10, -28),
      { Name: "Phòng thánh Bắc", Type: "Sacristy", LOD: "LOD 1.3", Height: "8m" },
      g.symbol3D.extrude(8, [150, 140, 130, 0.8], [110, 100, 90, 0.6], 1)));

    L13.add(g.makePolygon(g.rectRings(-20, 17.5, -10, 28),
      { Name: "Phòng thánh Nam", Type: "Sacristy", LOD: "LOD 1.3", Height: "8m" },
      g.symbol3D.extrude(8, [150, 140, 130, 0.8], [110, 100, 90, 0.6], 1)));

    console.log("✅ LOD1: 1.1 gian chính (2), 1.2 hậu cung (2), 1.3 tháp & phụ (5) – 3D extruded");
  };
})(window);