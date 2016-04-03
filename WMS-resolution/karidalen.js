/*
 * http://github.com/sverres
 *
 * sverre.stikbakke 03.04.2016
 *
 */

//http://kartverket.no/Kart/Gratis-kartdata/WMS-tjenester/
//http://status.kartverket.no/tjenester/openwms.py?
//http://openwms.statkart.no/skwms1/wms.topo2?request=GetCapabilities&Service=WMS

var attribution = new ol.Attribution({
  html: 'Kartgrunnlag: <a href="http://kartverket.no">Kartverket</a>'
});

var extentKartverketWMS25832 = [234068, 6338450, 1351516, 8051673];

var projection = new ol.proj.Projection({
  code: 'EPSG:25832',
  extent: extentKartverketWMS25832
});

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
    minResolution: 2,
    maxResolution: 200,
    resolution: 20,
  })
});
