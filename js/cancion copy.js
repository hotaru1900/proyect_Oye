// $(document).ready(function () {
//     $.ajax({
//       url: "js/datos.json",
//       success: function (response) {
//         console.log('datos: ', response);
//         console.log('Linea donde carga el JSON');

//         response.canciones.forEach((element, i) => {
//             if (i < 9) {
//               document.getElementById("resultado").innerHTML 
//               += `
//               <div class="col-12 col-md-6 col-lg-4 p-1">
//               <div class="card text-center">
//                               <img src="img/icon_${element.icono}.svg" class="card-img-top img-fluid img-music">
//                               <div class="card-body ">
//                                   <h5 class="card-title">${element.nombre}</h5>
//                                    <p class="card-text">
//                                    <audio src="./${element.ruta}" controls id="music2" ></audio>
//                                    </p>
//                               </div>
//                           </div>                          
              
//               </div>`;
//             }
//           });


//         nomCancion = response.canciones;
// 		    const search = document.querySelector("#search");
//         const resultado = document.querySelector("#resultado");
        
//         const filtrar = () => {
//           resultado.innerHTML = "";
//           const texto = search.value.toLowerCase();

//           for (let element of nomCancion)
//           {
//             let nombre = element.nombre.toLowerCase();
//             if (nombre.indexOf(texto) !== -1 ){
              
//               resultado.innerHTML += `
//               <div class="col-12 col-md-6 col-lg-4 p-1">
//               <div class="card text-center">
//                               <img src="img/icon_${element.icono}.svg" class="card-img-top img-fluid img-music">
//                               <div class="card-body ">
//                                   <h5 class="card-title">${element.nombre}</h5>
//                                    <p class="card-text">
//                                    <audio src="./${element.ruta}" controls id="music2" ></audio>
//                                    </p>
//                               </div>
//                           </div>                          
              
//               </div>`;
//             }
//           }
          
          
//           if (resultado.innerHTML === "")
//           {
//             resultado.innerHTML += `
//             <div class="alert alert-warning" role="alert">
//               La canción buscada no se encuentra disponible
//             </div>
//             `;
//           };
          
//           search.addEventListener("keyup", filtrar);
//           filtrar();
          
//         }
               
//       }
      
//     })
//   })



// $(document).ready(function () {
//     $.ajax({
//       url: "js/datos.json",
//       success: function (response) {
//         console.log('datos: ', response);
//         console.log('Linea donde carga el JSON');

//         {
//           var texto = $("#search").val();
// canciones = respuesta.canciones;
// document.getElementById("resultado").innerHTML = "";
// var html="";
// for(var j = 0; j < canciones.length; j++){
// if(canciones[j].nombre.indexOf(texto) !== -1){
// html+=
// `<div class="col-md-4 col-sm-6 p-2">
// <div class="card bg-light">
// <div class="card-header text-center">
// <img width="50px" height="50px" src="imagenes/icon_${canciones[j].icono}.svg" class="mx-auto d-block"">
// </div>

// <div class="card-body">
// <h5 class="card-title text-center text-weight-bold">${ canciones[j].nombre }</h5>
// <audio src="./canciones/${canciones[j].ruta}" controls class="embed-responsive-item"></audio>
// </div>
// </div>
// </div>`;
// }
// document.getElementById("resultado").innerHTML = html;
// }
// if(document.getElementById("resultado").innerHTML.innerHTML === ''){
// document.getElementById("resultado").innerHTML.innerHTML += `
// <div class="col-md-12">
// <div class="alert alert-danger">
// <h3>Sin resultados</h3>
// </div>
// </div><br>
// `;
// }

        
          
//         }
               
//       }
      
//     })
//   })

$(document).ready(function () {
  $.ajax({
    url: "js/datos.json",
    success: function (response) {
      console.log('datos: ', response);
      console.log('Linea donde carga el JSON');

      response.canciones.forEach((element, i) => {
                    if (i < 9) {
                      document.getElementById("resultado").innerHTML 
                      += `
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
                      
                      </div>`;
                    }
                  });


      nomCancion = response.canciones;
      const search = document.querySelector("#search");
      const resultado = document.querySelector("#resultado");
      
      const filtrar = () => {
        resultado.innerHTML = "";
        const texto = search.value.toLowerCase()
        for (let element of nomCancion)
        {
          let nombre = element.nombre.toLowerCase();
          if (nombre.indexOf(texto) !== -1 ){
            
            resultado.innerHTML += `
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
            
            </div>`;
          }
        }
        
        
        if (resultado.innerHTML === "")
        {
          resultado.innerHTML += `
          <div class="alert alert-warning" role="alert">
            La canción buscada no se encuentra disponible
          </div>
          `;
        };          
      }

      $("#inputsearch").keyup(function (){
        filtrar();
        })
             
    }
    
  })
})