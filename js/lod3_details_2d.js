/* lod3_details_2d.js – LOD3: buttresses, doors, windows – 3D extruded on walls */
(function (g) {
  "use strict";

  g.loadLOD3 = function (layers) {
    var L31 = layers.lod3_1, L32 = layers.lod3_2, L33 = layers.lod3_3;

    // 3D symbols
    var winExtrude = g.symbol3D.extrude(0.5, [50, 130, 200, 0.7], [30, 80, 150, 0.5], 0.5);
    var doorExtrude = g.symbol3D.extrude(0.3, [80, 60, 40, 0.85], [50, 35, 25, 0.8], 1);
    var stair3D = g.symbol3D.extrude(0.3, [180, 170, 155, 0.7], [140, 130, 115, 0.5], 0.5);
    var window3D = g.symbol3D.extrude(0.4, [180, 200, 220, 0.55], [100, 130, 160, 0.4], 0.5);

    // ====================
    // LOD 3.1 – TRỤ BÍCH (extruded to wall height)
    // ====================
    var butIdx = 0;
    var naveWallH = 20;
    var apseWallH = 15;

    // Nave north wall – extrude 20m
    for (var bx = -17; bx <= 32; bx += 5) {
      if (bx > -10 && bx < 8) continue;
      L31.add(g.makePolygon(g.rectRings(bx, 17.5, bx + 0.8, 19),
        { Name: "Trụ bích #" + (++butIdx) + " (Bắc)", Type: "Buttress", LOD: "LOD 3.1", Height: naveWallH + "m" },
        g.symbol3D.extrude(naveWallH, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
    }
    // Nave south wall – extrude 20m
    for (bx = -17; bx <= 32; bx += 5) {
      if (bx > -10 && bx < 8) continue;
      L31.add(g.makePolygon(g.rectRings(bx, -19, bx + 0.8, -17.5),
        { Name: "Trụ bích #" + (++butIdx) + " (Nam)", Type: "Buttress", LOD: "LOD 3.1", Height: naveWallH + "m" },
        g.symbol3D.extrude(20, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
    }
    // N transept E/W – extrude 20m
    for (var ty = 20; ty <= 30; ty += 5) {
      L31.add(g.makePolygon(g.rectRings(10, ty, 11.5, ty + 0.8),
        { Name: "Trụ bích #" + (++butIdx) + " (cánh Đông Bắc)", Type: "Buttress", LOD: "LOD 3.1", Height: naveWallH + "m" },
        g.symbol3D.extrude(20, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
      L31.add(g.makePolygon(g.rectRings(-15, ty, -13.5, ty + 0.8),
        { Name: "Trụ bích #" + (++butIdx) + " (cánh Tây Bắc)", Type: "Buttress", LOD: "LOD 3.1", Height: naveWallH + "m" },
        g.symbol3D.extrude(20, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
    }
    // S transept E/W – extrude 20m
    for (ty = -30; ty <= -20; ty += 5) {
      L31.add(g.makePolygon(g.rectRings(-15, ty - 0.8, -13.5, ty),
        { Name: "Trụ bích #" + (++butIdx) + " (cánh Tây Nam)", Type: "Buttress", LOD: "LOD 3.1", Height: naveWallH + "m" },
        g.symbol3D.extrude(20, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
      L31.add(g.makePolygon(g.rectRings(10, ty - 0.8, 11.5, ty),
        { Name: "Trụ bích #" + (++butIdx) + " (cánh Đông Nam)", Type: "Buttress", LOD: "LOD 3.1", Height: naveWallH + "m" },
        g.symbol3D.extrude(20, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
    }
    // Apse radial buttresses – extrude 15m
    for (var ab = 0; ab < 6; ab++) {
      var aDeg2 = 140 + ab * 24;
      var aRad2 = aDeg2 * Math.PI / 180;
      var bCX = -35 + 18 * Math.cos(aRad2);
      var bCY = 18 * Math.sin(aRad2);
      L31.add(g.makePolygon(g.rectRings(bCX - 0.4, bCY - 0.8, bCX + 0.4, bCY + 0.8),
        { Name: "Trụ bích #" + (++butIdx) + " (hậu cung)", Type: "Buttress", LOD: "LOD 3.1", Height: apseWallH + "m" },
        g.symbol3D.extrude(15, [165, 148, 128, 0.85], [110, 95, 80, 0.7], 1)));
    }

    // ====================
    // LOD 3.2 – CỬA ĐI & BẬC THỀM (offset 0.5m from ground)
    // ====================
    var doors = [
      { x: 39.5, y: 0, w: 2.5, h: 3.5, label: "Cửa chính giữa" },
      { x: 39.5, y: 7.5, w: 1.8, h: 2.8, label: "Cửa phụ Bắc" },
      { x: 39.5, y: -7.5, w: 1.8, h: 2.8, label: "Cửa phụ Nam" }
    ];
    doors.forEach(function (dp) {
      var hw = dp.w / 2;
      L32.add(g.makePolygon([[
        g.toGeo(dp.x, dp.y - hw),
        g.toGeo(dp.x + 0.3, dp.y - hw),
        g.toGeo(dp.x + 0.3, dp.y - dp.h),
        g.toGeo(dp.x, dp.y - dp.h - 0.5),
        g.toGeo(dp.x - 0.3, dp.y - dp.h),
        g.toGeo(dp.x - 0.3, dp.y + hw),
        g.toGeo(dp.x, dp.y + hw),
        g.toGeo(dp.x, dp.y - hw)
      ]], { Name: dp.label, Type: "Door", LOD: "LOD 3.2" }, doorExtrude));
    });

    // 3 front steps
    var stepY = [-3, 0, 3];
    stepY.forEach(function (sy, si) {
      L32.add(g.makePolygon(g.rectRings(39.5, sy - 1.5, 40.5, sy + 1.5),
        { Name: "Bậc tam cấp – Bậc " + (si + 1), Type: "Steps", LOD: "LOD 3.2" }, stair3D));
    });

    // ====================
    // LOD 3.3 – CỬA SỔ & ROSE WINDOW (offset 12m – clerestory height)
    // ====================

    // --- Rose window (east facade) – thin extrude ---
    L33.add(g.makePolygon([g.circleRings(36.5, 0, 3.2, 28)],
      { Name: "Rose Window – Vòng ngoài", Type: "Rose Window", LOD: "LOD 3.3" },
      g.symbol3D.extrude(0.5, [40, 100, 180, 0.5], [20, 60, 140, 0.8], 1.5)));

    var petalColors = [
      [100, 160, 220, 0.6], [60, 120, 200, 0.65], [140, 180, 230, 0.55], [80, 140, 210, 0.6],
      [120, 170, 225, 0.55], [50, 110, 190, 0.65], [160, 190, 235, 0.5], [90, 150, 215, 0.6]
    ];
    for (var p = 0; p < 8; p++) {
      var a0 = (p / 8) * 2 * Math.PI;
      var a1 = ((p + 0.5) / 8) * 2 * Math.PI;
      var r1 = 1.6, r2 = 3.0;
      var pts = [g.toGeo(36.5 + r1 * Math.cos(a0), r1 * Math.sin(a0))];
      for (var t = 0; t <= 10; t++) {
        var ta = a0 + (a1 - a0) * (t / 10);
        pts.push(g.toGeo(36.5 + r2 * Math.cos(ta), r2 * Math.sin(ta)));
      }
      pts.push(g.toGeo(36.5 + r1 * Math.cos(a1), r1 * Math.sin(a1)));
      L33.add(g.makePolygon([pts],
        { Name: "Rose Window – Cánh hoa #" + (p + 1), Type: "Rose Petal", LOD: "LOD 3.3" },
        g.symbol3D.extrude(0.4, petalColors[p], [30, 80, 160, 0.5], 0.5)));
    }

    L33.add(g.makePolygon([g.circleRings(36.5, 0, 0.6, 20)],
      { Name: "Rose Window – Tâm", Type: "Rose Hub", LOD: "LOD 3.3" },
      g.symbol3D.extrude(0.6, [200, 180, 140, 0.8], [150, 130, 90, 0.6], 1)));

    // --- Stained glass windows – thin extrude at 12m offset ---
    var winIdx = 0;

    // Upper clerestory N & S
    for (var wx = -12; wx <= 28; wx += 5) {
      L33.add(g.makePolygon(g.rectRings(wx, 16, wx + 1.8, 17.5),
        { Name: "C. sổ kính #" + (++winIdx) + " (thượng Bắc)", Type: "Stained Glass", LOD: "LOD 3.3" }, winExtrude));
      L33.add(g.makePolygon(g.rectRings(wx, -17.5, wx + 1.8, -16),
        { Name: "C. sổ kính #" + (++winIdx) + " (thượng Nam)", Type: "Stained Glass", LOD: "LOD 3.3" }, winExtrude));
    }
    // Lower chapel level N & S
    for (wx = -12; wx <= 28; wx += 5) {
      L33.add(g.makePolygon(g.rectRings(wx + 0.5, 17.5, wx + 2.3, 19.5),
        { Name: "C. sổ kính #" + (++winIdx) + " (hạ Bắc)", Type: "Stained Glass", LOD: "LOD 3.3" }, window3D));
      L33.add(g.makePolygon(g.rectRings(wx + 0.5, -19.5, wx + 2.3, -17.5),
        { Name: "C. sổ kính #" + (++winIdx) + " (hạ Nam)", Type: "Stained Glass", LOD: "LOD 3.3" }, window3D));
    }
    // Apse curved windows
    for (var aw = 0; aw < 8; aw++) {
      var aDeg = 100 + aw * 20;
      var aRad = aDeg * Math.PI / 180;
      var cx = -35 + 16 * Math.cos(aRad);
      var cy = 16 * Math.sin(aRad);
      L33.add(g.makePolygon(g.rectRings(cx - 0.5, cy - 0.8, cx + 0.5, cy + 0.8),
        { Name: "C. sổ kính #" + (++winIdx) + " (hậu cung)", Type: "Stained Glass", LOD: "LOD 3.3" }, winExtrude));
    }
    // Transept rose windows
    L33.add(g.makePolygon([g.circleRings(-2, 30, 1.8, 20)],
      { Name: "C. sổ hoa hồng cánh ngang Bắc", Type: "Transept Rose", LOD: "LOD 3.3" },
      g.symbol3D.extrude(0.5, [50, 130, 200, 0.65], [30, 80, 160, 0.6], 1)));

    L33.add(g.makePolygon([g.circleRings(-2, -30, 1.8, 20)],
      { Name: "C. sổ hoa hồng cánh ngang Nam", Type: "Transept Rose", LOD: "LOD 3.3" },
      g.symbol3D.extrude(0.5, [50, 130, 200, 0.65], [30, 80, 160, 0.6], 1)));

    // --- Cornices (lines at 12m offset) ---
    var corniceSym = g.symbol.line([180, 160, 140, 0.6], 1.5, "dash");
    L33.add(g.makePolyline([[g.toGeo(-20, 17.5), g.toGeo(33, 17.5)]],
      { Name: "Gờ chỉ tường Bắc", Type: "Cornice", LOD: "LOD 3.3" }, corniceSym));
    L33.add(g.makePolyline([[g.toGeo(-20, -17.5), g.toGeo(33, -17.5)]],
      { Name: "Gờ chỉ tường Nam", Type: "Cornice", LOD: "LOD 3.3" }, corniceSym));

    console.log("✅ LOD3: 3.1 trụ bích (~" + butIdx + "), 3.2 cửa & bậc (6), 3.3 cửa sổ & rose (~65) – 3D extruded");
  };
})(window);