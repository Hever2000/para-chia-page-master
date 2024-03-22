// Array de preguntas y respuestas
const preguntasRespuestas = [
  {
    pregunta:
      "Taylor Swift ha lanzado más de 10 álbumes de estudio en su carrera.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha ganado un premio Grammy en la categoría de Mejor Álbum del Año más de una vez.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift escribió la canción Love Story en menos de una hora",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha lanzado canciones en español durante su carrera.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha colaborado con artistas de géneros musicales como el rap y el reggaetón.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha sido nombrada la Artista del Año por la revista Time.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha actuado en más de 10 películas a lo largo de su carrera.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha lanzado un álbum de música country en los últimos 5 años.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift escribe todas sus canciones desde cero, sin ayuda de otros compositores.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha sido la artista más joven en ser incluida en la lista de las 100 personas más influyentes de la revista Time.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha compuesto música para bandas sonoras de películas.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha tenido más de 5 canciones número uno en la lista Billboard Hot 100.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha tenido problemas legales relacionados con derechos de autor por algunas de sus canciones.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha lanzado álbumes de música electrónica bajo un seudónimo.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha interpretado a un personaje animado en una película de Disney.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha ganado el premio Nobel de Literatura por sus letras de canciones.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha escrito canciones para otros artistas sin ser acreditada.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha sido la artista más escuchada en la plataforma de streaming Spotify durante más de un año consecutivo.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha creado su propia compañía discográfica independiente.",
    respuesta: true,
  },
  {
    pregunta:
      "Taylor Swift ha lanzado un álbum de covers de canciones de otros artistas.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha sido la artista más buscada en Google durante más de 5 años.",
    respuesta: false,
  },
  {
    pregunta: "Taylor Swift ha actuado en el Super Bowl halftime show.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha compuesto música para obras de teatro y musicales.",
    respuesta: true,
  },
  {
    pregunta:
      "¿Taylor Swift ha lanzado una línea de ropa con diseños inspirados en sus canciones.",
    respuesta: false,
  },
  {
    pregunta:
      "Taylor Swift ha lanzado un álbum acústico en vivo grabado en un concierto íntimo.",
    respuesta: true,
  },
];

const preguntaTitulo = document.getElementById("pregunta-titulo");

let preguntaActual = 0; // Índice de la pregunta actual

// Función para cargar la pregunta actual
function cargarPregunta() {
  preguntaTitulo.textContent = preguntasRespuestas[preguntaActual].pregunta;
}

// Función para verificar la respuesta y avanzar a la siguiente pregunta
function verificarRespuesta(respuestaUsuario) {
  const respuestaCorrecta = preguntasRespuestas[preguntaActual].respuesta;
  if (respuestaUsuario === respuestaCorrecta) {
    alert("¡Respuesta Correcta!");
  } else {
    alert("Respuesta Incorrecta");
  }

  // Avanzar a la siguiente pregunta
  preguntaActual++;
  if (preguntaActual < preguntasRespuestas.length) {
    cargarPregunta();
  } else {
    alert("Has respondido todas las preguntas. ¡Fin del juego!");
    // Puedes añadir aquí cualquier otra acción al terminar el juego
  }
}

// Obtener los elementos de opciones y botón de iniciar
const opcionVerdadero = document.querySelector(".opcion-v");
const opcionFalso = document.querySelector(".opcion-f");
const botonIniciar = document.getElementById("boton-iniciar");

// Agregar eventos de clic a las opciones y al botón de iniciar
opcionVerdadero.addEventListener("click", () => {
  verificarRespuesta(true);
});
opcionFalso.addEventListener("click", () => {
  verificarRespuesta(false);
});
botonIniciar.addEventListener("click", () => {
  cargarPregunta(); // Llamar a la función para cargar la primera pregunta
  botonIniciar.style.display = "none"; // Ocultar el botón de iniciar juego
});
