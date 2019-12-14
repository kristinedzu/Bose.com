 var attribution = new ol.control.Attribution({
     collapsible: false
 });

 var map = new ol.Map({
     controls: ol.control.defaults({attribution: false}).extend([attribution]),
     layers: [
         new ol.layer.Tile({
             source: new ol.source.OSM()
             })
     ],
     target: 'mapdiv',
     view: new ol.View({
         center: ol.proj.fromLonLat([10.213404, 56.1496278]),
         maxZoom: 18,
         zoom: 11
     })
 });

 var layer = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([10.213404, 56.1496278]))
             })
         ]
     })
 });
 map.addLayer(layer);

