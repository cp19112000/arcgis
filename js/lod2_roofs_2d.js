/* lod2_roofs_2d.js – Roof shading, towers, spires – 3D elevated roofs */
(function (g) {
  "use strict";

  g.loadLOD2 = function (layers) {
    var L21 = layers.lod2_1, L22 = layers.lod2_2, L23 = layers.lod2_3;

    // --- LOD 2.1 – Mái chính (nave + transept + apse) – offset 20m ---
    L21.add(g.makePolygon(g.rectRings(-20, 0, 35, 17.5),
      { Name: "Mái chính – Phía Nam (sáng)", Type: "Roof", LOD: "LOD 2.1" },
      g.symbol3D.extrude(1.5, [180, 90, 50, 0.85], [120, 60, 30, 0.6], 1)));

    L21.add(g.makePolygon(g.rectRings(-20, -17.5, 35, 0),
      { Name: "Mái chính – Phía Bắc (tối)", Type: "Roof", LOD: "LOD 2.1" },
      g.symbol3D.extrude(1.5, [130, 60, 30, 0.85], [90, 40, 20, 0.6], 1)));

    L21.add(g.makePolygon(g.rectRings(-15, 0, 10, 32),
      { Name: "Mái cánh ngang Bắc", Type: "Roof", LOD: "LOD 2.1" },
      g.symbol3D.extrude(1.5, [170, 85, 45, 0.85], [110, 55, 25, 0.6], 1)));

    L21.add(g.makePolygon(g.rectRings(-15, -32, 10, 0),
      { Name: "Mái cánh ngang Nam", Type: "Roof", LOD: "LOD 2.1" },
      g.symbol3D.extrude(1.5, [130, 60, 30, 0.85], [90, 40, 20, 0.6], 1)));

    // Apse roofs moved here (offset 20m)
    var a1 = g.arcRings(-35, 0, 17.5, 90, 170, 8);
    a1.push(g.toGeo(-35, 0));
    L21.add(g.makePolygon([a1],
      { Name: "Mái hậu cung – Phía Nam", Type: "Roof", LOD: "LOD 2.1" },
      g.symbol3D.extrude(1.5, [180, 90, 50, 0.8], [120, 60, 30, 0.5], 0.5)));

    var a2 = g.arcRings(-35, 0, 17.5, 170, 270, 8);
    a2.unshift(g.toGeo(-35, 0));
    L21.add(g.makePolygon([a2],
      { Name: "Mái hậu cung – Phía Bắc", Type: "Roof", LOD: "LOD 2.1" },
      g.symbol3D.extrude(1.5, [130, 60, 30, 0.8], [90, 40, 20, 0.5], 0.5)));

    // --- LOD 2.2 – Mái phụ (chapels) – offset 8m ---
    for (var i = 0; i < 5; i++) {
      var cx = -15 + i * 11;
      L22.add(g.makePolygon(g.rectRings(cx, 17.5, cx + 9, 22),
        { Name: "Mái nhà nguyện hông Bắc #" + (i + 1), Type: "Chapel Roof", LOD: "LOD 2.2" },
        g.symbol3D.extrude(1, [160, 80, 40, 0.75], [110, 55, 25, 0.5], 0.5)));

      L22.add(g.makePolygon(g.rectRings(cx, -22, cx + 9, -17.5),
        { Name: "Mái nhà nguyện hông Nam #" + (i + 1), Type: "Chapel Roof", LOD: "LOD 2.2" },
        g.symbol3D.extrude(1, [120, 55, 25, 0.75], [80, 35, 15, 0.5], 0.5)));
    }

    // --- LOD 2.3 – Tháp chuông & Thánh giá – offset 60.5m ---
    // N tower 4 faces – thin extrude for 3D spire volume
    L23.add(g.makePolygon([[g.toGeo(40, 2), g.toGeo(40, 17.5), g.toGeo(36.5, 10), g.toGeo(40, 2)]],
      { Name: "Tháp Bắc – Mái Đông", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [190, 100, 50, 0.9], [100, 55, 25, 0.7], 1)));

    L23.add(g.makePolygon([[g.toGeo(33, 17.5), g.toGeo(33, 2), g.toGeo(36.5, 10), g.toGeo(33, 17.5)]],
      { Name: "Tháp Bắc – Mái Tây", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [140, 60, 30, 0.9], [90, 40, 20, 0.7], 1)));

    L23.add(g.makePolygon([[g.toGeo(40, 17.5), g.toGeo(33, 17.5), g.toGeo(36.5, 10), g.toGeo(40, 17.5)]],
      { Name: "Tháp Bắc – Mái Bắc", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [120, 50, 25, 0.9], [80, 35, 15, 0.7], 1)));

    L23.add(g.makePolygon([[g.toGeo(33, 2), g.toGeo(40, 2), g.toGeo(36.5, 10), g.toGeo(33, 2)]],
      { Name: "Tháp Bắc – Mái Nam", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [150, 65, 30, 0.9], [100, 45, 20, 0.7], 1)));

    // S tower 4 faces
    L23.add(g.makePolygon([[g.toGeo(40, -17.5), g.toGeo(40, -2), g.toGeo(36.5, -10), g.toGeo(40, -17.5)]],
      { Name: "Tháp Nam – Mái Đông", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [180, 90, 45, 0.9], [100, 55, 25, 0.7], 1)));

    L23.add(g.makePolygon([[g.toGeo(33, -2), g.toGeo(33, -17.5), g.toGeo(36.5, -10), g.toGeo(33, -2)]],
      { Name: "Tháp Nam – Mái Tây", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [130, 55, 25, 0.9], [90, 40, 20, 0.7], 1)));

    L23.add(g.makePolygon([[g.toGeo(40, -2), g.toGeo(33, -2), g.toGeo(36.5, -10), g.toGeo(40, -2)]],
      { Name: "Tháp Nam – Mái Bắc", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [160, 70, 35, 0.9], [100, 45, 20, 0.7], 1)));

    L23.add(g.makePolygon([[g.toGeo(33, -17.5), g.toGeo(40, -17.5), g.toGeo(36.5, -10), g.toGeo(33, -17.5)]],
      { Name: "Tháp Nam – Mái Nam", Type: "Spire", LOD: "LOD 2.3" },
      g.symbol3D.extrude(2, [120, 45, 20, 0.9], [80, 35, 15, 0.7], 1)));

    // Crosses (lines – inherits layer offset 60.5m)
    var crossSym = g.symbol.line([220, 190, 60, 0.9], 2, "solid");
    L23.add(g.makePolyline(
      [[g.toGeo(36.5, 8.5), g.toGeo(36.5, 11.5), g.toGeo(36.5, 8.5), g.toGeo(35.5, 8.5), g.toGeo(37.5, 8.5)]],
      { Name: "Thánh giá tháp Bắc", Type: "Cross", LOD: "LOD 2.3" }, crossSym));

    L23.add(g.makePolyline(
      [[g.toGeo(36.5, -8.5), g.toGeo(36.5, -11.5), g.toGeo(36.5, -10), g.toGeo(35.5, -10), g.toGeo(37.5, -10)]],
      { Name: "Thánh giá tháp Nam", Type: "Cross", LOD: "LOD 2.3" }, crossSym));

    console.log("✅ LOD2: 2.1 mái chính+apse (6), 2.2 mái nguyện (10), 2.3 tháp+thánh giá (10) – 3D elevated");
  };
})(window);