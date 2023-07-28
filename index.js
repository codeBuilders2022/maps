 // Datos de los estados y sus municipios
 var estadosMunicipios = {
    "Aguascalientes": ["Altaria", "Galerías Aguascalientes"],
    // Puedes agregar más estados y municipios aquí
  };

  // Función para generar y mostrar las opciones de municipios de un estado dado
  function mostrarOpciones() {
    var municipioLista = document.getElementById("municipioLista");
    municipioLista.innerHTML = ""; // Limpiamos la lista para evitar duplicados

    // Obtenemos el estado seleccionado
    var estadoSeleccionado = "Aguascalientes"; // Puedes cambiar esto con la lógica para obtener el estado seleccionado

    // Generamos las opciones de municipios para el estado seleccionado
    var municipios = estadosMunicipios[estadoSeleccionado];
    for (var i = 0; i < municipios.length; i++) {
      var municipio = municipios[i];
      var li = document.createElement("li");
      li.textContent = municipio;
      li.onclick = function() { obtenerValor(this); };
      municipioLista.appendChild(li);
    }

    // Alternar la visibilidad de las opciones de municipios al hacer clic en el botón
    if (municipioLista.style.display === "none") {
      municipioLista.style.display = "block";
    } else {
      municipioLista.style.display = "none";
    }
  }

  function obtenerValor(liElement) {
    var valorSeleccionado = liElement.innerText;
    console.log("Valor seleccionado: " + valorSeleccionado);
    // Puedes guardar el valor seleccionado en una variable, enviarlo al servidor o realizar cualquier otra acción con él.
  }