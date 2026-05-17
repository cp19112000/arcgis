/* features_2d.js – Statue, fence, trees, lamps – all coords via g.toGeo() */
(function (g) {
  "use strict";

  g.loadFeatures = function (layer) {

    // ===== 1. STATUE – tọa độ tương đối qua toGeo(75, 0) =====
    var statueSym = g.symbol.marker(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='12' r='5' fill='%23f5d6b8'/%3E%3Cpath d='M10 30 L16 22 L22 30 Z' fill='%23456bb0'/%3E%3C/svg%3E", 20
    );
    var sp = g.toGeo(75, 0);
    layer.add(g.makePoint(sp[0], sp[1],
      { Name: "Tượng Đức Mẹ Hòa Bình", Type: "Statue", Material: "Đá trắng Carrara", Height: "4.6m" }, statueSym));

    // ===== 2. MAIN CROSS =====
    var crossSym = g.symbol.line([220, 190, 60, 0.9], 2.5, "solid");
    layer.add(g.makePolyline(
      [[g.toGeo(0, 0.3), g.toGeo(0, -0.3), g.toGeo(0, 0), g.toGeo(0.3, 0), g.toGeo(-0.3, 0)]],
      { Name: "Thánh giá trên nóc nhà thờ", Type: "Cross", Material: "Kim loại mạ vàng" }, crossSym));

    // ===== 3. FENCE – compound ~103×81m =====
    var fenceSym = g.symbol.line([80, 80, 80, 0.7], 1.5, "solid");
    layer.add(g.makePolyline(
      [[g.toGeo(-48, -33), g.toGeo(-48, 48), g.toGeo(55, 48), g.toGeo(55, -33), g.toGeo(-48, -33)]],
      { Name: "Hàng rào sắt bao quanh", Type: "Fence", Length: "~210m", Material: "Sắt rèn" }, fenceSym));

    // ===== 4. GATES =====
    var gateSym = g.symbol.marker(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='8' y='6' width='16' height='24' fill='%238b4513' stroke='%235a2d0c' stroke-width='2'/%3E%3C/svg%3E", 16
    );
    [[0,48,"Cổng Bắc"],[0,-33,"Cổng Nam"],[55,0,"Cổng Đông"],[-48,0,"Cổng Tây"]].forEach(function(gt) {
      var p = g.toGeo(gt[0], gt[1]);
      layer.add(g.makePoint(p[0], p[1], { Name: gt[2], Type: "Gate", Material: "Sắt rèn" }, gateSym));
    });

    // ===== 5. TREES (12 trong khuôn viên) =====
    var treeSym = g.symbol.marker(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='12' r='12' fill='%232e7d32' opacity='0.8'/%3E%3Crect x='14' y='22' width='4' height='8' fill='%235d3a1a'/%3E%3C/svg%3E", 18
    );
    [[-35,35],[-30,40],[-20,38],[-10,42],[35,35],[30,40],[-35,-20],[-30,-25],[-20,-22],[-10,-18],[35,-20],[30,-25]].forEach(function(tp, ti) {
      var t = g.toGeo(tp[0], tp[1]);
      layer.add(g.makePoint(t[0], t[1], { Name: "Cây xanh #"+(ti+1), Type: "Tree", Height: "~8-15m", LOD: "Feature" }, treeSym));
    });

    // ===== 6. LAMPS (8 dọc lối đi) =====
    var lampSym = g.symbol.marker(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='14' y='8' width='4' height='22' fill='%23444'/%3E%3Ccircle cx='16' cy='6' r='6' fill='%23ffd54f' opacity='0.9'/%3E%3C/svg%3E", 12
    );
    for (var li = 0; li < 8; li++) {
      var lp = g.toGeo(20 + li * 3, (li%2===0) ? 3 : -3);
      layer.add(g.makePoint(lp[0], lp[1], { Name: "Đèn đường #"+(li+1), Type: "Street Lamp", LOD: "Feature" }, lampSym));
    }

    // ===== 7. BENCHES (6 dọc lối đi) =====
    var benchSym = g.symbol.marker(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='6' y='14' width='20' height='6' rx='2' fill='%238b4513'/%3E%3Crect x='8' y='20' width='3' height='6' fill='%23444'/%3E%3Crect x='21' y='20' width='3' height='6' fill='%23444'/%3E%3C/svg%3E", 14
    );
    [[25,10],[35,10],[45,10],[25,-10],[35,-10],[45,-10]].forEach(function(bp, bi) {
      var b = g.toGeo(bp[0], bp[1]);
      layer.add(g.makePoint(b[0], b[1], { Name: "Ghế đá #"+(bi+1), Type: "Bench", Material: "Đá granite" }, benchSym));
    });

    // ===== 8. SIGN =====
    var signSym = g.symbol.marker(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='6' y='4' width='20' height='24' rx='2' fill='%232c3e50'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='6'%3Ei%3C/text%3E%3C/svg%3E", 12
    );
    var sp = g.toGeo(35, 12);
    layer.add(g.makePoint(sp[0], sp[1], { Name: "Bảng thông tin di tích", Type: "Information Sign", LOD: "Feature" }, signSym));

    // ===== 9. CROSSWALKS =====
    var crosswalkSym = g.symbol.line([255, 255, 255, 0.7], 2, "solid");
    for (var cw = 0; cw < 3; cw++) {
      layer.add(g.makePolyline([[g.toGeo(60, -15 + cw*15), g.toGeo(60, 5 + cw*15)]],
        { Name: "Vạch qua đường Đồng Khởi #"+(cw+1), Type: "Crosswalk", LOD: "Feature" }, crosswalkSym));
    }

    console.log("✅ Features: statue, cross, fence, 4 gates, 12 trees, 8 lamps, 6 benches, sign, 3 crosswalks");
  };
})(window);