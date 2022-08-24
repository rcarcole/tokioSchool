// Botón para subir arriba de la página cuando está en scroll
let mybutton = document.getElementById("btn-back-to-top");

//Cuando el usuario scrollea 20px desde el borde superior de la página, se muestra el botón para subir arriba de la página
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
// Cuando el usuario clica en el botón, se hace scroll automático hacia al comienzo del documento
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Apartado de RESERVAS, funcionalidad botón teniendo en cuenta si hay info o no
// Añadido el script de sweet alert en RESERVAS.html
document.getElementById("enviar").addEventListener("click", botonEnviar);
function botonEnviar(){
  let mail = document.getElementById("formControlMail").value;
  let name = document.getElementById("formControlName").value;
  let form = document.getElementById("formulario");
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailRegex.test(mail) && name != ""){
      // form.classList.remove("was-validated");
      Swal.fire('Mensaje enviado.', '', 'success')
    } else {
      form.classList.add('was-validated');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Introduzca un correo electrónico válido y el nombre de reserva.',
      })
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

window.initMap = initMap;
