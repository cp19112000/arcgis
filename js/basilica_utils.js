/* basilica_utils.js – Shared constants & helper functions for Notre-Dame Saigon 2D/3D Map */
(function (g) {
  "use strict";

  g.CENTER = [106.69891, 10.77980]; // Tọa độ trung tâm nhà thờ (theo OSM)
  g.ANGLE = -38; // Nhà thờ quay mặt hướng Đông Bắc (Công trường Công xã Paris)
  g.M_PER_LAT = 0.0000090376; // 1m ≈ 1/110649° (tại 10.78°N)
  g.M_PER_LON = 0.0000091443; // 1m ≈ 1/109358° (tại 10.78°N)
  g.SR = { wkid: 4326 };

  // Pre‑compute rotation matrix
  var rad = g.ANGLE * Math.PI / 180;
  var cosA = Math.cos(rad);
  var sinA = Math.sin(rad);

  function cLon(m) { return m * g.M_PER_LON; }
  function cLat(m) { return m * g.M_PER_LAT; }

  g.toGeo = function (xMeters, yMeters) {
    var rx = xMeters * cosA - yMeters * sinA;
    var ry = xMeters * sinA + yMeters * cosA;
    return [g.CENTER[0] + cLon(rx), g.CENTER[1] + cLat(ry)];
  };

  g.rectRings = function (x0, y0, x1, y1) {
    var tl = g.toGeo(x0, y1);
    var tr = g.toGeo(x1, y1);
    var br = g.toGeo(x1, y0);
    var bl = g.toGeo(x0, y0);
    return [[tl, tr, br, bl, tl]];
  };

  g.polylinePath = function (points) {
    return points.map(function (p) { return g.toGeo(p[0], p[1]); });
  };

  g.ringPath = function (points) {
    var arr = points.map(function (p) { return g.toGeo(p[0], p[1]); });
    arr.push(arr[0]);
    return arr;
  };

  g.symbol = {
    fill: function (color, outlineColor, outlineWidth) {
      return {
        type: "simple-fill",
        color: color,
        outline: { color: outlineColor || [0, 0, 0, 0.3], width: outlineWidth || 0.5 }
      };
    },
    line: function (color, width, style) {
      return { type: "simple-line", color: color, width: width || 1, style: style || "solid" };
    },
    marker: function (url, size, color) {
      return { type: "picture-marker", url: url, width: size || 24, height: size || 24, color: color || null };
    },
    text: function (text, color, size) {
      return {
        type: "text", text: text, color: color || [255, 255, 255, 1],
        font: { size: size || 10, family: "Arial" }, haloColor: [0, 0, 0, 0.8], haloSize: 1
      };
    }
  };

  // 3D symbols for SceneView extrusion
  g.symbol3D = {
    extrude: function (height, color, edgeColor, edgeWidth) {
      var sl = [{
        type: "extrude",
        size: height,
        material: { color: color }
      }];
      if (edgeColor) sl[0].edges = { type: "solid", color: edgeColor, size: edgeWidth || 1 };
      return { type: "polygon-3d", symbolLayers: sl };
    },
    fill: function (color, outlineColor, outlineWidth) {
      var sl = [{ type: "fill", material: { color: color } }];
      if (outlineColor) sl[0].outline = { color: outlineColor, size: outlineWidth || 1 };
      return { type: "polygon-3d", symbolLayers: sl };
    }
  };

  g.DEFAULT_POPUP = function (title, fields) {
    return {
      title: title,
      content: function (f) {
        var gg = f.graphic;
        var a = gg.attributes;
        var html = "<div style='font-size:12px;line-height:1.6;max-width:280px'>";
        fields.forEach(function (fld) {
          if (a[fld.key]) html += "<b>" + fld.label + ":</b> " + a[fld.key] + "<br/>";
        });
        html += "</div>";
        return html;
      }
    };
  };

  g.circleRings = function (cx, cy, radiusM, segments) {
    var pts = [];
    var n = segments || 32;
    for (var i = 0; i <= n; i++) {
      var a = (i / n) * 2 * Math.PI;
      pts.push(g.toGeo(cx + radiusM * Math.cos(a), cy + radiusM * Math.sin(a)));
    }
    return pts;
  };

  g.arcRings = function (cx, cy, r, startDeg, endDeg, segs) {
    var pts = [];
    var n = segs || 24;
    var s = startDeg * Math.PI / 180;
    var e = endDeg * Math.PI / 180;
    for (var i = 0; i <= n; i++) {
      var a = s + (e - s) * (i / n);
      pts.push(g.toGeo(cx + r * Math.cos(a), cy + r * Math.sin(a)));
    }
    return pts;
  };

  var POPUP_FIELDS = [
    { label: "Tên", key: "Name" },
    { label: "Phân loại", key: "Type" },
    { label: "Vật liệu", key: "Material" },
    { label: "Chiều cao", key: "Height" },
    { label: "Chiều dài", key: "Length" },
    { label: "LOD", key: "LOD" }
  ];

  function graphicOrPlain(config) {
    if (g.Graphic) return new g.Graphic(config);
    return config;
  }

  g.makePolygon = function (rings, attrs, sym) {
    return graphicOrPlain({
      geometry: { type: "polygon", rings: rings, spatialReference: g.SR },
      attributes: attrs || {},
      symbol: sym || g.symbol.fill([150, 150, 150, 0.5]),
      popupTemplate: g.DEFAULT_POPUP((attrs && attrs.Name) || "Đối tượng", POPUP_FIELDS)
    });
  };

  g.makePolyline = function (paths, attrs, sym) {
    return graphicOrPlain({
      geometry: { type: "polyline", paths: paths, spatialReference: g.SR },
      attributes: attrs || {},
      symbol: sym || g.symbol.line([100, 100, 100, 1], 1),
      popupTemplate: g.DEFAULT_POPUP((attrs && attrs.Name) || "Đối tượng", POPUP_FIELDS)
    });
  };

  g.makePoint = function (x, y, attrs, sym) {
    return graphicOrPlain({
      geometry: { type: "point", longitude: x, latitude: y, spatialReference: g.SR },
      attributes: attrs || {},
      symbol: sym || g.symbol.marker("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='8' fill='%23e74c3c' opacity='.8'/%3E%3C/svg%3E", 16),
      popupTemplate: g.DEFAULT_POPUP((attrs && attrs.Name) || "Đối tượng", POPUP_FIELDS)
    });
  };

})(window);
