function MaisSobre() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLermais = document.getElementById("btnLerMais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLermais.innerHTML = "Mais Sobre";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLermais.innerHTML = "Fechar";
    }

}

$(document).on('hidden.bs.modal',function(event){
    if($('.modal:visible').lenght){
     $('body').addClass('modal-open')
    }
   })
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

   
