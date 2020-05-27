$(document).ready(function () {
  $.ajax({
    url: "js/datos.json",
    success: function (response) {
      console.log('datos: ', response);
      console.log('Linea donde carga el JSON');

      response.canciones.forEach((element, i) => {
        if (i < 9) {
          document.getElementById("resultado").innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 p-1">
              <div class="card text-center">
                <img src="img/icon_${element.icono}.svg" class="card-img-top img-fluid img-music">
                  <div class="card-body ">
                     <h5 class="card-title">${element.nombre}</h5>
                       <p class="card-text">
                          <audio src="./${element.ruta}" controls id="music2" ></audio>
                        </p>
                   </div>
                 </div>                          
            </div> `;
        }
      });

      $("#search").keyup(function () {
        if ($("#search").val() == "") {
          $('#res').show();
          $('#resfiltrado').hide();
        }
        else {
          $('#res').hide();
          $('#resfiltrado').show();
          var texto = $("#search").val();
          canciones = response.canciones;
          document.getElementById("resultado").innerHTML = "";
          var html = "";
          for (var j = 0; j < canciones.length; j++) {
            if (canciones[j].nombre.indexOf(texto) !== -1) {
                html +=
                `<div class="col-md-4 col-sm-6 p-2">
                  <div class="card bg-light">
                   <div class="card-header text-center">
                     <img width="50px" height="50px" src="img/icon_${canciones[j].icono}.svg" class="mx-auto d-block"">
                    </div>
    
                   <div class="card-body">
                      <h5 class="card-title text-center text-weight-bold">${ canciones[j].nombre}</h5>
                       <audio src="./${canciones[j].ruta}" controls class="embed-responsive-item"></audio>
                   </div>
                </div>
            </div>`;
            }
            document.getElementById("resultado").innerHTML = html;
          }
          if (document.getElementById("resultado").innerHTML === '') {
            document.getElementById("resultado").innerHTML += `
            <div class="col-md-12">
              <div class="alert alert-danger">
                <h3>La canción indicada no se encuentra disponible</h3>
              </div>
            </div><br> `;
          }
        }
      })
    }


  })
})
