// https://youtu.be/1R6Qng7jA8w
let imagenes = [];
let juego;
let pantallaInicio = true; 
let tiempoInicioJuego;

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
  tiempoInicioJuego = millis(); 
}

function draw() {
  background(255);
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
    pantallaInicio = false; 
    tiempoInicioJuego = millis(); 
  } else {
    juego.keyPressed();
  }
}
