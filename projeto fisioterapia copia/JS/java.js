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
   
