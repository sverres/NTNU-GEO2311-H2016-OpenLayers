/*
 * http://github.com/sverres
 *
 * sverre.stikbakke 04.04.2016
 *
 */

/*
http://kartverket.no/Kart/Gratis-kartdata/WMS-tjenester/
http://status.kartverket.no/tjenester/openwms.py?
http://openwms.statkart.no/skwms1/wms.topo2?request=GetCapabilities&Service=WMS
http://wms.geonorge.no/kr/koordsys_res.txt
*/

var attribution = new ol.Attribution({
  html: 'Kartgrunnlag: <a href="http://kartverket.no">Kartverket</a>'
});

var extentKartverketWMS25832 = [234068, 6338450, 1351516, 8051673];

var projection = new ol.proj.Projection({
  code: 'EPSG:25832',
  extent: extentKartverketWMS25832
});

var resolutionsKartverket = [
  21664,
  10832,
  5416,
  2708,
  1354,
  677,
  338.5,
  169.25,
  84.625,
  42.3125,
  21.15625,
  10.578125,
  5.2890625,
  2.64453125,
  1.322265625,
  0.6611328125,
  0.33056640625,
  0.165283203125,
  0.0826416015625
];

var topo2 = new ol.layer.Tile({
  extent: extentKartverketWMS25832,
  source: new ol.source.TileWMS({
    attributions: [attribution],
    url: 'http://openwms.statkart.no/skwms1/wms.topo2?',
    params: {
      'LAYERS': 'topo2_WMS',
      'STYLES': 'default'
    },
  })
});

var map = new ol.Map({
  layers: [topo2],
  target: 'map',
  view: new ol.View({
    projection: projection,
    center: [591500, 6740500],
    resolutions: resolutionsKartverket,
    zoom: 15
  })
});
