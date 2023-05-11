/**
 *
 * @param {string} elementoHtml elemento html donde se mostrarán los datos obtenidos de la api
 * @returns {void} Muestra la información en el elemento html pasado por parámetro.
 */
const getApiData = (elementoHtml = "") => {
  if (!elementoHtml == "") {
    const targetElementoHtml = document.getElementById(elementoHtml);
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: (result) => {
        console.log(result);

        // Construcción de la tabla con los datos obtenidos
        targetElementoHtml.innerHTML += ``;
        targetElementoHtml.innerHTML = `<thead><td><b>USUARIOS</b></td></thead>`;
        for (const i in result) {
          targetElementoHtml.innerHTML += `<tr><td>${result[i].username}</td></tr>`;
        }
      },
      error: (er) => {
        console.log(er);
      },
    });
  } else {
    console.log("Faltó el parámetro del elementoHtml");
  }
};
