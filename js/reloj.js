function obtenerFecha() {
  const fecha = new Date();
  console.log(fecha.getDate());
  console.log(fecha.getDay()); //0-6 siendo 0 el domingo
  console.log(fecha.getMonth());
  console.log(fecha.getFullYear());
  console.log(fecha.getHours());
  console.log(fecha.getMinutes());
  console.log(fecha.getSeconds());

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  console.log(diasSemana[fecha.getDay()]);

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  console.log(meses[fecha.getMonth()]);

  const textoFecha = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  console.log(textoFecha);

  //Buscar el h2 y el h3 que tiene la fecha y la hora
  const tituloFecha = document.querySelector("h2");
  const reloj = document.querySelector("h3");
  console.log(tituloFecha);
  console.log(reloj);
  
  //remplazar
  tituloFecha.innerText = textoFecha;
  
  reloj.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}

setInterval(obtenerFecha, 1000);
