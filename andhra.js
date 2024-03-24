const myMapA = L.map('map').setView([13.70766128103367, 77.36912362849475], 6.4);
const tileUrlA = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attributionA ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileLayerA = L.tileLayer(tileUrlA, { attributionA });
tileLayerA.addTo(myMapA);

function Popup(Dam) {
    return `
      <div class="leaflet-popup-content-wrapper dam-popup">
            <h4>${Dam.properties.name}</h4>
            <p>${Dam.properties.address}</p> 
        </div>
    `;
  }
  
  function Popup(Plants) {
    return `
    <div class="leaflet-popup-content-wrapper plant-popup">
    <h4>${Plants.properties.name}</h4>
    <p>${Plants.properties.address}</p> 
</div>
    `;
  }
  
  
function Feature(feature, layer) {
    layer.bindPopup(Popup(feature));
}

function PlantFeature(Plantfeature, layer) {
    layer.bindPopup(Popup(Plantfeature));
}

// let myIcon = L.icon({
//     iconUrl: 'png.png',
//     iconSize: [30, 40]
// });


const LayerA = L.geoJSON(Dam, {
    onEachFeature: Feature,
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng);   //,{ icon: myIcon }
    }
});
LayerA.addTo(myMapA);

let myIconA= L.icon({
    iconUrl: 'download.jpg',
    iconSize: [30, 40]
});
const PlantLayerA = L.geoJSON(Plants, {
    onEachFeature: PlantFeature,
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng,{ icon: myIconA });   //,
    }
});
PlantLayerA.addTo(myMapA);