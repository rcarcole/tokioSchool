//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function botonEnviar(){
  let mail = document.getElementById("formControlMail").value;
  let name = document.getElementById("formControlName").value;
  console.log(mail);
  console.log(name);
  // el if no funciona  
  if (mail || name != null){
    console.log("mensaje enviado");
    let enviar = document.getElementById("enviar");
    enviar.addEventListener("click", () => {
      // s'envia varies vegades el alert
      alert("Mensaje enviado");
    });
  } else {
    alert ("Introduzca un correo electrónico válido y el nombre de reserva.")
  }
}

// GoogleMaps API
let map, infoWindow, marker;

function initMap() {
    let pos = {lat: 40.884181, lng: 0.804911};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        pos = {
          lat: 40.884181,
          lng: 0.804911,
        };

        
    const marker = new google.maps.Marker({
        position: pos,
        map,
    });
    marker.setMap(map);
    map.setCenter(pos);
    },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
    
  map = new google.maps.Map(document.getElementById("containerMap"), {
    center:  pos,
    zoom: 15,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
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
