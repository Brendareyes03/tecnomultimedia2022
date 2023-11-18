let imagenes = [];
let juego; // Crea una variable para el objeto del juego.
let pantallaInicio = true; // Variable para controlar la pantalla de inicio
let tiempoInicioJuego; //Defina una variable para almacenar el tiempo de inicio del juego.

function preload() {
  imagenes[0] = loadImage("arbol.png");
  imagenes[1] = loadImage("cerditomenor.png");
  imagenes[2] = loadImage("lobo.png");
  imagenes[3] = loadImage("ganaste.png");
  imagenes[4] = loadImage("perdiste.png");
  imagenes[5] = loadImage("instrucciones.png");
}

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
  tiempoInicioJuego = millis(); // Guara el tiempo actual en milisegundos
}

function draw() {
  background(255);
  //verifique si se está mostrando la pantalla de inicio o el juego, llamando a las funciones correspondientes.

  if (pantallaInicio) {
    mostrarPantallaInicio();
  } else {
    juego.actualizar();
    juego.mostrar();
  }
}

function mostrarPantallaInicio() {
  image(imagenes[5], 0, 0, 400, 400);
}

function keyPressed() {
  if (pantallaInicio) {
    pantallaInicio = false; // Cambiar a pantalla de juego
    tiempoInicioJuego = millis(); // Reiniciar el tiempo para el juego
  } else {
    juego.keyPressed();
  }
}
