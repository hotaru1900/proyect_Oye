
$(document).ready(function () {
  $.ajax({
    url: "js/datos.json",
    success: function (response) {
      console.log('datos: ', response);
      console.log('Linea donde carga el JSON');

      var filterR = response.canciones.sort(function (a, b) 
        {
         return parseFloat(b.reproducciones) - parseFloat(a.reproducciones);
        });

        filterR.forEach((element, i) => 
        {
        if (i < 3) {
          document.getElementById("resultado").innerHTML += `
          <div class="row">
                  <div class="col-12 col-md-6">
                          <h4>${element.nombre}</h4>
                  </div>
                      <div class="col-12 col-md-6">
                          <audio id="music1" src="./${element.ruta}" controls></audio>
                   </div>
           </div>   
                  `;
        }
        
      });
      
    }
  })
})

