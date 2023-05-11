//
// Declaración de variables que contienen elementos button
const btnTraerDatos = document.getElementById("btnTraerDatos");

//
// Declaración de variables que contienen elementos para output
const tablaDeDatos = document.getElementById("tablaDeDatos");

//
/* LÓGICA PRINCIPAL DE LA PÁGINA */
document.addEventListener("DOMContentLoaded", () => {
  // Evento click del botón btnTraerDatos
  btnTraerDatos.addEventListener("click", () => {
    // Llamada a la función que realiza la petición AJAX
    getApiData(tablaDeDatos.id);
  });
});
