let contenedor = document.getElementById('containerMap');
let map, infoWindow;

function initMap() {
    let pos = {lat: 39.626202, lng: 2.951665};
    map = new google.maps.Map(document.getElementById("containerMap"), {
      center:  pos,
      zoom: 10,
    });
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      
    });
    fetch("https://catalegdades.caib.cat/resource/j2yj-e83g.json")
  .then(function(response) {
    return response.json();
  }).then(function(data) {
      data.forEach(function(element, i) {
      console.log(element);
      let globo = new google.maps.InfoWindow();
        if (element.geocoded_column != null) {
        const marker = new google.maps.Marker({
          position: {lat: parseFloat(element.geocoded_column.coordinates[1].toFixed(6))+0.000762, lng: parseFloat(element.geocoded_column.coordinates[0].toFixed(6))+0.001150},
          map,
          title: `${i + 1}. ${element.denominaci_comercial}</br> ${element.geocoded_column.coordinates[1]} </br> ${element.geocoded_column.coordinates[0]}`,
          label: `${element.places}`,
          optimized: false,
        });

        marker.addListener("click", () => {
          globo.close();
          globo.setContent(marker.getTitle());
          globo.open(marker.getMap(), marker);
        });
      }
      });
      }
  ).catch(function(error) {
    console.log(error);
  });
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;