satellite = document.getElementById("1");
topo = document.getElementById("2");
osm = document.getElementById("3");
streets = document.getElementById("4");

require (["esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/layers/FeatureLayer"],
   function(Map, MapView, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer)
   {
    let map1 = new Map({basemap:"streets"});
    let mapContainer = new MapView({
        container: "b",  
        map: map1  
        , zoom: 15,
        center: [22.57, 51.25]
      });
      let basemapToggle = new BasemapToggle({
      view: mapContainer,
      nextBasemap: "satellite"
      });
      mapContainer.ui.add(basemapToggle, "bottom-right");

      let basemapGallery = new BasemapGallery({
         view: mapContainer,
         source: {
           portal: {
             url: "https://www.arcgis.com",
             useVectorBasemaps: true  // Load vector tile basemaps
           }
         }
       });
      mapContainer.ui.add(basemapGallery, "top-right");
      
      var graphicsLayer = new GraphicsLayer();

      var map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
      });

      var sketch = new Sketch({
         view: mapContainer,
         layer: graphicsLayer
      });
      mapContainer.ui.add(sketch, "top-right");
      
      var parksLayer = new FeatureLayer({
         url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
      });
      map1.add(parksLayer, 0);
      
   })
   

   


/*require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   satellite.addEventListener("click", function(){
    let map1 = new Map({basemap:"satellite"});
    let mapContainer = new MapView({
        container: "b",  
        map: map1 
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   topo.addEventListener("click", function(){
    let map1 = new Map({basemap:"topo"});
    let mapContainer = new MapView({
        container: "b",  
        map: map1  
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   osm.addEventListener("click", function(){
    let map1 = new Map({basemap:"osm"});
    let mapContainer = new MapView({
        container: "b", 
        map: map1  
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   streets.addEventListener("click", function(){
    let map1 = new Map({basemap:"streets"});
    let mapContainer = new MapView({
        container: "b", 
        map: map1  
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})


require([
   "esri/Map",
   "esri/views/MapView",
   "esri/widgets/BasemapToggle",
   "esri/widgets/BasemapGallery"
 ], function(Map, MapView, BasemapToggle, BasemapGallery) {*/
